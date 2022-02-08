export default function Posts({data}) {
  return (
    <section>
      <h2>Posts</h2>

      {data.map(({ title, body, id }) => (
        <div key={id}>
          <h3>{title}</h3>
          <p>{body}</p>
        </div>
      ))}
    </section>
  );
}
