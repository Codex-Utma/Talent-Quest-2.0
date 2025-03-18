import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import fileupload from 'express-fileupload';

import userRouter from './routes/user.routes'
import adminRouter from './routes/admin.routes'
import employeeRouter from './routes/employee.routes'
import authMiddleware from './utils/helpers/authMiddleware';

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

app.use('/api/user', userRouter);
app.use('/api/admin', authMiddleware("admin"), adminRouter);
app.use('/api/employee', authMiddleware("employee"), employeeRouter);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
