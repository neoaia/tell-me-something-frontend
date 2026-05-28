import api from "@/lib/api";

export const browseService = {
  getPosts: async (search = "") => {
    const url = search ? `/posts?recipient=${search}` : "/posts";
    const response = await api.get(url);

    return response.data.data;
  },

  getPostById: async () => {},
};
