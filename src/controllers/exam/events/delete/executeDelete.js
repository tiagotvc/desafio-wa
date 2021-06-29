const {connectionBuilder} = require("../../../../utils/connectionBuilder")
const {desafio_db} = require("../../../../connection")

async function executeDelete(ids){
    let insert;
    let querys = []

    sqlQuery =
        " DELETE  "+
        "   FROM tbl_exams "+
        " WHERE "+
        " id in ("+ids+") ; "


                querys.push(sqlQuery)
   

    return new Promise(async(resolve, reject) => {
        let response = await connectionBuilder(desafio_db, querys)
        resolve(response)
        querys =[];
    })
}

module.exports = executeDelete