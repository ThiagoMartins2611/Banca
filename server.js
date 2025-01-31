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
})

server.listen({
    port: 3333,
})