import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import { connect, disconnect } from "../db/db-config";
import { userRoute } from "./module/user/user.routers";

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.use(bodyParser.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

app.use(userRoute)




app.post("/createPost", async (req: Request, res: Response) => { 
  try {
    const prisma = connect();
    const { title, content, authorId } = req.body; // Assuming you provide authorId in the request body

    const newPost = await prisma.post.create({
      data: {
        title,
        content,
        author: {
          connect: {
            id: authorId, // Connect the post to an existing user by providing the authorId
          },
        },
      },
    });

    res.json(newPost);
    await disconnect();
  } catch (error:any) {
    res.status(500).json({ error: error.message });
  }
});



app.get("/posts", async (req: Request, res: Response) => {
  try {
    const prisma = connect();
    const allPosts = await prisma.post.findMany();
    res.json(allPosts);
    await disconnect();
  } catch (error:any) {
    res.status(500).json({ error: error.message });
  }
});


app.post("/myprofile", async (req: Request, res: Response) => { 
  try {
    const prisma = connect();
    const { bio, userId } = req.body;
    const profileUpdate = await prisma.profile.create({
      data: {
        bio,
        userId
      },
    });
    res.json(profileUpdate);
    await disconnect();
  } catch (error:any) {
    res.status(500).json({ error: error.message });
  }
});


app.get("/myprofile", async (req: Request, res: Response) => { 
  try {
    const prisma = connect();
    const allProfiles = await prisma.profile.findMany();
    res.json(allProfiles);
    await disconnect();
  } catch (error:any) {
    res.status(500).json({ error: error.message });
  }
});


app.put("/myprofile/:id", async (req: Request, res: Response) => { 
  try {
    const id = parseInt(req.params.id);
    const { bio, userId } = req.body;
    const prisma = connect();
    const updateProfile = await prisma.profile.update({
      where: {
        id: id,
      },
      data: {
        bio,
        userId
      },
    });
    res.json(updateProfile);
    await disconnect();
  } catch (error:any) {
    res.status(500).json({ error: error.message });
  }
})


app.listen(port, async () => {
  console.log(`⚡️[server]: Server is running at ${port}`);
});
