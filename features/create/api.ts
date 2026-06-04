import api from "@/lib/api";
import { PostInterface } from "./types";

export const createService = {
  createPost: async (post: PostInterface) => {
    try {
      const url = "/posts";
      const response = await api.post(url, post);

      console.log("Status: ", response.status);
      console.log("Data: ", response.data);
    } catch (error) {
      console.error(error);
      throw error;
    }
  },
};
