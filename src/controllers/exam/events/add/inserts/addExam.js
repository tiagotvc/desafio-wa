 const {connectionBuilder} = require("../../../../../utils/connectionBuilder")
 const {desafio_db} = require("../../../../../connection")
 var status = 1;
 let querys = [];

async function addExam(fileType,name,filePath){
   
        sqlQuery =   
                " INSERT INTO tbl_exams ( "+
                "   name, "+
                "   type, "+
                "   path,  "+
                "   status  "+
                " ) VALUES ( "+
                "   '"+name+"', "+
                "   '"+fileType+"', "+
                "   '"+filePath+"', "+
                "   "+status+" "+
                " ); "

                querys.push(sqlQuery)
        
        
        return new Promise(async(resolve, reject) => {
            let response = await connectionBuilder(desafio_db, querys)
            console.log(response)
            resolve(response)
            querys = [];
            
        })
    
}

 module.exports = addExam