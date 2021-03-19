<template>
  <div id="article" class="body-font py-30">
    <div
      class="container mx-auto flex px-5 py-20 items-center justify-center flex-col"
    >
      <div class="text-center lg:w-2/3 w-full">
        <h1 class="text-5xl mb-4 font-bold">
          {{ article.title }}
        </h1>
        <!-- <p class="mb-8 leading-relaxed">{{ article.teaser }}</p> -->
        <p>{{ formatDate(article.date) }}</p>
      </div>

      <div class="w-full xs:py-8 xs:px-8 lg:py-10 lg:px-16 xs:w-full h-full">
        <!-- content from markdown -->
        <nuxt-content :document="article" />
        <!-- prevNext component -->
        <PrevNext :prev="prev" :next="next" class="mt-8" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const article = await $content('blog', params.slug).fetch()
    const [prev, next] = await $content('blog')
      .only(['title', 'slug'])
      .sortBy('date', 'asc')
      .surround(params.slug)
      .fetch()
    return {
      article,
      prev,
      next,
    }
  },
  methods: {
    formatDate(date) {
      const options = { year: 'numeric', month: 'long' }
      return new Date(date).toLocaleDateString('en', options)
    },

    shareTwitter() {
      var tweetURL =
        'https://twitter.com/intent/tweet?text=' +
        document.title +
        '&url=' +
        location.href
      window.open(tweetURL)
    },

    shareLinkedIn() {
      var linkedInPostURL =
        'https://www.linkedin.com/shareArticle/?mini=true&url=' + location.href
      this.PopupCenter(linkedInPostURL, 500, 500)
    },
  },
}
</script>

<style></style>
