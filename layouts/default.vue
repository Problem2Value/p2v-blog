<template>
  <div
    id="main"
    class="text-gray-600 bg-white dark:bg-gray-800 dark:text-white"
  >
    <TheHeader />
    <Nuxt />
    <AppFooter />
  </div>
</template>

<style>
.nuxt-content h1 {
  font-weight: bold;
  font-size: 32px;
}

.nuxt-content h2 {
  font-weight: bold;
  font-size: 26px;
}
.nuxt-content h3 {
  font-weight: bold;
  font-size: 22px;
}

.nuxt-content p {
  margin-top: 16px;
  margin-bottom: 25px;
}

.nuxt-content p img {
  margin-top: 60px;
  margin-bottom: 60px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
}

.nuxt-content p {
  margin-top: 10px;
  margin-bottom: 20px;
}
</style>
