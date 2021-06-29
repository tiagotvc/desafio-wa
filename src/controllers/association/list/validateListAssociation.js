const selectExamByName = require("./selects/selectExamByName")
const selectAllAssociation = require("./selects/selectAllAssociation")


const controller = {
    eventController : async function(body) {

        let responseFromExecution;

        if (body.name != null && body.name != '' && body.name != undefined){

            responseFromExecution = await selectExamByName(body.name)

            if(responseFromExecution.data[0].name){
                let id = responseFromExecution.data[0].id

                responseFromAssociation = await selectAllAssociation(id)

                if(responseFromAssociation.data){

                    return ({
                        "type": "info",
                        "message": "Sucess",
                        "received": responseFromAssociation.data
                    })

                }
                else{

                    return ({
                        "type": "info",
                        "message": "Sucess",
                        "received": "Nenhuma associação encontrada para esse nome"
                    })

                }

            }else{
                return ({
                    "type": "info",
                    "message": "Erro",
                    "received": "Nome de exame não encontrado"
                })

            }
        }

    }
}

module.exports = controller