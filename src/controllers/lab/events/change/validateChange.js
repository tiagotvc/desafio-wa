const executeChange = require("./executeChange")

const controller = {
    eventController : async function(body) {
        let changeIds = []

        if(body.lab.length > 0){
            await Promise.all(body.lab.map((key) =>{
                if(key.findId != undefined && key.findId != null && key.findId != ''){
                    changeIds.push(key.findId)
                }
            }))
        }

        let responseFromExecution = await executeChange(body,changeIds)
        
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