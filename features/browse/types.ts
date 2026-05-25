export interface PostInterface {
  id: string;
  recipient: string;
  content: string;
  dateCreated: string;
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
