import { assert, describe, it } from "vitest";
import { httpClient } from "./utils";

describe("/api/contact", () => {
	const url = "http://localhost:3000/api/contact"; // URL da API

	it("should return 405 if method is not POST", async () => {
		const response = await httpClient.get(url);
		assert.equal(response.status, 405);
		assert.equal(response.statusText, "Method Not Allowed");
	});

	it("should return 400 if body is not valid", async () => {
		const response = await httpClient.post(url, {});
		assert.equal(response.status, 400);
		assert.equal(response.statusText, "Bad Request");
	});

	it("should return 400 if body is not valid", async () => {
		const response = await httpClient.post(url, {
			name: "John Doe",
			email: "john.doe@example.com",
		});

		assert.equal(response.status, 400);
		assert.equal(response.statusText, "Bad Request");

		const body = await response.json();

		assert.equal(body.error, "Preencha todos os campos");
	});

	it("should return 400 if name is short", async () => {
		const response = await httpClient.post(url, {
			name: "Jo",
			email: "john.doe@example.com",
			message: "Hello, world!",
		});

		assert.equal(response.status, 400);
		assert.equal(response.statusText, "Bad Request");

		const body = await response.json();

		assert.equal(body.error, "O campo Nome deve ter entre 3 e 50 caracteres.");
	});

	it("should return 400 if name is long", async () => {
		const response = await httpClient.post(url, {
			name: "John Doe".repeat(10),
			email: "john.doe@example.com",
			message: "Hello, world!",
		});

		assert.equal(response.status, 400);
		assert.equal(response.statusText, "Bad Request");

		const body = await response.json();

		assert.equal(body.error, "O campo Nome deve ter entre 3 e 50 caracteres.");
	});

	it("should return 400 if email is invalid", async () => {
		const response = await httpClient.post(url, {
			name: "John Doe",
			email: "john.doe",
			message: "Hello, world!",
		});

		assert.equal(response.status, 400);
		assert.equal(response.statusText, "Bad Request");

		const body = await response.json();

		assert.equal(body.error, "O campo Email deve ser um email válido.");
	});

	it("should return 400 if message is short", async () => {
		const response = await httpClient.post(url, {
			name: "John Doe",
			email: "john.doe@example.com",
			message: "H",
		});

		assert.equal(response.status, 400);
		assert.equal(response.statusText, "Bad Request");

		const body = await response.json();

		assert.equal(
			body.error,
			"O campo Mensagem deve ter entre 10 e 500 caracteres.",
		);
	});

	it("should return 400 if message is long", async () => {
		const response = await httpClient.post(url, {
			name: "John Doe",
			email: "john.doe@example.com",
			message: "Hello, world!".repeat(50),
		});

		assert.equal(response.status, 400);
		assert.equal(response.statusText, "Bad Request");

		const body = await response.json();

		assert.equal(
			body.error,
			"O campo Mensagem deve ter entre 10 e 500 caracteres.",
		);
	});

	it("should return 200 if body is valid", async () => {
		const response = await httpClient.post(url, {
			name: "John Doe",
			email: "john.doe@example.com",
			message: "Hello, world!",
		});
		assert.equal(response.status, 200);
		assert.equal(response.statusText, "OK");
	});
});
