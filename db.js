const Pool = require("pg").Pool;

const pool= new Pool({
    user: "postgres",
    password:"persona",
    hosty:"localhost",
    port:'5432',
    database:"stock"
});

module.exports = pool;