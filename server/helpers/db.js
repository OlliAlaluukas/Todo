import pkg from 'pg'
import dotenv from 'dotenv'

dotenv.config()
const environment = process.env.NODE_ENV
console.log('env = ' + JSON.stringify(environment))
//console.log(typeof environment)
console.log(environment.length)
//let db = process.env.DB_NAME
/*if (process.env.NODE_ENV === 'test'){
    db = process.env.TEST_DB_NAME
    console.log('ollaanko täällä')
}*/
const { Pool } = pkg

//environment === "test" ? console.log('test') : console.log('development')
//console.log(db)
const openDb = () => {
    const pool = new Pool ({
        user: process.env.DB_USER,
        host: process.env.DB_HOST,
        database: environment === 'development' ? process.env.DB_NAME : process.env.TEST_DB_NAME,
        password: process.env.DB_PASSWORD,
        port: process.env.DB_PORT
    })
    //console.log(environment)
    return pool
}


const pool = openDb()

export { pool }