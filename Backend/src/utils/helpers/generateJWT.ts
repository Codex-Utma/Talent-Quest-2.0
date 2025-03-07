import jwt from 'jsonwebtoken';

const generateJWT = (uid: number, name: string, lastName: string, userType: string) => {
    if (!process.env.JWT_SECRET_KEY) {
        throw new Error('JWT_SECRET_KEY is not defined');
    }
    return jwt.sign({ uid: String(uid), name, lastName, userType }, process.env.JWT_SECRET_KEY, {
        expiresIn: '12h'
    });
}

export default generateJWT;
