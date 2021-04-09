<template>
  <div>
    <BlogHero />

    <ArticleSocial :title="title" :teaser="teaser" :thumbnail="thumbnail" />

    <div class="flex flex-wrap mt-8 justify-center">
      <div v-for="(tag, i) in filterTags" :key="i" class="px-2 py-2">
        <div
          v-if="tag.tag == selectedTag"
          class="w-40 text-sm text-center bg-purple-500 hover:bg-purple-600 text-white py-2 px-3 border border-transparent rounded-xl focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-gray-900 focus:outline-none transition-colors duration-200"
          @click="FilterBlogByType(tag.tag)"
        >
          {{ tag.name }}
        </div>
        <div
          v-else
          class="w-40 text-sm text-center bg-transparent hover:bg-purple-400 text-purple-600 hover:text-white hover:cursor-pointer py-2 px-3 border border-purple-600 rounded-xl focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-gray-900 focus:outline-none transition-colors duration-200"
          @click="FilterBlogByType(tag.tag)"
        >
          {{ tag.name }}
        </div>
      </div>
    </div>

    <!-- Get the articles -->
    <div id="blog-articles" class="pt-5">
      <div class="container mx-auto">
        <div
          class="mt-6 grid gap-5 max-w-lg mx-auto lg:grid-cols-3 lg:max-w-none"
        >
          <div
            v-for="article of blogList"
            :key="article.slug"
            class="flex flex-grow rounded-lg shadow-lg bg-white overflow-hidden"
          >
            <NuxtLink :to="`/blog/${article.slug}`" class="hover:animate-pulse">
              <TheArticleCard :item="article" />
            </NuxtLink>
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
      // selectedTag: this.filterTag,
      selectedTag: 'All',
      filterTags: [
        { name: 'Innovation', tag: 'Innovation' },
        { name: 'Remote Work', tag: 'Remote' },
        { name: 'All', tag: 'All' },
      ],

      title: 'Welcome to the P2V blog',
      teaser:
        'On our P2V Blog we share our opinions and ideas around various innovation methodologies, frameworks and techniques as well as anything related to distributed or remote work.',
      thumbnail: '/p2vblog-card.png',
    }
  },
  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.teaser,
        },
      ],
    }
  },

  computed: {
    blogList() {
      console.log('FilterTag: ' + this.$route.query.tag)
      if (this.$route.query.tag) {
        this.selectedTag = this.$route.query.tag
        history.pushState({}, null, this.$route.path)
      }
      return this.articles.filter((el) =>
        el.tags.includes(this.selectedTag.toLowerCase())
      )
    },
  },
  methods: {
    FilterBlogByType(tag) {
      this.selectedTag = tag
    },
  },
}
</script>
