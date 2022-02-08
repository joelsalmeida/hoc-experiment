import { useEffect, useState } from 'react';

export default function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => response.json())
        .then((json) => setPosts(json.slice(0, 10)));
    };

    getPosts();
  }, []);

  return (
    <section>
      <h2>Posts</h2>

      {posts.map(({ title, body, id }) => (
        <div key={id}>
          <h3>{title}</h3>
          <p>{body}</p>
        </div>
      ))}
    </section>
  );
}
