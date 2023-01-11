// export async function load({ params }) {
//   const post = await import(`../${params.slug}.md`);
//   const { title, dir, author, date } = post.metadata;
//   const content = post.default;
  
//   return {
//     content,
//     title,
//     dir,
//     author,
//     date
//   };
// }
export async function load({fetch, params}){
  let res    = await fetch(`/api/post/${params.slug}`)
  let result = await res.json();
  return result;
}