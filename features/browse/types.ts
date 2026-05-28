export interface PostInterface {
  _id: string;
  recipient: string;
  content: string;
  createdAt: string;
  signature: string;
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
  data: PostInterface;
  meta: PaginationMetaDTO;
}
