'use strict'

const Hapi = require('hapi')
// Usage of Boom to mask errors from end users.
const Boom = require('boom')

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
        // reply('Hello World')  --  here Hapi will treat response as text/xml
        // reply({hello : 'World'})  -- Here Hapi will automatically change response type to application/json
        // reply(require('js').createReadStream(__filename))
           reply(Boom.notFound())
    }
})

server.start(()=>console.log('started at:', server.info.uri))
})
 
