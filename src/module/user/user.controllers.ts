import {  Request, Response } from "express";
import { disconnect } from "../../../db/db-config";
import { deleteUserById, getAllUsers, userCreateService } from "./user.servers";

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

