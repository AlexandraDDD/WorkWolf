
export const sequelizeConfig = {
  dialect: 'postgres',
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  models: [__dirname + '/src/**/*.model.ts'],
  seederStorage: 'sequelize',
  seederStorageTableName: 'seeds',
  define: {
    timestamps: false,
  },
};
