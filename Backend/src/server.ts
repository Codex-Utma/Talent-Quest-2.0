import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import fileupload from 'express-fileupload';

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

const PORT = process.env.PORT || 4000;

app.get("/", (req, res) => {
    res.send({ message: "Hello World" });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
