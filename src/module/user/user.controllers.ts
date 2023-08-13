import {  Request, Response } from "express";
import { disconnect } from "../../../db/db-config";
import { createPost, createProfile, deleteUserById, getAllPosts, getAllProfiles, getAllUsers, updateProfile, userCreateService } from "./user.servers";

export const userCreateController = async (req:Request, res:Response) => { 
    try {
        const newUser = await userCreateService(req.body)
        res.json(newUser);
        await disconnect();
      } catch (error:any) {
        res.status(500).json({ error: error.message });
      }
}


export async function getUsers(req: Request, res: Response) {
    try {
        const allUsers = await getAllUsers();
        res.json(allUsers);
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
}

export async function deleteUser(req: Request, res: Response) {
    try {
      const id = parseInt(req.params.id);
      const deletedUser = await deleteUserById(id);
      res.json(deletedUser);
    } catch (error:any) {
      res.status(500).json({ error: error.message });
    }
  }


  export async function createNewPost(req: Request, res: Response) {
    try {
      const { title, content, authorId } = req.body;
      const newPost = await createPost(title, content, authorId);
      res.json(newPost);
    } catch (error:any) {
      res.status(500).json({ error: error.message });
    }
  }


  export async function getPosts(req: Request, res: Response) {
    try {
      const allPosts = await getAllPosts();
      res.json(allPosts);
    } catch (error:any) {
      res.status(500).json({ error: error.message });
    }
  }


  export async function createMyProfile(req: Request, res: Response) {
    try {
      const { bio, userId } = req.body;
      const profileUpdate = await createProfile(bio, userId);
      res.json(profileUpdate);
    } catch (error:any) {
      res.status(500).json({ error: error.message });
    }
  }


  export async function getMyProfiles(req: Request, res: Response) {
    try {
      const allProfiles = await getAllProfiles();
      res.json(allProfiles);
    } catch (error:any) {
      res.status(500).json({ error: error.message });
    }
  }


  export async function updateMyProfile(req: Request, res: Response) {
    try {
      const id = parseInt(req.params.id);
      const { bio, userId } = req.body;
      const updatedProfile = await updateProfile(id, bio, userId);
      res.json(updatedProfile);
    } catch (error:any) {
      res.status(500).json({ error: error.message });
    }
  }