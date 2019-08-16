<template>
  <div class="quill-editor-container">
    <quill-editor></quill-editor>
  </div>
</template>
<script>
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
 
import { quillEditor } from 'vue-quill-editor'
export default {
  components: {
    quillEditor
  }
}
</script>
<style lang="scss" scoped>
.quill-editor-container{
  padding-right: 10px;
}
</style>