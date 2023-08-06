import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
  
});


  async function main() {
    // await prisma.user.create({
    //   data: {
    //     name: 'Alice',
    //     email: 'alicae@prisma.io',
    //     password: 'password'
    //   },
    // })
  
    

    const allUsers = await prisma.user.findMany()
    console.log("🚀 allUsers:", allUsers)
    console.dir(allUsers, { depth: null })
    


  }



  main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })


app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at ${port}`);
});