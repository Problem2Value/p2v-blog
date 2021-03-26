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
          content: this.title,
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: this.teaser,
        },
        {
          hid: 'twitter:image',
          name: 'twitter:image',
          content: 'https://blog.problem2value.com' + this.thumbnail,
        },
        {
          hid: 'twitter:image:alt',
          name: 'twitter:image:alt',
          content: this.title,
        },
        {
          hid: 'og:title',
          property: 'og:title',
          name: 'og:title',
          content: this.title,
        },
        {
          hid: 'og:description',
          property: 'og:description',
          name: 'og:description',
          content: this.teaser,
        },
        {
          hid: 'og:image',
          property: 'og:image',
          name: 'og:image',
          content: 'https://blog.problem2value.com' + this.thumbnail,
        },
        {
          hid: 'og:image:secure_url',
          property: 'og:image:secure_url',
          name: 'og:image:secure_url',
          content: 'https://blog.problem2value.com' + this.thumbnail,
        },
        {
          hid: 'og:image:alt',
          property: 'og:image:alt',
          name: 'og:image:alt',
          content: this.title,
        },
      ],
    }
  },
}
</script>
