import fastify from "fastify";
import { DatabaseMemory } from "./database-memory.js";

const server = fastify()
const database = new DatabaseMemory()


server.post('/revistas', (request, reply)=>{

    const {titulo, editora, preco, ano} = request.body


    database.create({
        titulo: titulo,
        editora: editora,
        preco: preco,
        ano: ano,
    });


    return reply.status(201).send()
});



server.get('/revistas', (request, reply)=>{

    const search = request.query.search
    const revistas = database.list(search);

    return reply.status(200).send, revistas;
});



server.put('/revistas/:id', (request, reply)=>{

    const revistaId = request.params.id;
    const {titulo, editora, preco, ano} = request.body;

   const revistas = database.update(revistaId, {
        titulo: titulo,
        editora: editora,
        preco: preco,
        ano: ano,
    })

    return reply.status(204).send();
});


server.patch('/revistas/:id', (request, reply)=>{

    const revistasId = request.params.id;
    const atualization = request.body;
    const revistaAntiga = database.getById(revistasId);
    const newRevista = {...revistaAntiga, ...atualization}
       
    database.update(revistasId, newRevista);

     
    return reply.status(204).send()
});

server.delete('/revistas/:id', (request, reply)=>{

    const revistaId = request.params.id

    database.delete(revistaId)

    return reply.status(204).send()
})


server.listen({
    port: 3333,
})