import { useEffect, useState } from 'react';

import './App.css';
import FullPost from './components/FullPost/FullPost';
import Post from './components/Post/Post';

function App() {
  const [posts, setPosts] = useState([]);

  const [visible, setVisible] = useState(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
      .then((res) => res.json())
      .then((posts) => {
        setPosts(posts);
      });
  }, []);

  // useEffect(() => {
  //   console.log("[Blog] update");
  // }, [visible]);

  // console.log("[Blog] render");
  return (
    <div className="blog">
      <h1>Простой блог</h1>

      <div className="list">
        {posts.map((post) => {
          return <Post key={post.id} title={post.title} author={post.author} />;
        })}
      </div>

      <button onClick={() => setVisible((v) => !v)}>Toggle</button>

      {visible && <FullPost />}
    </div>
  );
}

export default App;
