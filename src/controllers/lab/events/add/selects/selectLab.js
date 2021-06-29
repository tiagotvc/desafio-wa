 const {connectionBuilder} = require("../../../../../utils/connectionBuilder")
 const {desafio_db} = require("../../../../../connection")
 
 async function selectLab(labs) { 
 
     let sqlQuery =    
        " SELECT "+
        "   tbl_labs.* "+
        " FROM "+
        "   tbl_labs "+
        " WHERE "+
        "   name in ('"+labs+"') ; "
        console.log(sqlQuery);
     return new Promise(async(resolve, reject) => {
         let answer = await connectionBuilder(desafio_db, sqlQuery)
         resolve(answer)
     })
 }
 
 module.exports = selectLab