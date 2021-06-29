const {connectionBuilder} = require("../../../../utils/connectionBuilder")
const {desafio_db} = require("../../../../connection")
let querys = []

async function selectExamByName(name) { 

    let sqlQuery =    
       " SELECT "+
       "   tbl_exams.* "+
       " FROM "+
       "   tbl_exams "+
       " WHERE "+
       "   name = '"+name+"'  ; "

       console.log(sqlQuery)
       querys.push(sqlQuery)
    return new Promise(async(resolve, reject) => {
        let answer = await connectionBuilder(desafio_db, querys)
        resolve(answer)
        querys = []
    })
}

module.exports = selectExamByName