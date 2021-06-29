 const {connectionBuilder} = require("../../../../../utils/connectionBuilder")
 const {desafio_db} = require("../../../../../connection")
 
 async function changeLab(changeIds, body){
     let insert;
     let querys = []

    for(insert = 0;insert < changeIds.length;insert++){
    
     sqlQuery =
         " UPDATE "+
         "   tbl_labs "+
         " SET "+
         " name = " + "'" + body.lab[insert].name + "'"

     if(body.lab[insert].address != '' && body.lab[insert].address != null && body.lab[insert].address != undefined ){
         sqlQuery += " , address = " + "'" + body.lab[insert].address +"'"
     }

     if(body.lab[insert].status != '' && body.lab[insert].status != null && body.lab[insert].status != undefined){
         sqlQuery += " , status = " + body.lab[insert].status
     }

     sqlQuery +=
                 " WHERE "+
                 " id = "+changeIds[insert]+"; "


                 querys.push(sqlQuery)
    }
 
     return new Promise(async(resolve, reject) => {
         console.log(querys)
         let response = await connectionBuilder(desafio_db, querys)
         resolve(response)
         querys =[];
     })
 }
 
 module.exports = changeLab