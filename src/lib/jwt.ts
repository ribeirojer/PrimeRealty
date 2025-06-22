const JWT_SECRET = process.env.JWT_SECRET;

if (!JWT_SECRET) {
	throw new Error("JWT_SECRET is not defined in the environment variables.");
}

export function signToken(_payload: object, _expiresIn = "7d") {
	return ""; //jwt.sign(_payload, JWT_SECRET, { expiresIn: _expiresIn });
}

export function verifyToken(_token: string) {
	return {}; //jwt.verify(token, JWT_SECRET);
}
