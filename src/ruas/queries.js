const getRuass = "SELECT * FROM ruas1";
const getRuassById = "SELECT * FROM ruas1 WHERE id = $1";
const checkRuasExists = "SELECT s FROM ruas1 s WHERE s.ruas = $1";
const addRuas = "INSERT INTO ruas1 (ruas, km_Awal, km_akhir, status) VALUES ($1, $2, $3, $4)";
const removeRuas = "DELETE FROM ruas1 WHERE id = $1";
const updateRuas = "UPDATE ruas1 SET ruas = $1, km_Awal = $2, km_akhir = $3, status = $4 WHERE id = $5";

module.exports = {
    getRuass,
    getRuassById,
    checkRuasExists,
    addRuas,
    removeRuas,
    updateRuas,
}