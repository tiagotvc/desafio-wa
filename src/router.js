 
 const express = require("express")
 const router = express.Router()
 const multer = require('multer');
 const path = require("path");
 const storage = multer.diskStorage({
    destination: "./public/uploads/",
    filename: function(req, file, cb){
       cb(null,file.originalname);
    }
 });


 var upload = multer({ storage: storage }).single("teste");
   
 

        //ROTAS DA API
 //ROTAS APIS DE LABORATORIO
 const addEvent = require("./controllers/lab/events/add/validateAdd")
 const changeEvent = require("./controllers/lab/events/change/validateChange")
 const deleteEvent = require("./controllers/lab/events/delete/validateDelete")
 const listEvent = require("./controllers/lab/events/add/list")
 const addExam = require("./controllers/exam/events/add/validateAdd")
 const deleteExamEvent = require("./controllers/exam/events/delete/validateDelete")
 const changeExam = require("./controllers/exam/events/change/validateChange")
 const listExamEvent = require("./controllers/exam/events/add/list")
 const addAssociation = require("./controllers/association/validateAssociation")
 const deleteAssociation = require("./controllers/association/deleteAssociation")
 const listAssociation = require("./controllers/association/list/validateListAssociation")


 //ROTAS DE LABORATÓRIO
 
 router.post("/api/addLab", async function(request, response) {
     const body = request.body.data;
     response.send(await addEvent.eventController(body))
 })

 router.post("/api/changeLab", async function(request, response) {
    const body = request.body.data;
    response.send(await changeEvent.eventController(body))
})

router.post("/api/deleteLab", async function(request, response) {
    const body = request.body.data;
    response.send(await deleteEvent.eventController(body))
})

router.get("/api/listActiveLabs", async function(request, response) {
    response.send(await listEvent.eventController())
})



//ROTAS DE EXAME

router.post("/api/addExam", async function(request, response) {

    let mensagem = {}

    upload(request, response, (err) => {
        if(err) {
            response.status(200).send("Erro");
        }
        else{
            let fileType;
            var file = request.file
            let body = request.body.name
            let filePath = "./public/uploads/"+file.originalname 
            const filetypes = /jpeg|jpg|png|gif/;
            const extname =  filetypes.test(path.extname(file.originalname).toLowerCase());
            const mimetype = filetypes.test(file.mimetype);

            //VALIDA O TIPO DE ARQUIVO
            if(extname && mimetype){
                fileType = "imagem"
            }else {
                fileType = "Análise Clinica"
            }
            
            responser(fileType,body,filePath);
        }
    })
    
     async function responser(fileType,body,filePath){
        
        var responses = (await addExam.eventController(fileType,body,filePath));
        
        mensagem = {mensagem:responses}
        response.send(mensagem)
    }

})

router.post("/api/deleteExam", async function(request, response) {
    var body = request.body.data
    
    response.send(await deleteExamEvent.eventController(body))
})

router.post("/api/changeExam", async function(request, response) {
    var body = request.body.data

    upload(request, response, (err) => {
        if(err) {
            response.status(200).send("Erro");
        }
        else{
            let fileType;
            let filePath;
            var file = request.file
            let body = request.body.name
            let status = request.body.status
            let id = request.body.id
            if(file != null && file != undefined && file != ''){
                 filePath = "./public/uploads/"+file.originalname 
                 const filetypes = /jpeg|jpg|png|gif/;
                 const extname =  filetypes.test(path.extname(file.originalname).toLowerCase());
                 const mimetype = filetypes.test(file.mimetype);

                 //VALIDA O TIPO DE ARQUIVO
                if(extname && mimetype){
                    fileType = "imagem"
                }else {
                    fileType = "Análise Clinica"
                }
            }
            responser(fileType,body,filePath,status,id);
        }
    })
    
     async function responser(fileType,body,filePath,status,id){
        
        var responses = (await changeExam.eventController(fileType,body,filePath,status,id));
        mensagem = {mensagem:responses}
        response.send(mensagem)
    }  
})

router.post("/api/listExam", async function(request, response) {
    var body = request.body.data
    response.send(await listExamEvent.eventController(body))
})

//ROTAS DE ASSOCIAÇÃO

router.post("/api/addAssociation", async function(request, response) {
    var body = request.body.data
    response.send(await addAssociation.eventController(body))
})

router.post("/api/deleteAssociation", async function(request, response) {
    var body = request.body.data
    if (body.id != null && body.id != '' && body.id != undefined){
        let responser = await deleteAssociation.eventController(body.id)
        if(responser.status == 200){
            response.send("Associação deletada com sucesso")
        }else{
            response.send("Erro inesperado ou ID não encontrado")
        }

    }else{
        response.send("Nenhum id encontrado no Json")
    }
   
})

router.post("/api/listAssociation", async function(request, response) {
    var body = request.body.data
    response.send(await listAssociation.eventController(body))
})
            
 
 module.exports = router
 