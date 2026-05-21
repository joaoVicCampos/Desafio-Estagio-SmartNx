import express from 'express';
import sequelize from './api/database/connection.js';
import routes from './api/routes.js';


const app = express();

app.use(express.json());
app.use(routes);

app.get('/', (req, res) => {
    return res.json({message: 'Server rodando'})
});

const PORT = 3000;

async function iniciaServidor() {
    try {
        await sequelize.authenticate();
        await sequelize.sync();
        console.log('Banco rodando');
        app.listen(PORT, () => {
            console.log(`Server rodando em http://localhost:${PORT}`);
        });
    } catch (error) {
        console.error('Falha no servidor', error);
    }
}
iniciaServidor();