<script>
export default {
  name: 'YoutubeBackground',
  props: {
    videoId: {type: String, required: true}
  },
  data() {
    return {youtubeUrl: '', sizeStyle: ''}
  },
  mounted() {
    this.youtubeUrl = `https://www.youtube.com/embed/${this.videoId}?showinfo=0&controls=0&autoplay=1&mute=1&playsinline=1&loop=1&rel=0&playlist=${this.videoId}`
    const onResizeEvent = ()=>{
      let container = document.getElementById('youtube-background');
      if(!container) return
      const h = container.clientHeight;
      const w = container.clientWidth;
      if((w/h)<(16/9)){
        let width = h*16/9;
        this.sizeStyle = `width:${width}px;height:100%;`
      }else{
        let height = w*9/16;
        this.sizeStyle = `width:100%; height:${height}px;`
      }
    }
    onResizeEvent();
    window.addEventListener('resize', onResizeEvent)
  }
}
</script>

<template>
  <div id="youtube-background">
    <div class="youtube-container"><iframe :style="sizeStyle" :src='youtubeUrl'></iframe></div>
    <div class="slot-container"><slot></slot></div>
  </div>
</template>

<style scoped>
#youtube-background{
  overflow: hidden; 
  position: relative; 
  width: 100%; 
  height: 100%; 
}
.youtube-container {
  display: flex; 
  position: relative; 
  justify-content: center; 
  align-items: center; 
  width: 100%; 
  height: 100%; 
}
iframe {
  border: 0;
  position: absolute; 
  pointer-events: none; 
}
.slot-container {
  display: flex; 
  position: absolute; 
  top: 0; 
  justify-content: center; 
  align-items: center; 
  width: 100%; 
  height: 100%; 
}
</style>