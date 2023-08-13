import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function userCreateService(data: { name: string, email: string, password: string }) { 
    const newUser = await prisma.user.create({
        data: {
            name: data.name,
            email: data.email,
            password: data.password,
        },
    });
    return newUser;
}


export async function getAllUsers() {
    try {
      const allUsers = await prisma.user.findMany();
      return allUsers;
    } catch (error) {
      throw new Error("Failed to fetch users");
    }
  }


  export async function deleteUserById(id: number) {
    try {
      const deletedUser = await prisma.user.delete({
        where: {
          id: id,
        },
      });
      return deletedUser;
    } catch (error) {
      throw new Error("Failed to delete user");
    }
  }