import { POSTS_URL } from '../../config/app-config';
import { fetchJson } from '../../utils/fetch-json';

export const countAllPosts = async (query = ''): Promise<string[]> => {
  const url = `${POSTS_URL}/count${query}`;
  const numberOfPosts = await fetchJson<string[]>(url);
  return numberOfPosts;
};

// tentar acessar o 'meta' que vem no jsonData para usar o atributo 'total' ao invés de tentar modificar a api
