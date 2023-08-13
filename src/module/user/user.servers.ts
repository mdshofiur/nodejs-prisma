import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// Creates a new user in the database.
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

// Retrieves all users from the database.
export async function getAllUsers() {
    try {
        const allUsers = await prisma.user.findMany();
        return allUsers;
    } catch (error) {
        throw new Error("Failed to fetch users");
    }
}

// Deletes a user by their ID from the database.
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

// Creates a new post in the database.
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

// Retrieves all posts from the database.
export async function getAllPosts() {
    try {
        const allPosts = await prisma.post.findMany();
        return allPosts;
    } catch (error) {
        throw new Error("Failed to fetch posts");
    }
}

// Creates a new user profile in the database.
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

// Retrieves all user profiles from the database.
export async function getAllProfiles() {
    try {
        const allProfiles = await prisma.profile.findMany();
        return allProfiles;
    } catch (error) {
        throw new Error("Failed to fetch profiles");
    }
}

// Updates a user profile by its ID in the database.
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
