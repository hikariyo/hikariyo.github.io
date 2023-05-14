<script setup lang="ts">
import katex from 'katex'
import 'katex/dist/katex.min.css'

useHead({
  title: 'Email',
})

// 29t, the result of left part is 0.
const math = katex.renderToString('\\int_{-t}^t(xe^{3x^2}\\cos\\frac{3}{7}\\pi x+\\frac{29}{2})\\mathrm{d}x', {
  throwOnError: false,
  output: 'html',
})
</script>

<template>
  <div class="py-14 px-4 xl:px-20 text-xl">
    <code>
      # Email<br>
      import base64<br>
      s = 'a2lmdWFuQGZveG1haWwuY' + str(<span class="text-xl" v-html="math" />)<br>
      base64.b64decode(s.encode())
    </code>
  </div>
</template>
