const pool = require('../../db');
const queries = require('./queries');

const getStudents = (req, res) => {
    pool.query(queries.getStudents, (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    });
};

const getStudentsById = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query(queries.getStudentsById, [id], (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    });
};

const addStudent = (req, res) => {
    const { name, email, age, dob } = req.body;
    // check if email exists
    pool.query(queries.checkEmailExists, [email], (error, results) => {
        if (results.rows.length) {
            res.send(" Email already exists. ");
        }

    // add student to db
    pool.query(
        queries.addStudent,
        [name, email, age, dob],
        (error, results) => {
            if(error) throw error;
            res.status(201).send("Student Created Succesfully!");
        }
    );
    });
};
const removeStudent = (req, res) => {
    const id = parseInt(req.params.id);

    pool.query(queries.getStudentsById, [id], (error, results) => {
        const noStudentFound = !results.rows.length;
        if(noStudentFound) {
            res.send("Student does not exist in the database");
        }

        pool.query(queries.removeStudent, [id], (error, results) => {
            if (error) throw error;
            res.status(200).send("Student removed successfully. ");
        });
    });
};

const updateStudent = (req, res) => {
    const id = parseInt(req.params.id);
    const { name, email, age, dob } = req.body;

    pool.query(queries.getStudentsById, [id], (error, results) => {
        const noStudentFound = !results.rows.length;
        if(noStudentFound) {
            res.send("Student does not exist in the database");
        }
    pool.query(queries.updateStudent, [name, email, age, dob,  id], (error, results) => {
        if (error) throw error;
        res.status(200).send("student updated successfully. ");
    });
    });
};

module.exports = {
    getStudents,
    getStudentsById,
    addStudent,
    removeStudent,
    updateStudent,
};