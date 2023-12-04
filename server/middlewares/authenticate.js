const jwtmod = require('jsonwebtoken');
require('dotenv').config(); 

module.exports = async (req, res, next) => {
    const bearerHeader = req.headers["authorization"];

    const token = bearerHeader && bearerHeader.split(" ")[1];
    if (!token) return res.sendStatus(401); 

    const public_key = `-----BEGIN PUBLIC KEY-----\n${process.env.PUBLICKEY}\n-----END PUBLIC KEY-----`;

    try {
        const decodedToken = jwtmod.verify(token, public_key, {
            algorithms: ["RS256"],
        });
        const { email } = decodedToken;
        req.user = email;

        next(); 
    } catch (error) {
        console.error("Token verification error:", error);
        return res.sendStatus(403); // Forbidden or Unauthorized
    }
};
