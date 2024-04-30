const pool = require('../../db');
const queries = require("./queries");

const addCompany = (req,res) => {
    const { name, age, address, salary } = req.body; 
            pool.query(queries.addCompany, [name, age, address, salary], (error, result)=> {
                if(error) throw error;
                res.status(201).send("Created Successfully!")
            })  
};

const getCompanys = (req,res) => {
    pool.query(queries.getCompanys, (error, result)=> { 
        if(error) throw error;
        res.status(200).json(result.rows)
    })
};

const getCompanyById = (req, res) => {
    const id = req.params.id; 
    pool.query(queries.getCompanyById, [id], (error, result)=> {
        if(error) throw error;
        if(result.rows.length){
            res.status(200).json(result.rows)
        }else {
            res.send("Data baihq!")
        }
        
    })
}

const removeCompany = (req, res) => {
    const id = req.params.id;  
    pool.query(queries.getCompanyById, [id], (error, results)=> { 
        const noCompanyFound = !results.rows.length; 
        if(noCompanyFound){ 
            res.send("Company does not exist in the database")
        }else {
            pool.query(queries.removeCompany, [id], (error, results)=> {
                if(error) throw error;
                res.status(200).send("Company removed successfully.")
            })
        } 
    })
}

const updateCompany = (req, res) => {
    const id = req.params.id;
    const { name, age, address, salary } = req.body;
    pool.query(queries.getCompanyById, [id], (error, results)=> { 
        const noCompanyFound = !results.rows.length;
        if(noCompanyFound){
            res.send("Company does not exist in the database");
        } else {
            pool.query(queries.updateCompany, [name, age, address, salary, id], (error, result) => {
                if(error) throw error;
                res.status(200).send("Company updated successfully");
            })
        }

    })
}

module.exports = {
    getCompanys, 
    getCompanyById, 
    addCompany,
    removeCompany,
    updateCompany
}