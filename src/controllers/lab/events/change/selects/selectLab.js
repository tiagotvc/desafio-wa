 const {connectionBuilder} = require("../../../../../utils/connectionBuilder")
 const {desafio_db} = require("../../../../../connection")
 
 async function selectLab(labCustomId) { 
     let querys = [];
     sqlQuery =    
        " SELECT "+
        "   tbl_labs.* "+
        " FROM "+
        "   tbl_labs AS tbl_labs "+
        " WHERE "+
        " tbl_labs.id in ("+labCustomId+"); "

        querys.push(sqlQuery)

    return new Promise(async(resolve, reject) => {
        let answer = await connectionBuilder(desafio_db, querys)
        resolve(answer)
    })
}
module.exports = selectLab