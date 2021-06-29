const executeAdd = require("./executeAdd")

const controller = {
    eventController : async function(fileType,body,filePath) {

       let responseFromExecution;

       if(body != '' && body != null & body != undefined){
            responseFromExecution = await executeAdd(fileType,body,filePath)
       }else{
            return "Erro, Faltando campo Nome";
       }

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
}

module.exports = controller