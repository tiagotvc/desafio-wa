# desafio-wa
Node Rest Apis with mysql docker


APIS UTILIZANDO NODE.JS COM EXPRESS, E MYSQL RODANDO EM CONTAINER DO DOCKER, TAMBÉM POSSUI o ADMINER NO DOCKER PARA MELHOR GERENCIAMENTO DA BASE. 

ACESSO AO ADMINER: http://localhost:8080

INSTRUÇÕES DE USO:

NODE:
ABRA NO VSCODE E no terminal EXECUTE o comando nodemon
*CASO NÃO SEJA RECONHECIDO O COMANDO RODE npm install e depois nodemon novamente.

MYSQL:
ABRA UM NOVO TERMINAL E EXECUTE : docker-compose up --build
Será criado todas as tabelas e o usuario 'root' com senha 'docker'

PRONTO O AMBIENTE ESTA PRONTO PARA TESTES, ERA PARA TER COLOCADO UM SWAGGER MAS FIQUEI SEM TEMPO.


ENDPOINTS:
USAR POSTMAN PARA TESTAR

API PARA ADICIONAR LABORATÓRIOS

http://localhost:3007/api/addLab (METODO POST)

*POSSIBILIDADE DE ADICIONAR LABORATÓRIOS EM LOTE? SIM!
*OBS:NÃO FIZ VALIDAÇÃO DE DUPLICIDADE EM NENHUMA API, ELAS APENAS IGNORAM VALORES NULOS E VAZIOS, MAS SALVAM DUPLICADAS.

BODY EXEMPLO: RAW


{
  "data":
         {
           "lab"[
                 {   
                    "name":"Laboratorio_2",
                     "address":"Endereço2"

                  }

                ]
          }
}


////////////////////////////////////////////////////////////////////////////////////////////
API PARA EDITAR LABORATÓRIOS

http://localhost:3007/api/changeLab (METODO POST)

*POSSIBILIDADE DE EDITAR LABORATÓRIOS EM LOTE? SIM!
*STATUS 1 SIGNIFICA LABORATORIO ATIVO,STATUS 0 SIGNIFICA LABORATORIO INATIVO

BODY EXEMPLO: RAW

{
    "data":
            {
                "lab":
                    [
                        {   
                            "findId":1,
                            "name":"Laboratorio_1",
                            "address":"Endereço1",
                            "status":1

                        },
                        {   
                            "findId":2,
                            "name":"Laboratorio_2",
                            "address":"Endereço2",
                            "status":2

                        }

                    ]
            }  
}


/////////////////////////////////////////////////////
API PARA DELETAR LABORATORIOS

http://localhost:3007/api/deleteLab (METODO POST)

*POSSIBILIDADE DE DELETAR LABORATÓRIOS EM LOTE? SIM!

BODY EXEMPLO: RAW

{
    "data":
            {
                "lab":
                    [
                        {   
                            "id":1

                        },
                        {   
                            "id":2

                        }

                    ]
            }  
}

//////////////////////////////////////////////////////////////
API PARA LISTAR LABORATORIOS ATIVOS

http://localhost:3007/api/listActiveLabs(METODO GET)

SEM BODY

/////////////////////////////////////////////

APIS DE EXAME:


/////////////////////////////////////////////////////////////////
API PARA SALVAR EXAMES

http://localhost:3007/api/addExam (METODO POST)


*POSSIBILIDADE DE ADICIONAR EXAMES EM LOTE? NÃO!

BODY => FORM DATA

type file => key => teste => value : escolher uma imagem ou arquivo de texto
type text => key => name  => value : nome

* A API VERIFICA AUTOMATICO SE É IMAGEM PARA PODER GRAVAR O CAMPO TIPO DE ARQUIVO, NÃO É REQUIRIDO DO USUARIO ESSE CAMPO.


///////////////////////////////////////////////////////////////////////////
API PARA ALTERAR EXAME

http://localhost:3007/api/changeExam (METODO POST)


*POSSIBILIDADE DE EDITAR EXAMES EM LOTE? NÃO!

BODY => FORM DATA

type file => key => teste => value : escolher uma imagem ou arquivo de texto
type text => key => name  => value : nome
type text => key => status => value : 1 ou 0

* A API VERIFICA AUTOMATICO SE É IMAGEM PARA PODER GRAVAR O CAMPO TIPO DE ARQUIVO, NÃO É REQUIRIDO DO USUARIO ESSE CAMPO.


//////////////////////////////////////////////////////////////////////////////////////////
API PARA LISTAR EXAMES (METODO GET)

http://localhost:3007/api/listExam

NÃO TEM BODY

////////////////////////////////////////////////////////////////////////////////////////////

API PARA DELETAR EXAMES (METODO POST)


http://localhost:3007/api/deleteExam

*POSSIBILIDADE DE DELETAR EXAMES EM LOTE? NÃO!

body : raw

EXEMPLO:


{
    "data":
            {
                "exams":
                    
                       [ 
                           {   
                            "id":1

                            }
                        ]

                    
            }  
}


//////////////////////////////////////////////////
API PARA ADICIONAR ASSOCIAÇÃO(POST)


http://localhost:3007/api/addAssociation

body exemplo:

{
    "data":
	
        {
                "idLab": 1,
                "idExam":1
                        
                    
        }  
}

/////////////////////////////////////
API PARA DELETAR ASSOCIAÇÃO(post)

http://localhost:3007/api/deleteAssociation


exemplo body:

{
    "data":
            {
                "id": 1
                
            }  
}

//////////////////////////////////////////////
API PARA LISTAR ASSOCIAÇÃO PELO NOME DO EXAME
metodo posto

http://localhost:3007/api/listAssociation

body exemplo:

{
    "data":
            {
                "name": "exame"
                
            }  
}













