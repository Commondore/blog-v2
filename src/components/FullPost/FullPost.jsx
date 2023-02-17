import { useEffect, useState } from 'react';

import { fetchCurrentPost } from '../../api/request';

const FullPost = ({ selectedId }) => {
  const [currentPost, setCurrentPost] = useState(null);

  useEffect(() => {
    if (selectedId) {
      const controller = new AbortController();
      const { signal } = controller;
      fetchCurrentPost(selectedId, signal).then((post) => setCurrentPost(post));

      return () => controller.abort();
    }
  }, [selectedId]);

  return currentPost ? (
    <section>
      <h4>{currentPost.title}</h4>
      <p>{currentPost.body}</p>
    </section>
  ) : (
    <h3>Выберите пост</h3>
  );
};

export default FullPost;
