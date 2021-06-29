/**FILE RESPONSIBLE FOR BUILDING THE JSON THAT RETURNS TO THE USER
 * 
 * CREATED BY: MATEUS FOLLETTO
 * DATE OF CREATION: 2021-05-04
 * 
 * LATEST CHANGE: 2021-05-04
 * BY: MATEUS FOLLETTO
 * CHANGE: File creation.
 */

 const controller = {
    eventController : async function(body) {
        console.log(body.received)
        //BUILDS THE OBJECT THAT WILL ME RETURNED TO THE USER
        let responseObject = {
            "id": "UUID NOVO",
            "timestamp": new Date().toISOString().substring(0, 19).replace("T"," "),
            "source": "IP DO SERVIDOR",
            "version": "1.0",
            "eventType": "return",
            "data": {
                "id": body.received.id,
                "type": body.type,
                "message": body.message,
                "originalObject": body.received.data
            }
        }

        return responseObject
    }
}

module.exports = controller