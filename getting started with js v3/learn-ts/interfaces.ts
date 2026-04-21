interface User = {
  name: string,
    age: number,
}

type Props = {
  user: User;
}


function Component({ user: { name, age } }: Props) {
  return (
    <div>
    <h1>{ name } </h1>
    < p > { age } </p>
    <div>
  );
}
