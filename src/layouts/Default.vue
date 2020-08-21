<template>
  <div class="layout">
    <h1 class="text-5xl mt-4">Gridsome Blog</h1>
    <p class="mb-24 font-bold">
      A simple blog designed with Gridsome
    </p>
    <slot/>
    <footer class="mt-24 font-bold">
      built with <strong>Gridsome</strong>
    </footer>
  </div>
</template>

<style>
body {
  font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
  margin:0;
  padding:0;
  line-height: 1.5;
}

.layout {
  max-width: 760px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
  text-align: center;
}

footer strong {
  color: #4caf50;
}

</style>
