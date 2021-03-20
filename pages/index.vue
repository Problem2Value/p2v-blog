<template>
  <!-- Later add styles for dark mode -->
  <div>
    <BlogHero />

    <!-- Get the article content from our Netlify CMS -->
    <div
      id="blog-articles"
      class="pt-20 my-30 bg-white dark:bg-gray-800 text-gray-700 dark:text-white"
    >
      <div class="container mx-auto">
        <div class="flex flex-wrap -m-4">
          <div
            v-for="article of articles"
            :key="article.slug"
            class="p-4 lg:w-1/3"
          >
            <NuxtLink
              :to="{ name: 'blog-slug', params: { slug: article.slug } }"
              class="transition-shadow duration-150 ease-in-out shadow-sm hover:shadow-md xxlmax:flex-col"
            >
              <div
                class="h-full relative border-2 border-gray-200 border-opacity-60 rounded-lg dark:bg-gray-700"
              >
                <div class="flex-none">
                  <img
                    class="bg-white lg:h-48 md:h-36 w-full object-cover object-center"
                    :src="article.thumbnail"
                    alt="blog"
                  />
                </div>
                <div class="flex-auto">
                  <div class="flex flex-col p-6">
                    <div class="flex flex-col">
                      <h2
                        class="tracking-widest text-xs font-medium text-gray-400 mb-2"
                      >
                        Topic: {{ article.topic }}
                      </h2>
                      <h1 class="text-lg font-medium mb-3">
                        {{ article.title }}
                      </h1>
                      <p class="leading-relaxed mb-3">
                        {{ article.description }}
                      </p>
                    </div>
                    <div class="flex justify-center absolute bottom-0 mb-2">
                      <a
                        class="text-indigo-500 dark:text-indigo-400 inline-flex items-center md:mb-2 lg:mb-0"
                        >Learn More
                        <svg
                          class="w-4 h-4 ml-2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          stroke-width="2"
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <path d="M5 12h14"></path>
                          <path d="M12 5l7 7-7 7"></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const articles = await $content('blog')
      .only(['title', 'date', 'teaser', 'thumbnail', 'slug', 'author'])
      .sortBy('date', 'asc')
      .fetch()

    return {
      articles,
    }
  },
}
</script>

<style>
.nuxt-content h1 {
  font-weight: bold;
  font-size: 40px;
}

.nuxt-content h2 {
  font-weight: bold;
  font-size: 28px;
}
</style>
