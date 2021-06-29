const {connectionBuilder} = require("../../../utils/connectionBuilder")
const {desafio_db} = require("../../../connection")
let querys = []

async function selectExamById(id) { 

    let sqlQuery =    
       " SELECT "+
       "   tbl_exams.* "+
       " FROM "+
       "   tbl_exams "+
       " WHERE "+
       "   id = '"+id+"'  ; "

       querys.push(sqlQuery)
    return new Promise(async(resolve, reject) => {
        let answer = await connectionBuilder(desafio_db, querys)
        resolve(answer)
        querys = []
    })
}

module.exports = selectExamById