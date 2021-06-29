const {connectionBuilder} = require("../../../../../utils/connectionBuilder")
const {desafio_db} = require("../../../../../connection")
var querys = []

async function selectExam(exam) { 
    

    let sqlQuery =    
       " SELECT "+
       "   tbl_exams.* "+
       " FROM "+
       "   tbl_exams "+
       " WHERE "+
       "   name in ('"+exam+"') ; "

       console.log(sqlQuery);
       querys.push(sqlQuery)
    return new Promise(async(resolve, reject) => {
        let answer = await connectionBuilder(desafio_db, querys)
        resolve(answer)
        querys= [];
    })
}

module.exports = selectExam