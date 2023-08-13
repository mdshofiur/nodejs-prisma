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


  export async function createPost(title: string, content: string, authorId: number) {
    try {
      const newPost = await prisma.post.create({
        data: {
          title,
          content,
          author: {
            connect: {
              id: authorId,
            },
          },
        },
      });
      return newPost;
    } catch (error) {
      throw new Error("Failed to create post");
    }
  }

  export async function getAllPosts() {
    try {
      const allPosts = await prisma.post.findMany();
      return allPosts;
    } catch (error) {
      throw new Error("Failed to fetch posts");
    }
  }


  export async function createProfile(bio: string, userId: number) {
    try {
      const profileUpdate = await prisma.profile.create({
        data: {
          bio,
          userId,
        },
      });
      return profileUpdate;
    } catch (error) {
      throw new Error("Failed to create user profile");
    }
  }


  export async function getAllProfiles() {
    try {
      const allProfiles = await prisma.profile.findMany();
      return allProfiles;
    } catch (error) {
      throw new Error("Failed to fetch profiles");
    }
  }


  export async function updateProfile(id: number, bio: string, userId: number) {
    try {
      const updatedProfile = await prisma.profile.update({
        where: {
          id: id,
        },
        data: {
          bio,
          userId,
        },
      });
      return updatedProfile;
    } catch (error) {
      throw new Error("Failed to update profile");
    }
  }