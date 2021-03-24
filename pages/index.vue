<template>
  <div>
    <BlogHero />

    <ArticleSocial :title="title" :description="description" :image="image" />

    <div class="buttons flex flex-wrap mt-8 justify-center">
      <div v-for="(tag, i) in tags" :key="i">
        <button class="btn" @click="FilterBlogByType(tag)">
          {{ tag }}
        </button>
      </div>
    </div>

    <!-- Get the articles -->
    <div id="blog-articles" class="pt-10">
      <div class="container mx-auto">
        <div
          class="mt-12 grid gap-5 max-w-lg mx-auto lg:grid-cols-3 lg:max-w-none"
        >
          <div v-for="article of blogList" :key="article.slug">
            <TheArticleCard :item="article" />
          </div>
          <!-- <div
            v-for="article of articles"
            :key="article.slug"
            class="p-4 lg:w-1/3"
          >
            <NuxtLink
              :to="{ name: 'blog-slug', params: { slug: article.slug } }"
              class="transition-shadow duration-150 ease-in-out shadow-sm hover:shadow-md xxlmax:flex-col"
            >
              <div
                class="h-full relative border-2 border-gray-200 border-opacity-60 rounded-lg"
              >
                <div class="flex-none">
                  <img
                    class="bg-white lg:h-64 md:h-36 w-full object-cover object-center"
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
                      <a class="inline-flex items-center md:mb-2 lg:mb-0"
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
          </div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'default',
  async asyncData({ $content, params }) {
    const articles = await $content('articles')
      .where({ published: { $ne: false } })
      .sortBy('date', 'desc')
      .fetch()

    return {
      articles,
    }
  },
  data() {
    return {
      selectedTag: 'All',
      tags: ['Innovation', 'Remote Work', 'All'],
      title: 'Welcome to the P2V blog',
      description:
        'On our P2V Blog we share our opinions and ideas around various innovation methodologies, frameworks and techniques as well as anything related to distributed or remote work.',
      image: 'https://blog.problem2value.com/p2vblog-card.png',
    }
  },
  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.description,
        },
      ],
    }
  },

  computed: {
    blogList() {
      return this.articles.filter((el) => el.tags.includes(this.selectedTag))
    },
  },
  methods: {
    FilterBlogByType(tag) {
      this.selectedTag = tag
    },
  },
}
</script>

<style scoped>
.btn {
  --bg-opacity: 1;
  background-color: #d8002d;
  background-color: rgba(216, 0, 45, var(--bg-opacity));
  --text-opacity: 1;
  color: #fff;
  color: rgba(255, 255, 255, var(--text-opacity));
  padding: 0.5rem;
  border-radius: 0.25rem;
  --border-opacity: 1;
  border: 2px solid #d8002d;
  border-color: rgba(216, 0, 45, var(--border-opacity));
  margin-bottom: 1rem;
  margin-right: 1rem;
}
</style>
