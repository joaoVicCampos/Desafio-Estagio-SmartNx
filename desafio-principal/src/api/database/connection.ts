import mysql from 'mysql2/promise';
import 'dotenv/config';
import { Sequelize } from 'sequelize';

const {
  DB_HOST,
  DB_USER,
  DB_PASSWORD,
  DB_NAME
} = process.env;

if (!DB_HOST || !DB_USER || !DB_PASSWORD || !DB_NAME) {
  throw new Error('Variáveis de ambiente do banco não configuradas.');
}

const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD , {
  host: DB_HOST,
  dialect: 'mysql'
})

export default sequelize;