//SELECTS
const selectExam = require("./selects/selectExam")
//ADD
const addExam = require("./inserts/addExam")

async function executeAdd(fileType,body,filePath) {     
    return new Promise(async(resolve, reject) => {

        let select = await selectExam(body)

        if (select.data >0){
            resolve({
                "type":"Erro",
                "message":"Já existem exames com esse nome"
            })
        }else{

            response = await addExam(fileType,body,filePath)

            if(response.status === 200){
                resolve({
                    "type": "sucess",
                    "message": "Exames adicionados"
                })      
            }else{
                resolve({
                    "type": "error",
                    "message": "Um erro inesperado aconteceu, por favor tente novamente"

                }) 

            }
       

        }
        
          
        
    }      
                
)}
module.exports = executeAdd