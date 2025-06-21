import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET!;

export function signToken(_payload: object, _expiresIn = "7d") {
	// return jwt.sign(payload, null, { expiresIn });
}

export function verifyToken(token: string) {
	return jwt.verify(token, JWT_SECRET);
}
