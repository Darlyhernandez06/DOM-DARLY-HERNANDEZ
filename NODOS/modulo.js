export const usuarios = async () => {
  const lista = await fetch("https://jsonplaceholder.typicode.com/users")
  const usuarios = await lista.json();
  return usuarios;
}