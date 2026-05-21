export interface Post {
  recipient: string;
  content: string;
  dateCreated: string;
}

export interface PaginationMetaDTO {
  currentPage: number;
  itemsPerPage: number;
  totalItems: number;
  totalPages: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
}

export interface PostResponseDTO {
  data: Post;
  meta: PaginationMetaDTO;
}
