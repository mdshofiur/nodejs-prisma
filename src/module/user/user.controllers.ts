import { Request, Response } from "express";
import { disconnect } from "../../../db/db-config"; // Assuming this is your disconnect function
import {
  createPost,
  createProfile,
  deleteUserById,
  getAllPosts,
  getAllProfiles,
  getAllUsers,
  updateProfile,
  userCreateService,
} from "./user.servers"; // Assuming this is the path to your service functions

// Controller for creating a new user
export const userCreateController = async (req: Request, res: Response) => {
  try {
    const newUser = await userCreateService(req.body);
    res.json(newUser);
    await disconnect();
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

// Controller to get all users
export async function getUsers(req: Request, res: Response) {
  try {
    const allUsers = await getAllUsers();
    res.json(allUsers);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
}

// Controller to delete a user by ID
export async function deleteUser(req: Request, res: Response) {
  try {
    const id = parseInt(req.params.id);
    const deletedUser = await deleteUserById(id);
    res.json(deletedUser);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
}

// Controller to create a new post
export async function createNewPost(req: Request, res: Response) {
  try {
    const { title, content, authorId } = req.body;
    const newPost = await createPost(title, content, authorId);
    res.json(newPost);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
}

// Controller to get all posts
export async function getPosts(req: Request, res: Response) {
  try {
    const allPosts = await getAllPosts();
    res.json(allPosts);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
}

// Controller to create a user profile
export async function createMyProfile(req: Request, res: Response) {
  try {
    const { bio, userId } = req.body;
    const profileUpdate = await createProfile(bio, userId);
    res.json(profileUpdate);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
}

// Controller to get all user profiles
export async function getMyProfiles(req: Request, res: Response) {
  try {
    const allProfiles = await getAllProfiles();
    res.json(allProfiles);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
}

// Controller to update a user profile by ID
export async function updateMyProfile(req: Request, res: Response) {
  try {
    const id = parseInt(req.params.id);
    const { bio, userId } = req.body;
    const updatedProfile = await updateProfile(id, bio, userId);
    res.json(updatedProfile);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
}
