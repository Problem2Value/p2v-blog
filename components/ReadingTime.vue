<template>
  <span class="readingTime">{{ readingTime }} min read</span>
</template>

<script>
export default {
  name: 'readingTime',
  props: ['content'],
  computed: {
    readingTime() {
      let minutes = 0
      const contentString = JSON.stringify(this.content)
      const words = contentString.split(' ').length
      const wordsPerMinute = 200
      minutes = Math.ceil(words / wordsPerMinute)
      return minutes
    },
  },
}
</script>

<style lang="postcss" scoped>
.readingTime {
  font-size: 1em;
  color: #7c3aed;
  margin-top: 0.5;
  margin-bottom: 0.5em;
  line-height: 1;
  font-weight: 400;
  margin-left: auto;
  margin-right: auto;
}
</style>
