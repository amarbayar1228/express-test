const getCustomers = "SELECT * FROM customers"; 
const addCustomers = "INSERT INTO customers (name, age, city) VALUES ($1, $2, $3)"; 


module.exports = {
    getCustomers, 
    addCustomers,  
}