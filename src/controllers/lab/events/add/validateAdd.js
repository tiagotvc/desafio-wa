const executeAdd = require("./executeAdd")

const controller = {
    eventController : async function(body) {

        let validatedArray = []
        let wrongArray = []
       
        //VALIDA SE CADA POSIÇÃO DO ARRAY POSSUI OS PARAMETROS ESPERADOS//
        for(let json =0;json < body.lab.length;json++){
            if(Object.keys(body.lab[json]).includes("name") && Object.keys(body.lab[json]).includes("address")){
                if(body.lab[json].name != null 
                    && body.lab[json].name != '' 
                    && body.lab[json].name != undefined 
                    && body.lab[json].address != null 
                    && body.lab[json].address != '' 
                    && body.lab[json].address != undefined){

                        var temp = { name:body.lab[json].name, address:body.lab[json].address}
                        validatedArray.push(temp)
                }else
                    {
                        var temp = { mensagem: "A posição " + json + " do array não foi adicionada no banco por falta de dados" }
                        wrongArray.push(temp)
                }
            }else
                {
                    var temp = { mensagem: "A posição " + json + " do array não foi adicionada no banco por falta de dados" }
                    wrongArray.push(temp)
                }
        }


        //CHAMA O EVENTO DE ADICIONAR
        let responseFromExecution = await executeAdd(validatedArray, false)
        
        if(responseFromExecution.type !== "success"){
            //ERRO
            return ({
                "type": responseFromExecution.type,
                "message": responseFromExecution.message,
                "received": body,
                "added":validatedArray,
                "Not Added":wrongArray
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