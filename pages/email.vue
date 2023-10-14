<script setup lang="ts">
useHead({
  title: 'Email',
})
/*
const math = katex.renderToString('\\int_{-t}^t(xe^{3x^2}\\cos\\frac{3}{7}\\pi x+\\frac{29}{2})\\mathrm{d}x', {
  throwOnError: false,
  output: 'html',
})

const showResult = ref(false)
*/
</script>

<template>
  <div class="py-14 px-4 xl:px-20 text-xl">
    <code>
      # Email<br>
      import base64<br>
      s = 'aGlrYXJpeW8xQG91dGxvb2suY29t'<br>
      base64.b64decode(s.encode())
    </code>
  </div>
</template>
