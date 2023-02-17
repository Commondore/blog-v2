import ky from 'ky';

const request = ky.create({
  prefixUrl: import.meta.env.VITE_POSTS_API,
});

export const fetchPosts = (params) => {
  return request.get(params ? `posts?${params}` : 'posts').json();
};

export const fetchUserById = (id) => {
  return request.get(`users/${id}`).json();
};

export const fetchCurrentPost = (id, signal) => {
  return request.get(`posts/${id}`, { signal }).json();
};
