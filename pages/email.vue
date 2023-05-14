<script setup lang="ts">
import katex from 'katex'
import 'katex/dist/katex.min.css'

useHead({
  title: 'Email',
})

const math = katex.renderToString('\\int_{-t}^t(xe^{3x^2}\\cos\\frac{3}{7}\\pi x+\\frac{29}{2})\\mathrm{d}x', {
  throwOnError: false,
  output: 'html',
})

const showResult = ref(false)
</script>

<template>
  <div class="py-14 px-4 xl:px-20 text-xl">
    <code>
      # Email<br>
      # <a href="javascript:void(0)" class="underline decoration-sky-300 hover:decoration-sky-500" @click="showResult = true">Click me</a> to show the result <br>
      import base64<br>
      <template v-if="showResult">
        s = 'a2lmdWFuQGZveG1haWwuY29t'  # just for fun :)
      </template>
      <template v-else>
        s = 'a2lmdWFuQGZveG1haWwuY' + <span class="text-xl" v-html="math" />
      </template>
      <br>
      base64.b64decode(s.encode())
    </code>
  </div>
</template>
