/*********************************************************************.
 * Objetivo: Criar uma API para responder dados de Estados e Cidades
 * Data: 10/11/2023
 * Autor: Mariana Alves de Sousa.
 * Versão: 1.0
 *********************************************************************/

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser')

const app = express();

app.use((request, response, next)=>{
    response.header('Acess-Control-Allow-Origin', '*');
    response.header('Acess-Control-Allow-Methods', 'GET');
    
    app.use(cors());

    next();
})

app.get('/estados/sigla', cors(), async function(request, response, next){

    let controleListaEstados = require('./modulo/mariana.js')
    let listaEstados = controleListaEstados.getListaDeEstados()

    response.json('(teste: "API FUNCIONANDO)')
    response.status(200)

})

app.listen(8080, function(){
    console.log('API funcionando e aguardando requisições.')
})





