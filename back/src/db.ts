require("dotenv").config();
const { Sequelize } = require("sequelize");
const fs = require("fs");
const path = require("path");

const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env;
// const { DATABASE_URL } = process.env
const sequelize = new Sequelize(
    `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`,
    {
        // const sequelize = new Sequelize(`${DATABASE_URL}`, {
        logging: false, // set to console.log to see the raw SQL queries
        native: false, // lets Sequelize know we can use pg-native for ~30% more speed
        // define: {
        //   freezeTableName: true,  // Mantiene los nombres definidos en los modelos (no los cambia a plural)
   // timestamps: false    // Comentar si se quieren crear los campos createdAt y updatedAt de forma predeterminada en todas las tablas
        // }
    }
);

const basename = path.basename(__filename);
const modelDefiners: Array<any> = [];
// Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners
fs.readdirSync(path.join(__dirname, "/models"))
    .filter(
        (file: string) =>
            file.indexOf(".") !== 0 &&
            file !== basename &&
            file.slice(-3) === ".ts"
    )
    .forEach((file: string) => {
        modelDefiners.push(require(path.join(__dirname, "/models", file)));
    });
// Injectamos la conexion (sequelize) a todos los modelos
modelDefiners.forEach((model) => model(sequelize));
// Capitalizamos los nombres de los modelos ie: product => Product
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [
    entry[0][0].toUpperCase() + entry[0].slice(1),
    entry[1],
]);
sequelize.models = Object.fromEntries(capsEntries);

// En sequelize.models están todos los modelos importados como propiedades
// Para relacionarlos hacemos un destructuring
const { Invoice, Product, Client, Detail } = sequelize.models;

Client.hasMany(Invoice);
Invoice.belongsTo(Client);

Invoice.hasMany(Detail);
Detail.belongsTo(Invoice);

Product.hasMany(Detail);
Detail.belongsTo(Product);

module.exports = {
    ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
    conn: sequelize, // para importart la conexión { conn } = require('./db.js');
};
