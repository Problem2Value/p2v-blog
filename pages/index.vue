<template>
  <div>
    <div class="sticky w-full border-b bg-white border-gray-300">
      <div class="container mx-auto lg px-4 sm:px-6">
        <div
          class="flex justify-between items-center py-4 md:justify-start md:space-x-10"
        >
          <div class="flex justify-start lg:w-0 lg:flex-1">
            <a href="#">
              <span class="sr-only">Workflow</span>
              <img
                src="https://uploads-ssl.webflow.com/603505e39067d3821a008fff/603506bbea94ae409c67673f_ITHiresLogo.svg"
                width="233"
                alt=""
              />
            </a>
          </div>

          <div class="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            <a
              href="#"
              class="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-red-600 hover:bg-yellow-400"
            >
              Hire Top Talent
            </a>
          </div>
        </div>
      </div>
    </div>

    <div class="container mx-auto lg px-4 sm:px-6 py-5">
      <h1 class="font-bold text-4xl pb-5">Blog Posts</h1>

      <ul class="flex flex-wrap">
        <li
          v-for="article of articles"
          :key="article.slug"
          class="xs:w-full md:w-1/2 px-2 xs:mb-6 md:mb-12 article-card"
        >
          <NuxtLink
            :to="{ name: 'blog-slug', params: { slug: article.slug } }"
            class="flex transition-shadow duration-150 ease-in-out shadow-sm hover:shadow-md xxlmax:flex-col"
          >
            <img :src="article.img" />
            <div>
              <h2 class="font-bold">{{ article.title }}</h2>
              <p class="font-bold text-gray-600 text-sm">
                {{ article.description }}
              </p>
            </div>
          </NuxtLink>
        </li>
      </ul>
    </div>
    <footer class="flex justify-center bg-black">
      <p class="mt-4 text-white">
        Articles by
        <a href="https://it-hires.eu" class="font-bold hover:underline"
          >IT Hires Europe</a
        >
      </p>
    </footer>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const articles = await $content('articles')
      .only(['title', 'description', 'img', 'slug', 'author'])
      .sortBy('createdAt', 'asc')
      .fetch()

    return {
      articles,
    }
  },
}
</script>

<style></style>
