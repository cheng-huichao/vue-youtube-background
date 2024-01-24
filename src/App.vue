<script>

import {defineComponent} from "vue";
import YoutubeBackground from "./components/YoutubeBackground.vue";

export default defineComponent({
  components: {YoutubeBackground}
})
</script>

<template>
  <div style="width: 100%; height: 70vh;">
     <YoutubeBackground video-id="rpcFhkFTej4">
        <div class="tagline">Welcome to use YoutubeBackground</div>
     </YoutubeBackground>
  </div> 
</template>

<style>
.tagline{
  font-size: 50px;
  color: white;
}
</style>