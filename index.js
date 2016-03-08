'use strict'

const Hapi = require('hapi')

const server = new Hapi.Server()
server.connection({
    host:'localhost',
    port:8000
})

let goodOptions = {
    reporters:[{
        reporter:require('good-console'),
        events:{log:'*',response:'*'}
    }]
}

server.register({
    register:require('good'),
    options:goodOptions
},err =>{
    server.route({
    method:'GET',
    path:'/',
    handler:(request,reply) => {
        let resp = reply('Hello World')
        resp.code(418) // Change the response code sent from the service.
        resp.type('text/plain') //  change content-type 
        resp.header('hello','world') // Add a new key-value pair to the header
        resp.state('hello','world') // Add a new cookie
        
    }
})

server.start(()=>console.log('started at:', server.info.uri))
})
 
