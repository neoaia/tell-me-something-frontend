import api from "@/lib/api";

export const browseService = {
    getPosts: async () => {
        const response = await api.get("/posts");
        return response.data;
    },

    getPostById: async () => {
        
    }
}