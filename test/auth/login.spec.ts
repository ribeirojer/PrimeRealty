import { assert, describe, it } from "vitest";
import { httpClient } from "../utils";

describe("/api/auth/login", () => {
	const mockLogin = {
		email: "test@example.com",
		password: "v@lidPassword123",
	};
	const url = "http://localhost:3000/api/auth/login";

	it("should return 405 if method is not POST", async () => {
		const response = await httpClient.get(url);
		assert.equal(response.status, 405);
		assert.equal(response.statusText, "Method Not Allowed");
	});
	it("should return 400 if email is missing", async () => {
		const response = await httpClient.post(url, {
			password: "v@lidPassword123",
		});
		const data = await response.json();

		assert.equal(response.status, 400);
		assert.equal(data.error, "O campo Email é obrigatório");
	});
	it("should return 400 if password is missing", async () => {
		const response = await httpClient.post(url, { email: "test@example.com" });
		const data = await response.json();

		assert.equal(response.status, 400);
		assert.equal(data.error, "O campo Password é obrigatório");
	});
	it("should return 400 if email is invalid", async () => {
		const response = await httpClient.post(url, {
			...mockLogin,
			email: "invalidEmail",
		});
		const data = await response.json();

		assert.equal(response.status, 400);
		assert.equal(data.error, "O campo Email não possui um formato válido");
	});

	it("should return 400 if password is invalid", async () => {
		const response = await httpClient.post(url, {
			...mockLogin,
			password: "XXXXXXXXXXXXXXX",
		});
		const data = await response.json();

		assert.equal(response.status, 400);
		assert.equal(data.error, "Credenciais inválidas");
	});

	it("should return 400 if user does not exist", async () => {
		const response = await httpClient.post(url, {
			...mockLogin,
			email: "nonexistent@example.com",
		});
		const data = await response.json();

		assert.equal(response.status, 400);
		assert.equal(data.error, "Credenciais inválidas");
	});

	it("should return 200 if login is successful", async () => {
		const response = await httpClient.post(url, mockLogin);
		const data = await response.json();

		assert.equal(response.status, 200);
		assert.equal(data.message, "Login efetuado com sucesso");
	});
});
