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
    path:'/users/{userId}/files',
    handler:(request,reply) => {
        server.log('error','Oh No !!!!')
        server.log('info','Replying with proper data now!')
        reply(request.params)
    }
})

server.start(()=>console.log('started at:', server.info.uri))
})
 
