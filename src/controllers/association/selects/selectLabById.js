const {connectionBuilder} = require("../../../utils/connectionBuilder")
const {desafio_db} = require("../../../connection")
let querys =[]
async function selectLabById(id) { 

    let sqlQuery =    
       " SELECT "+
       "   tbl_labs.* "+
       " FROM "+
       "   tbl_labs "+
       " WHERE "+
       "   id = '"+id+"'  ; "
       
       querys.push(sqlQuery)
    return new Promise(async(resolve, reject) => {
        let answer = await connectionBuilder(desafio_db, querys)
        resolve(answer)
        querys = []
    })
}

module.exports = selectLabById