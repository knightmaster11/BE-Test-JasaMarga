const Pool =require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "db_jasamarga",
    password: "asd123",
    port: 5432,
});

module.exports = pool;