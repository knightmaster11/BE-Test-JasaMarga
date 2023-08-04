const Pool =require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "students",
    password: "asd123",
    port: 5432,
});

module.exports = pool;