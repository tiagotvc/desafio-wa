//SELECTS
const selectLabById = require("./selects/selectLabById")
const selectExamById = require("./selects/selectExamById")
//ADD
const addAssociation = require("./add/addAssociation")
const { response } = require("express")


async function executeAdd(idLab,idExam) {     
    return new Promise(async(resolve, reject) => {
          
        let responseFromLabs = await selectLabById(idLab)
            if(responseFromLabs.data){
                let responseFromExams = await selectExamById(idExam)
                    if(responseFromExams.data){
            
                        let response = await addAssociation(idLab, idExam)
                        if(response.status === 200){
                            resolve({
                                "type": "sucess",
                                "message": "Associação adicionada"
                            })    
                        }else{
                            resolve({
                                "type": "error",
                                "message": "Um erro inesperado aconteceu, por favor tente novamente"
        
                            }) 
        
                        }

                    }else{
                        resolve({
                            "type": "error",
                            "message": "Exame não encontrado"
    
                        }) 

                    }
                }else{
                    resolve({
                        "type": "error",
                        "message": "Laboratório não encontrado"

                    }) 

                }
            }   
                
)}

module.exports = executeAdd