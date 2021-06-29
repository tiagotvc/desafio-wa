 const {connectionBuilder} = require("../../../../../utils/connectionBuilder")
 const {desafio_db} = require("../../../../../connection")
 var status = 1;
 let querys = [];
 
async function addLab(body){
    for(insert = 0;insert < body.length;insert++){
        sqlQuery =   
                " INSERT INTO tbl_labs ( "+
                "   name, "+
                "   address, "+
                "   status  "+
                " ) VALUES ( "+
                "   '"+body[insert].name+"', "+
                "   '"+body[insert].address+"', "+
                "   "+status+" "+
                " ); "

                querys.push(sqlQuery)
    }
        return new Promise(async(resolve, reject) => {
            let response = await connectionBuilder(desafio_db, querys)
            console.log(response)
            resolve(response)
            querys = [];
        })
}

 module.exports = addLab