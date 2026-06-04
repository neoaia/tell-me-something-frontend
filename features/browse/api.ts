import api from "@/lib/api";

export const browseService = {
  getPosts: async (search = "") => {
    const url = search ? `/posts?recipient=${search}` : "/posts";
    try {
      const response = await api.get(url);

      return response.data.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  },
};
