const { request } = require('express');
const pool = require('../../db');
const queries = require("./queries");
// const createWriteStream = request('fs/stream')

const { Readable } = require('stream');
const addCustomers = (req,res) => {
    // const { name, age, city } = req.body; 
        // pool.query(queries.addCustomers, [name, age, city], (error, result)=> {
        //     if(error) throw error;
        //     res.status(201).send("Created Successfully!")
        // })  

        // const readable = Readable.from(req.stream);
        
        // readable.on('data', (chunk) => {
        //     console.log("=====================>>>>> ", chunk);
        // });

        // console.log("req.stream: ",  req.stream);
        // const path = 'files/users.json'
        // const writeStream = createWriteStream(path, req.stream)
        // console.log("writeStream: ", writeStream);

        if(req.body){
            req.body.forEach(element => {
                pool.query(queries.addCustomers, [element.name, element.age, element.city])    
            });
            res.status(201).send("Created Successfully!")
        }
       
};

const getCustomers = (req,res) => {
    pool.query(queries.getCustomers, (error, result)=> {
        if(error) throw error;
        res.status(200).json(result.rows)
    })
};
 

module.exports = {
    getCustomers,  
    addCustomers, 
}