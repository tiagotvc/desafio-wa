 const {connectionBuilder} = require("../../../../utils/connectionBuilder")
 const {desafio_db} = require("../../../../connection")
 var status = 1;
 let querys = [];
 
 
 const controller = {
    eventController : async function(body) {
       let sqlQuery =   
                " SELECT * "+
                "  FROM tbl_labs "+
                "   WHERE "+
                "   status = 1 ;"
                
                querys.push(sqlQuery)
        return new Promise(async(resolve, reject) => {
            let response = await connectionBuilder(desafio_db, querys)
            resolve(response)
            querys = [];
        })
    }
}

 module.exports = controller