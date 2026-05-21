import express from 'express';
import sequelize from './api/database/connection.js';


const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    return res.json({message: 'Server rodando'})
});

const PORT = 3000;

async function iniciaServidor() {
    try {
        await sequelize.authenticate();
        console.log('Banco rodando');
        app.listen(PORT, () => {
            console.log(`Server rodando em http://localhost:${PORT}`);
        });
    } catch (error) {
        console.error('Falha no servidor', error);
    }
}
iniciaServidor();