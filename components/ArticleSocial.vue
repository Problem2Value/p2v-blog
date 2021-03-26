<template>
  <span v-if="false" />
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    teaser: {
      type: String,
      required: true,
    },
    thumbnail: {
      type: String,
      required: true,
    },
  },

  head() {
    return {
      meta: [
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          property: 'twitter:title',
          content: this.title,
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          property: 'twitter:description',
          content: this.teaser,
        },
        {
          hid: 'twitter:image',
          name: 'twitter:image',
          property: 'twitter:image',
          content: 'https://blog.problem2value.com' + this.thumbnail,
        },
        {
          hid: 'twitter:image:alt',
          name: 'twitter:image:alt',
          property: 'twitter:image:alt',
          content: this.title,
        },
        {
          hid: 'og:title',
          name: 'og:title',
          property: 'og:title',
          content: this.title,
        },
        {
          hid: 'og:description',
          name: 'og:description',
          property: 'og:description',
          content: this.teaser,
        },
        {
          hid: 'og:image',
          name: 'og:image',
          property: 'og:image',
          content: 'https://blog.problem2value.com' + this.thumbnail,
        },
        {
          hid: 'og:image:secure_url',
          name: 'og:image:secure_url',
          property: 'og:image:secure_url',
          content: 'https://blog.problem2value.com' + this.thumbnail,
        },
        {
          hid: 'og:image:alt',
          name: 'og:image:alt',
          property: 'og:image:alt',
          content: this.title,
        },
        {
          hid: 'og:author',
          name: 'og:author',
          property: 'og:author',
          content: 'Problem2Value',
        },
      ],
    }
  },
}
</script>
