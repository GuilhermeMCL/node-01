import fs from 'node:fs/promises'
import { url } from 'node:inspector'

const databasepath = new URL('db.json', import.meta.url)

export class Database {
    #database = {}

    constructor() {
        fs.readFile(databasepath, 'utf8').then(data => {
            this.#database = JSON.parse(data)
        })
            .catch(() => {
                this.#persist()
            })
    }

    #persist() {
        fs.writeFile(databasepath, JSON.stringify(this.#database))
    }

    select(table) {
        const data = this.database[table] ?? []
        return data
    }

    insert(table, data) {
        if (Array.isArray(this, database[table])) {
            this.database[table].push(data)
        } else {
            this.database[table] = [data]
        }
    }

}