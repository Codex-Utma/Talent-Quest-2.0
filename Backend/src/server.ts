import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import fileupload from 'express-fileupload';

import userRouter from './routes/user.routes'

const app = express();

dotenv.config();

app.use(cookieParser());

app.use(express.json());

app.use(cors({
    origin: (origin, callback) => {
        callback(null, true);
    },
    credentials: true
}));

app.use(fileupload({
    createParentPath: true
}));

app.use('/api/users', userRouter);

const PORT = process.env.PORT || 4000;

app.get("/", (req, res) => {
    res.send({ message: "Hello World" });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
