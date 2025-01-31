import { randomUUID } from "crypto"

export class DatabaseMemory {
    #revistas = new Map()
    
    create(revista){
        const revistaId = randomUUID()
        this.#revistas.set(revistaId, revista)
    }

    update(id, revista){
        this.#revistas.set(id, revista)
    }

    list(){
        return this.#revistas.values()
    }

    delete(id){
        this.#revistas.delete(id)
    }
}