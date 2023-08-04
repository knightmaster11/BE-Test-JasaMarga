const pool = require('../../db');
const queries = require('./queries');

const getRuass = (req, res) => {
    pool.query(queries.getStudents, (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    });
};

const getRuassById = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query(queries.getRuassById, [id], (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    });
};

const addRuas = (req, res) => {
    const { name, email, age, dob } = req.body;
    // check if Ruas exists
    pool.query(queries.checkRuasExists, [email], (error, results) => {
        if (results.rows.length) {
            res.send(" Email already exists. ");
        }

    // add Ruas to db
    pool.query(
        queries.addRuas,
        [name, email, age, dob],
        (error, results) => {
            if(error) throw error;
            res.status(201).send("Ruas Created Succesfully!");
        }
    );
    });
};
const removeRuas = (req, res) => {
    const id = parseInt(req.params.id);

    pool.query(queries.getRuassById, [id], (error, results) => {
        const noRuasFound = !results.rows.length;
        if(noRuasFound) {
            res.send("Ruas does not exist in the database");
        }

        pool.query(queries.removeRuas, [id], (error, results) => {
            if (error) throw error;
            res.status(200).send("Ruas removed successfully. ");
        });
    });
};

const updateRuas = (req, res) => {
    const id = parseInt(req.params.id);
    const { ruas, km_awal, km_akhir, status } = req.body;

    pool.query(queries.getRuassById, [id], (error, results) => {
        const noRuasFound = !results.rows.length;
        if(noRuasFound) {
            res.send("Ruas does not exist in the database");
        }
    pool.query(queries.updateRuas, [ruas, km_awal, km_akhir, status,  id], (error, results) => {
        if (error) throw error;
        res.status(200).send("Ruas updated successfully. ");
    });
    });
};

module.exports = {
    getRuass,
    getRuassById,
    addRuas,
    removeRuas,
    updateRuas,
};