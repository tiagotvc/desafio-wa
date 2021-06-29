const executeDelete = require("./executeDelete")


const controller = {
    eventController : async function(body) {

        let ids = []

        if(body.lab.length > 0){

            await Promise.all(body.lab.map((key) =>{
                ids.push(key.id)
            }))

            let responseFromExecution = await executeDelete(ids)

            if(responseFromExecution.status !== 200){
                //ERRO
                return ({
                    "type": "delete",
                    "message": "erro ao tentar deletar",
                    "received": body,
        
                })
            }
            else{
                //SUCESSO
                return ({
                    "type": "info",
                    "message": "Delete sucess",
                    "received": body
                })
            }
        }
    }
}

module.exports = controller