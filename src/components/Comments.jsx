import { useEffect, useState } from 'react';

export default function Comments() {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const getComments = async () => {
      fetch('https://jsonplaceholder.typicode.com/comments')
        .then((response) => response.json())
        .then((json) => setComments(json.slice(0, 10)));
    };

    getComments();
  }, []);

  return (
    <section>
      <h2>Comments</h2>

      {comments.map(({ name, body, id }) => (
        <div key={id}>
          <h3>{name}</h3>
          <p>{body}</p>
        </div>
      ))}
    </section>
  );
}
