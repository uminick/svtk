
/** @type {import('./$types').RequestHandler} */
export async function GET({fetch, request, params, url}){
  console.log(request)
  console.log(`MKY|request|${url.host}|${url.pathname}`)


  const post = await import(`../../../blog/${params.slug}.md`);
  const { title, dir, author, date } = post.metadata;
  const content = post.default;

  return new Response(JSON.stringify({
    content,
    title,
    dir,
    author,
    date
  }));
}