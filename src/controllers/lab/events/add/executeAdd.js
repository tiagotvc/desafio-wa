//ADD
const addLab = require("./inserts/addLab")

async function executeAdd(body) {     
    return new Promise(async(resolve, reject) => {
        if(body.length > 0){
            
            //VARIAVEL DE VALIDAÇÃO
          
            let names = []
            let address = []

            await Promise.all(body.map((key) =>{
                names.push(key.name)
            }))

            await Promise.all(body.map((key) =>{
                address.push(key.address)
            }))
 
            response = await addLab(body)
                if(response.status === 200){
                    resolve({
                        "type": "sucess",
                        "message": "Laboratórios adicionados"

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