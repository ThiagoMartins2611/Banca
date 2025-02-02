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

    list(search){
        return Array.from(this.#revistas.entries()).map((revistaArray)=>{

        const id = revistaArray[0]
        const data = revistaArray[1]

        return{
            id,
            ...data
        }
        
        })


        .filter(revista => {

            if(search){
                return revista.titulo.includes(search)
            }

            return true
        });
 
    }

    getById(id){
        return this.#revistas.get(id)
    }

    delete(id){
        this.#revistas.delete(id)
    }
}