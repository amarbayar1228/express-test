const getCompanys = "SELECT * FROM company";
const getCompanyById = "SELECT * FROM company WHERE id = $1";
const addCompany = "INSERT INTO company (name, age, address, salary) VALUES ($1, $2, $3, $4)";
const checkNameExists = "SELECT a FROM company a WHERE a.name = $1";
const removeCompany = "DELETE FROM company WHERE id = $1";
const updateCompany = "UPDATE company SET name = $1, age = $2, address = $3, salary = $4 WHERE id = $5";


module.exports = {
    getCompanys,
    getCompanyById,
    checkNameExists,
    addCompany, 
    removeCompany,
    updateCompany
}
 