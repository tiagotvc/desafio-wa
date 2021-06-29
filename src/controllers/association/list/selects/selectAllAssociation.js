const {connectionBuilder} = require("../../../../utils/connectionBuilder")
const {desafio_db} = require("../../../../connection")
let querys = []

async function selectAllAssociation(id) { 

    let sqlQuery =    
       " SELECT exam.name   AS NAME_EXAME       ,"+
       "        exam.id     AS ID_EXAME         ,"+
       "        exam.type   AS TIPO_EXAME       ,"+
       "        lab.name    AS LABORATORIO      ,"+
       "        lab.id      AS ID_LABORATORIO   "+
       " FROM tbl_exams exam "+
       " LEFT JOIN tbl_labs_exams lbx ON lbx.exam_Id = exam.id "+
       " LEFT JOIN tbl_labs lab ON lab.id = lbx.lab_id "+
       " WHERE exam.id = "+id
       

       querys.push(sqlQuery)
       console.log(sqlQuery)
    return new Promise(async(resolve, reject) => {
        let answer = await connectionBuilder(desafio_db, querys)
        resolve(answer)
        querys = []
    })
}

module.exports = selectAllAssociation