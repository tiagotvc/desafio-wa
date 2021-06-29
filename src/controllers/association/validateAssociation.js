const executeAssociation = require("./executeAssociation")


const controller = {
    eventController : async function(body) {

        let responseFromExecution;

        if (body.idLab != null && body.idLab != '' && body.idLab != undefined &&
             body.idExam != null && body.idExam != '' && body.idExam != undefined){
            
                responseFromExecution = await executeAssociation(body.idLab,body.idExam)


                if(responseFromExecution.type !== "success"){
                    //ERRO
                    return ({
                        "type": responseFromExecution.type,
                        "message": responseFromExecution.message,
                        "received": body,
                    })
                }
                else{
                    //SUCESSO
                    return ({
                        "type": "info",
                        "message": "Add successful",
                        "received": body
                    })
                }
                
             }

             else{
                return ({
                    "type": "info",
                    "message": "Falha, experado dois ids",
                    "received": body
                })

             }
        
        

    }
}

module.exports = controller