export default async function Home() {
  const response = await fetch('https://api.chucknorris.io/jokes/random');
  const data = await response.json();
  return (
    <div>{data.value}</div>
  );
};
