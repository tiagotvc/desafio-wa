async function connectionBuilder(pool, sqlQuery) {
    return await new Promise(function (resolve, reject) {
        pool.getConnection(function (connectionError, connection) {
            try{
                if(connection) {
                    for(save = 0;save < sqlQuery.length;save++){
                        connection.query(sqlQuery[save], function (erroQuery, result, columns) {
                            connection.release()

                            let resposta = ''

                            if(erroQuery) {
                               
                                resposta = buildResponse(500, "SQL error.")
                            }
                            else {
                                resposta = buildResponse(200, result)
                            }

                            resolve(resposta)
                           
                        })
                    }
                }else{
                    resolve(buildResponse(500,"erro conexão SQL"))
                }
            }
            catch(error){
                reject(buildResponse(500, "MySQL error: "+error))
            }
            
        })
    })
}


async function buildResponse(status, result) {
    let response = {}

    response.status = status
    if(result.insertId !== undefined){
        response.data = {"insertedId": result.insertId, "changedRows": result.changedRows}
    }
    else if(Array.isArray(result)) {
        response.data = result
    }
    else {
        response.info = result   
    }

    return response
}

module.exports = {
    connectionBuilder,
    buildResponse
}