import express from 'express'
import { createMyProfile, createNewPost, deleteUser, getMyProfiles, getPosts, getUsers, updateMyProfile, userCreateController } from './user.controllers'

export const userRoute = express.Router()


userRoute.post('/createUser', userCreateController)

userRoute.get('/users', getUsers)

userRoute.delete('/deleteUser/:id', deleteUser)

userRoute.post('/createPost', createNewPost)

userRoute.get('/posts', getPosts)

userRoute.post('/myprofile', createMyProfile)

userRoute.get("/myprofile", getMyProfiles);

userRoute.put("/myprofile/:id", updateMyProfile);




