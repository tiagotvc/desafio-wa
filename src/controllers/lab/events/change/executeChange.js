//SELECTS
const selectLab = require("./selects/selectLab")
//ADD
const changeLab = require("./updates/changeLab")

async function executeChange(body ,changeIds) {     
    return new Promise(async(resolve, reject) => {
          
        if(changeIds.length > 0){
            responses = await selectLab(changeIds)
            if(responses.status == 200){
                responses = await changeLab(changeIds,body)
                console.log(responses)
            }
            if(responses.status === 200){
                resolve({
                    "type": "sucess",
                    "message": "Laboratórios atualizados"
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