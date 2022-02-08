export default function Comments({data}) {
  return (
    <section>
      <h2>Comments</h2>

      {data.map(({ name, body, id }) => (
        <div key={id}>
          <h3>{name}</h3>
          <p>{body}</p>
        </div>
      ))}
    </section>
  );
}
