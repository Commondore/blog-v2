import { useEffect, useState } from 'react';

import './App.css';
import { fetchPosts, fetchUserById } from './api/request';
import FullPost from './components/FullPost/FullPost';
import Post from './components/Post/Post';

function App() {
  const [posts, setPosts] = useState([]);

  const [visible, setVisible] = useState(true);
  const [selectedId, setSelectedId] = useState(null);

  useEffect(() => {
    (async () => {
      let posts = await fetchPosts('_limit=3');

      posts = await Promise.all(
        posts.map(async (post) => {
          const user = await fetchUserById(post.userId);
          return {
            ...post,
            author: user.name,
          };
        })
      );
      setPosts(posts);
    })();
    // fetchPosts('_limit=3')
    //   .then((posts) => {
    //     return Promise.all(
    //       posts.map((post) => {
    //         return fetchUserById(post.userId).then((user) => {
    //           return {
    //             ...post,
    //             author: user.name,
    //           };
    //         });
    //       })
    //     );
    //   })
    //   .then((posts) => setPosts(posts));
  }, []);

  const onPostSelected = (id) => setSelectedId(id);

  return (
    <div className="blog">
      <h1>Простой блог</h1>

      <div className="list">
        {posts.map((post) => {
          return (
            <Post
              key={post.id}
              title={post.title}
              author={post.author}
              selected={() => onPostSelected(post.id)}
            />
          );
        })}
      </div>

      <button onClick={() => setVisible((v) => !v)}>Toggle</button>

      {visible && <FullPost selectedId={selectedId} />}
    </div>
  );
}

export default App;
