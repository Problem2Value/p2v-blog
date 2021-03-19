<template>
  <div class="flex items-stretch mt-150 justify-between">
    <div class="w-1/6 flex">
      <NuxtLink
        v-if="prev"
        :to="{ name: 'blog-slug', params: { slug: prev.slug } }"
        class="sm:w-auto flex-1 text-center bg-gray-900 hover:bg-gray-700 text-white text-lg font-semibold py-3 px-6 border border-transparent rounded-xl focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-gray-900 focus:outline-none transition-colors duration-200"
      >
        Previous Article
      </NuxtLink>
      <span v-else>&nbsp;</span>
    </div>
    <div class="w-1/6 flex">
      <NuxtLink
        v-if="next"
        :to="{ name: 'blog-slug', params: { slug: next.slug } }"
        class="sm:w-auto flex-1 text-center bg-gray-900 hover:bg-gray-700 text-white text-lg font-semibold py-3 px-6 border border-transparent rounded-xl focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-gray-900 focus:outline-none transition-colors duration-200"
      >
        Next Article
      </NuxtLink>
      <span v-else>&nbsp;</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    prev: {
      type: Object,
      default: () => null,
    },
    next: {
      type: Object,
      default: () => null,
    },
  },
}
</script>
