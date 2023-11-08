<template>
  <div>
    <ul>
      <li>
        <NuxtLink to="/">{{ $t('nav.home') }}</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/kwun">{{ $t('kwun') }}</NuxtLink>
      </li>
    </ul>
  </div>
  <div>
    <div>语言：</div>
    <div>
      <NuxtLink :to="switchLocalePath('en')">
        English
      </NuxtLink>
      <NuxtLink :to="switchLocalePath('zh')">
        中文
      </NuxtLink>
    </div>
  </div>
  <div>
    <NuxtPage />
  </div>
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.2s;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1em);
}
</style>
