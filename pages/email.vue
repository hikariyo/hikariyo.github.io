<script setup lang="ts">
import katex from 'katex'
// import 'katex/katex.css'

useHead({
  title: 'Email',
})


const math = ref<HTMLDivElement>()

onMounted(() => {
  katex.render('\\int_{-t}^t(xe^{3x^2}\\cos\\frac{3}{7}\\pi x+\\frac{29}{2})\\mathrm{d}x', math.value, {
    throwOnError: false,
    output: 'mathml',
  })
})
</script>

<template>
  <div class="py-14 px-4 xl:px-20 flex justify-start flex-col text-xl">
    <code>
      # Email<br>
      import base64<br>
      s = 'a2lmdWFuQGZveG1haWwuY' + <span ref="math" class="text-2xl"></span><br>
      base64.b64decode(s.encode())
    </code>
  </div>
</template>

<style scoped>
</style>