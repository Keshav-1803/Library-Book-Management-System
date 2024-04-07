import express from 'express';
import mongoose from 'mongoose';
import router from './routes/route.mjs';

const app = express();

app.use(express.json());

mongoose.connect("mongodb+srv://keshav_1803:I9iqXIwZpffScRBd@cluster0.vlpcfum.mongodb.net/LBMS").then(() => console.log("Database Connected")).catch((err) => console.log(err));

app.use('/', router);

app.listen(8000, () => {
   console.log("Server Started at Port", 8000);
})
