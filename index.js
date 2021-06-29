 const express = require("express")
 const cors = require('cors')
 const router = require("./src/router")
 const mysql = require("mysql2");
 const connection = require("./src/configuracoes.json")
 const port = connection.bk.porta
 const app = express()
 const swaggerJsDoc = require('swagger-jsdoc');
 const swaggerUi = require('swagger-ui-express');

 app.use(cors())
 
 app.options('*', cors())
 
 app.use(express.json({
     limit: "20mb"
 }))
 
 app.use(express.urlencoded({
     limit: "20mb",
     extended: true
 }))



 const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "docker",
    database: "desafio_db",
});


app.use(router);
 

 
 app.listen(port, () => {
     console.log("running server");
 }) 

//APIS

app.post("/addLab", (req,res) => {
    
    const name = req.body.data.lab.name;
    const address = req.body.data.lab.address;
    const status = 1;
    db.query(
        " INSERT INTO tbl_labs ( "+
        "   name, "+
        "   address, "+
        "   status  "+
        " ) VALUES ( "+
        "   '"+name+"', "+
        "   '"+address+"', "+
        "   "+status+" "+
        " ); ",
        (err, result) => {
         if(err){
            res.send({err:err})
            console.log("erro")
            console.log(err)
          
         }
         else if(result.length > 0){
             console.log("Deu Certo")
             console.log(result.length)
             res.send(result)
         }else{
             console.log("Não deu")
            res.send({message:"Seu Usuario não possui nenhum curso"})
             }
         }
  );
});


app.get("/addLab", (req,res) => {
    const down = req.body
    console.log(down)
    db.query(
        "SELECT * FROM tbl_labs",
        (err, result) => {
         if(err){
            res.send({err:err})
            console.log("erro")
            console.log(err)
          
         }
         else if(result.length > 0){
             console.log("Deu Certo")
             console.log(result.length)
             res.send(result)
         }else{
             console.log("Não deu")
            res.send({message:"Seu Usuario não possui nenhum curso"})
             }
         }
  );
});


 
 