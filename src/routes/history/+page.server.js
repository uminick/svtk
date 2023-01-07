export async function load({fetch}){
  let res    = await fetch('/api/mkinfo')
  let result = await res.json();
  return result;
}