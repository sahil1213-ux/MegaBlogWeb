import { Client,ID, Databases, Storage, Query } from "appwrite";
import config from "../config/config";

class DatabaseService {
    client;
    databases;
    bucket;
    constructor() {
        this.client = new Client(); // Assuming Appwrite.Client is the correct way to initialize the client
        this.client.setEndpoint(config.appwriteUrl).setProject(config.appWriteProjectId);
    
        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }
    
    async createPost ({title, slug,content, featuredImage,status,userId}) {
        try {
            return await this.databases.createDocument(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                slug, {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId
                }
            )
        } catch (error) {
            // throw error;
            console.log("error occurred in create post");
        }
    }

    async updatePost (slug,{title,content, featuredImage,status}) {
        try {
            return await this.databases.updateDocument(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status
                }
            )
        } catch (error) {
            console.log("error occurred in upload post");
        }
    }

    async deletePost(slug) {
        try {
            await this.databases.deleteDocument(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                slug
            )
            return true
        } catch (error) {
            console.log("error occurred in deletePost");
            return false;
        }
    }

    async getPost(slug) {
        try {
            return await this.databases.getDocument(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                slug
            )
        } catch (error) {
            console.log("error occurred in getPost");
        }
    }

    async getPosts(queries = [Query.equal("status", "active")]) {
        try {
            return await this.databases.listDocuments(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                queries
            )
        } catch (error) {
            console.log("error occurred in getPosts");
        }
    }

    // file upload service
    async uploadFile(file) {
        try {
            return await this.bucket.createFile(config.appwriteBucketId, ID.unique(), file);
        } catch (error) {
            console.log("error occurred in uploadFile");
            return false;
        }
    }

    async deleteFile(fileId) {
        try {
            await this.bucket.deleteFile(config.appwriteBucketId, fileId);
            return true;
        } catch (error) {
            console.log("error occurred in deleteFile");
            return false;
        }
    }

    getFilePreview(fileId) {
        return this.bucket.getFilePreview(config.appwriteBucketId, fileId);
    }
}

const databaseService = new DatabaseService();
export default databaseService;