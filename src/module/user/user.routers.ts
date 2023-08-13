import express from 'express'
import { deleteUser, getUsers, userCreateController } from './user.controllers'

export const userRoute = express.Router()


userRoute.post('/createUser', userCreateController)

userRoute.get('/users', getUsers)

userRoute.get('/deleteUser/:id', deleteUser)


