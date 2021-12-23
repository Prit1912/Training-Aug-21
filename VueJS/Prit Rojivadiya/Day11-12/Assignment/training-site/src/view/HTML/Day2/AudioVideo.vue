<template>
  <h1>Audio and Video Tags</h1>
  <video :src="videoPath" controls loop>
    <!-- use autoplay to play video when page loads -->
  </video>
  <br /><br />
  <audio
    :src="audioPath"
    controls
    loop
  ></audio>
</template>

<script>
import videoUrl from "../../../assets/My Video2.mp4";
import audioUrl from "../../../assets/Channa Mereya (Ae Dil Hai Mushkil) - Bestwap.in.mp3";
export default {
  name: "audiovideo",
  data() {
    return {
      videoPath: videoUrl,
      audioPath: audioUrl,
    };
  },
};
</script>

<style scoped>
video {
  width: 50%;
}
</style>
