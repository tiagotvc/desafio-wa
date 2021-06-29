const executeChange = require("./executeChange")

const controller = {
    eventController : async function(fileType,body,filePath,status,id) {

        let changeIds = []

        if(id != undefined && id != null && id != ''){

            let responseFromExecution = await executeChange(fileType,body,filePath,status,id)
            
            if(responseFromExecution.type !== "success"){
                //ERRO
                return ({
                    "type": responseFromExecution.type,
                    "message": responseFromExecution.message,
                    "received": id,
                
                })
            }
            else{
                //SUCESSO
                return ({
                    "type": "info",
                    "message": "Change successful",
                    "received": id
                })
            }
        }else {
            return ({
                "type": "info",
                "message": "Não foi enviado um id válido",
                "received": id
            })

        }

    }
}
                

      

       

        //CHAMA O EVENTO DE ADICIONAR
        

module.exports = controller