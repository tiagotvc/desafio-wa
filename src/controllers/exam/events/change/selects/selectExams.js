const {connectionBuilder} = require("../../../../../utils/connectionBuilder")
const {desafio_db} = require("../../../../../connection")

async function selectLab(examCustomId) { 
    let querys = [];
    sqlQuery =    
       " SELECT "+
       "   tbl_exams.* "+
       " FROM "+
       "   tbl_exams AS tbl_exams "+
       " WHERE "+
       " tbl_exams.id in ("+examCustomId+"); "

       querys.push(sqlQuery)

   return new Promise(async(resolve, reject) => {
       let answer = await connectionBuilder(desafio_db, querys)
       resolve(answer)
   })
}

module.exports = selectLab