<template>
  <section class="text-gray-600 body-font">
    <div
      class="container mx-auto flex px-5 py-24 items-center justify-center flex-col"
    >
      <p>{{ article.description }}</p>
      <!-- <img
        class="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
        :src="article.thumbnail"
        :alt="article.alt"
      /> -->
      <div class="text-center lg:w-2/3 w-full">
        <h1 class="sm:text-4xl text-5xl mb-4 font-medium text-gray-900">
          {{ article.title }}
        </h1>
        <p class="mb-8 leading-relaxed">...</p>
      </div>

      <p>Article last updated: {{ formatDate(article.updatedAt) }}</p>
      <div
        class="relative xs:py-8 xs:px-8 lg:py-10 lg:px-16 xs:w-full h-full markdown-body post-right"
      >
        <nuxt-content :document="article" />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const article = await $content('blog', params.slug).fetch()

    return { article }
  },
  methods: {
    formatDate(date) {
      const options = { year: 'numeric', month: 'long' }
      return new Date(date).toLocaleDateString('en', options)
    },
  },
}
</script>

<style>
.nuxt-content p {
  margin-bottom: 20px;
}
.nuxt-content h2 {
  font-weight: bold;
  font-size: 28px;
}
.nuxt-content h3 {
  font-weight: bold;
  font-size: 22px;
}
</style>
