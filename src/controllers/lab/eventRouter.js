/**FILE RESPONSIBLE FOR CONTROLLING WHAT REQUISITIONS WILL BE MADE
 * 
 * CREATED BY: TIAGO CARVALHO
 * DATE OF CREATION: 2020-05-10
 * 
 * LATEST CHANGE: 2020-05-10
 * BY: TIAGO CARVALHO
 * CHANGE: Added the responseEvent call so it returns a JSON body back to the user in
 *         case the API can't find a valid eventType.
 * 
 * CHANGE: 2020-05-10
 * BY: TIAGO CARVALHO
 * CHANGE: File creation.
 */
 const addEvent = require("./events/add/validateAdd")
//const changeEvent = require("./events/change/validateChange")
 //const deleteEvent = require("./events/delete/validateDelete")
 const responseEvent = require("./events/response/eventController")
 
 const controller = {
    eventRouter : async function(body){
        let response

        switch(body.eventType){
            case "add":
                response = await addEvent.eventController(body)
                 break
            /* case "change":
                response = await changeEvent.eventController(body)
                 break  
            case "delete":
                response = await deleteEvent.eventController(body)
                break */
            default:
                return response = {
                    "type": "error",
                    "message": "Specified eventType not found.",
                    "received": body
                }
        }
        return await responseEvent.eventController(response)
    }
}

module.exports = controller
 