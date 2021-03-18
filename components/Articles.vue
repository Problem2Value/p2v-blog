<template>
  <div class="text-gray-700 bg-white">
    <section id="blog-articles" class="text-gray-600 body-font">
      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-wrap -m-4">
          <div
            v-for="article of articles"
            :key="article.slug"
            class="p-4 md:w-1/3"
          >
            <div
              class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden"
            >
              <img
                class="lg:h-48 md:h-36 w-full object-cover object-center"
                :src="article.img"
                alt="blog"
              />
              <div class="p-6">
                <h2
                  class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1"
                >
                  CATEGORY
                </h2>
                <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
                  {{ article.title }}
                </h1>
                <p class="leading-relaxed mb-3">
                  {{ article.description }}
                </p>
                <div class="flex items-center flex-wrap">
                  <a
                    class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0"
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
          <div class="p-4 md:w-1/3">
            <div
              class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden"
            >
              <img
                class="lg:h-48 md:h-36 w-full object-cover object-center"
                src="https://dummyimage.com/721x401"
                alt="blog"
              />
              <div class="p-6">
                <h2
                  class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1"
                >
                  CATEGORY
                </h2>
                <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
                  The 400 Blows
                </h1>
                <p class="leading-relaxed mb-3">
                  Photo booth fam kinfolk cold-pressed sriracha leggings
                  jianbing microdosing tousled waistcoat.
                </p>
                <div class="flex items-center flex-wrap">
                  <a
                    class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0"
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
          <div class="p-4 md:w-1/3">
            <div
              class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden"
            >
              <img
                class="lg:h-48 md:h-36 w-full object-cover object-center"
                src="https://dummyimage.com/722x402"
                alt="blog"
              />
              <div class="p-6">
                <h2
                  class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1"
                >
                  CATEGORY
                </h2>
                <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
                  Shooting Stars
                </h1>
                <p class="leading-relaxed mb-3">
                  Photo booth fam kinfolk cold-pressed sriracha leggings
                  jianbing microdosing tousled waistcoat.
                </p>
                <div class="flex items-center flex-wrap">
                  <a
                    class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0"
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
        </div>
      </div>
    </section>

    <!-- <h1 class="font-bold text-4xl pb-5">Articles</h1>

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
    </section> -->
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const articles = await $content('blog')
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
