import { PrismaClient } from '@prisma/client'
import 'dotenv/config'
import { randomUUID } from 'node:crypto'

const prisma = new PrismaClient()



function generateUniqueDatabaseURL(schemaId: string){
  if(!process.env.DATABASE_URL){
    throw new Error('Please provider a DATABASE_URL')
  }

  const url = new URL(process.env.DATABASE_URL)

  url.searchParams.set('schema', schemaId)

  return url.toString()
}

beforeAll(async () => {
  const databaseUrl = generateUniqueDatabaseURL(randomUUID())

  process.env.DATABASE_URL = databaseUrl

})

afterAll(async () => {
  
})