<script>
  export let data;

  const projects = data?.projects.sort((a,b)=> b.no - a.no);

</script>

<main class="dark">
  <div class="relative px-6 lg:px-8">
    <div class="mx-auto max-w-3xl pt-20 pb-32">
      <div>
        <div>
          <h1 class="font-bold tracking-tight text-center text-4xl">Web developer</h1>          
          <div class="mt-5 flex justify-center mb-5">
            <button type="button" class="text-white bg-green-700 hover:bg-green-800 focus:outline-none font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Java</button>
            <button type="button" class="text-white bg-red-700 hover:bg-red-800 focus:outline-none font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">JavaScript</button>
            <button type="button" class="text-white bg-yellow-400 hover:bg-yellow-500 focus:outline-none font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:focus:ring-yellow-900">JSP</button>
            <button type="button" class="text-white bg-purple-700 hover:bg-purple-800 focus:outline-none font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">Vue.js</button>
          </div>
          {#each projects as project (project)}
          <div class="mt-8 flex gap-x-4 justify-center mb-10">
              <div class="max-w-md p-6 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{project?.title}</h5>
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-200">({project?.startMonth} ~ {project?.endMonth})</h5>
                <p class="font-normal text-gray-700 dark:text-gray-400">{project?.description}</p>
            </div>
          </div>
          {/each}
        </div>
      </div>
    </div>
  </div>
</main>