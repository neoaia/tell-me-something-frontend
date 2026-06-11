import api from "@/lib/api";

export const browseService = {
  getPosts: async (search = "") => {
    const url = search ? `/posts?recipient=${search}` : "/posts";
    try {
      const response = await api.get(url);

      // console.log(response.data.message);
      return response.data.data;
    } 
    catch (error) {
      console.error(error);
      throw error;
    }
  },

  getPostById: async (id: string) => {
    const url = `/posts/${id}`;
    try {
      const response = await api.get(url);

      console.log(response.data.message);
      return response.data.post;
    }
    catch (error) {
      console.error(error);
      throw error;
    }
  }
};
