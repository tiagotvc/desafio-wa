//SELECTS

const selectExams = require("./selects/selectExams")
//ADD
const changeExam = require("./updates/changeExam")


async function executeChange(fileType,body,filePath,status,id) {     
    return new Promise(async(resolve, reject) => {
          
        if(id != null && id != '' && id !=undefined ){
            
 
            responses = await selectExams(id)
            if(responses.status == 200){
               
                responses = await changeExam(body,id,filePath,fileType,status)
                console.log(responses)
            }
            else{
                resolve({
                    "type": "Id não encontrado",
                    "message": "Id"+id

                }) 

            }
                if(responses.status === 200){
                    resolve({
                        "type": "sucess",
                        "message": "Exames atualizados"

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

module.exports = executeChange