const executeDelete = require("./executeDelete")


const controller = {
    eventController : async function(body) {

        console.log(body)

        let ids = []

        if(body.exams){
            

            await Promise.all(body.exams.map((key) =>{
                ids.push(key.id)
            }))

            console.log(ids)

            let responseFromExecution = await executeDelete(ids)

            console.log(responseFromExecution)

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