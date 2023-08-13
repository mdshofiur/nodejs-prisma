import express from 'express';
import {
  createMyProfile,
  createNewPost,
  deleteUser,
  getMyProfiles,
  getPosts,
  getUsers,
  updateMyProfile,
  userCreateController
} from './user.controllers';

export const userRoute = express.Router();

// Create a new user
userRoute.post('/createUser', userCreateController);

// Get all users
userRoute.get('/users', getUsers);

// Delete a user by ID
userRoute.delete('/deleteUser/:id', deleteUser);

// Create a new post
userRoute.post('/createPost', createNewPost);

// Get all posts
userRoute.get('/posts', getPosts);

// Create a user profile
userRoute.post('/myprofile', createMyProfile);

// Get all user profiles
userRoute.get('/myprofile', getMyProfiles);

// Update a user profile by ID
userRoute.put('/myprofile/:id', updateMyProfile);
