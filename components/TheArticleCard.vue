<template>
  <div class="group flex flex-col h-full rounded-lg shadow-lg overflow-hidden">
    <div class="hover:scale-110 motion-reduce:transform-none">
      <NuxtLink :to="`/blog/${item.slug}`">
        <div class="flex-shrink-0 bg-white">
          <img
            class="w-full h-64 object-cover"
            :src="item.thumbnail"
            :alt="item.title"
          />
        </div>
        <div class="flex-1 bg-white p-6 flex flex-col justify-between">
          <div class="flex-1">
            <!-- <NuxtLink :to="`/blog/${item.slug}`" class="block"> -->
            <h3 class="mt-2 text-xl leading-7 font-semibold text-gray-900">
              {{ item.title }}
            </h3>
            <p class="mt-3 text-base leading-6 text-gray-500">
              {{ item.teaser }}
            </p>
            <!-- </NuxtLink> -->
          </div>
          <div v-if="item.date" class="mt-6 flex items-center">
            <div class="">
              <div class="flex text-sm leading-5 text-gray-500">
                {{ formatDate(item.date) }}
              </div>
            </div>
          </div>
        </div>
      </NuxtLink>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  methods: {
    formatDate(date) {
      const options = { year: 'numeric', month: 'long' }
      return new Date(date).toLocaleDateString('en', options)
    },
  },
}
</script>

<style scoped>
a {
  text-decoration: none;
}
</style>
