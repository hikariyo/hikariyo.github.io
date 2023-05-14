<script setup lang="ts">
import katex from 'katex'
import 'katex/dist/katex.min.css'

useHead({
  title: 'Email',
})

const math = ref<HTMLDivElement>()

onMounted(() => {
  // 29t, the result of left part is 0.
  katex.render('\\int_{-t}^t(xe^{3x^2}\\cos\\frac{3}{7}\\pi x+\\frac{29}{2})\\mathrm{d}x', math.value!, {
    throwOnError: false,
    output: 'html',
  })
})
</script>

<template>
  <div class="py-14 px-4 xl:px-20 text-xl">
    <code>
      # Email<br>
      import base64<br>
      s = 'a2lmdWFuQGZveG1haWwuY' + str(<span ref="math" class="text-xl" />)<br>
      base64.b64decode(s.encode())
    </code>
  </div>
</template>
