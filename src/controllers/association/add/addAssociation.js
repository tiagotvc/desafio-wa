 const {connectionBuilder} = require("../../../utils/connectionBuilder")
 const {desafio_db} = require("../../../connection")
 var status = 1;
 let querys = [];
 

async function addAssociation(labId, examId){
        sqlQuery =   
                " INSERT INTO tbl_labs_exams ( "+
                "   lab_id, "+
                "   exam_id "+
                " ) VALUES ( "+
                "   '"+labId+"', "+
                "   '"+examId+"' "+
                " ); "

                querys.push(sqlQuery)
        
        return new Promise(async(resolve, reject) => {
            let response = await connectionBuilder(desafio_db, querys)
            console.log(response)
            resolve(response)
            querys = [];
            
        })
    
}

 module.exports = addAssociation