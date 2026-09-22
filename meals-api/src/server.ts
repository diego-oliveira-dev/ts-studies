import express from 'express';
import router from './routes/mealsRoutes.js';

const app = express();

// middleware 1: parsing de JSON para JS 
app.use(express.json());
app.use(router);

app.listen(3333, () => {
    console.log('The server was initialized');
});
