import { assert, describe, it } from "vitest";
import { httpClient } from "../utils";

describe("/api/auth/register", () => {
	const mockRegister = {
		email: "test@example.com",
		password: "v@lidPassword123",
		confirmPassword: "v@lidPassword123",
		fullName: "Test User",
	};
	const url = "http://localhost:3000/api/";

	it("should return 405 if method is not POST", async () => {
		const response = await httpClient.get(`${url}/auth/register`);
		assert.equal(response.status, 405);
		assert.equal(response.statusText, "Method Not Allowed");
	});

	it("should return 400 if passwords do not match", async () => {
		const response = await httpClient.post(`${url}/auth/register`, {
			...mockRegister,
			confirmPassword: "XXXXXXXXXXXXXXXXX",
		});
		const data = await response.json();

		assert.equal(response.status, 400);
		assert.equal(data.error, "As senhas não coincidem");
	});

	it("should return 400 if password is too short", async () => {
		const response = await httpClient.post(`${url}/auth/register`, {
			...mockRegister,
			password: "XXXXX",
		});
		const data = await response.json();

		assert.equal(response.status, 400);
		assert.equal(data.error, "O campo Senha deve ter pelo menos 8 caracteres");
	});

	it("should return 400 if password is missing", async () => {
		const response = await httpClient.post(`${url}/auth/register`, {
			...mockRegister,
			password: "",
		});
		const data = await response.json();

		assert.equal(response.status, 400);
		assert.equal(data.error, "Preencha todos os campos");
	});
	it("should return 400 if email is invalid", async () => {
		const response = await httpClient.post(`${url}/auth/register`, {
			...mockRegister,
			email: "invalidemail",
		});
		const data = await response.json();

		assert.equal(response.status, 400);
		assert.equal(data.error, "O campo Email não possui um formato válido");
	});

	it("should return 400 if email is missing", async () => {
		const response = await httpClient.post(`${url}/auth/register`, {
			...mockRegister,
			email: "",
		});
		const data = await response.json();

		assert.equal(response.status, 400);
		assert.equal(data.error, "Preencha todos os campos");
	});
	it("should return 400 if fullName is missing", async () => {
		const response = await httpClient.post(`${url}/auth/register`, {
			...mockRegister,
			fullName: "",
		});
		const data = await response.json();

		assert.equal(response.status, 400);
		assert.equal(data.error, "Preencha todos os campos");
	});
	it("should return 400 if fullName is too short", async () => {
		const response = await httpClient.post(`${url}/auth/register`, {
			...mockRegister,
			fullName: "XX",
		});
		const data = await response.json();

		assert.equal(response.status, 400);
		assert.equal(
			data.error,
			"O campo Nome Completo deve ter entre 3 e 100 caracteres",
		);
	});
	it("should return 400 if fullName is too long", async () => {
		const response = await httpClient.post(`${url}/auth/register`, {
			...mockRegister,
			fullName: "X".repeat(101),
		});
		const data = await response.json();

		assert.equal(response.status, 400);
		assert.equal(
			data.error,
			"O campo Nome Completo deve ter entre 3 e 100 caracteres",
		);
	});

	it("should return 409 if email already exists", async () => {
		const response = await httpClient.post(
			`${url}/auth/register`,
			mockRegister,
		);
		const data = await response.json();

		assert.equal(response.status, 409);
		assert.equal(data.error, "O email já está em uso");
	});

	it.skip("should return 201 if all fields are valid", async () => {
		const response = await httpClient.post(
			`${url}/auth/register`,
			mockRegister,
		);
		const data = await response.json();

		assert.equal(response.status, 201);
		assert.equal(data.message, "Usuário registrado com sucesso");
	});
});
