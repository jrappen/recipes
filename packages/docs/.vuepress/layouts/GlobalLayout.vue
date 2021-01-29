<template>
  <div
    id="root"
  >
    <header style="background-color: #DDD">
      <router-link to="/">{{ $site.title }}</router-link>· <router-link to="/category/">Category</router-link>· <router-link to="/tag/">Tag</router-link>
    </header><br>
    <main>
      <DefaultGlobalLayout/>
    </main>
    <Footer/>
  </div>
</template>

<script>
import GlobalLayout from '@app/components/GlobalLayout.vue'

export default {
  name: 'GlobalLayout',
  components: {
    DefaultGlobalLayout: GlobalLayout
  }
}
</script>
