import "reflect-metadata";
import express from 'express';
import AppDataSource from './data-source';
import userRoutes from "./routes/UserRouter";


AppDataSource.initialize().then(() => {
    const app = express();
    app.use(express.json());

    app.get('/', (req, res) => {
        return res.json('tudo certo');
    });

    app.use('/api/users', userRoutes);

    app.listen(8080, () => {
        console.log('O Server está ON na porta 8080');
    });
}).catch((error) => {
    console.error("Erro durante a inicialização do AppDataSource:", error);
});
