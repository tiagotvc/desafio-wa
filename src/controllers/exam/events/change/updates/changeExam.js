const {connectionBuilder} = require("../../../../../utils/connectionBuilder")
const {desafio_db} = require("../../../../../connection")

async function changeExam(name, id, filepath, filetype, status){
    let insert;
    let querys = []

   
   
    sqlQuery =
        " UPDATE "+
        "   tbl_exams "+
        " SET "+
        " name = " + "'" + name + "'"

    if(filepath != '' && filepath != null && filepath != undefined ){
        sqlQuery += " , path = " + "'" + filepath +"'"
    }

    if(filetype != '' && filetype != null && filetype != undefined){
        sqlQuery += " , type = " + filetype
    }

    if(status != '' && status != null && status != undefined){
        sqlQuery += " , status = " + status
    }


    sqlQuery +=
                " WHERE "+
                " id = "+id+"; "


                querys.push(sqlQuery)
   

    return new Promise(async(resolve, reject) => {
        console.log(querys)
        let response = await connectionBuilder(desafio_db, querys)
        resolve(response)
        querys =[];
    })
}

module.exports = changeExam