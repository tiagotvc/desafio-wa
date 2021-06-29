const {connectionBuilder} = require("../../utils/connectionBuilder")
const {desafio_db} = require("../../connection")

const controller = {
    eventController : async function(id) {

    let insert;
    let querys = []

    sqlQuery =
        " DELETE  "+
        "   FROM tbl_labs_exams "+
        " WHERE "+
        " id = "+id+" ; "


                querys.push(sqlQuery)
   

    return new Promise(async(resolve, reject) => {
        let response = await connectionBuilder(desafio_db, querys)
        resolve(response)
        querys =[];
    })
  }
}

module.exports = controller