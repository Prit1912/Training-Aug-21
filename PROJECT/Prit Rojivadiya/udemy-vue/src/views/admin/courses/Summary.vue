<template>
  <div v-if="course" class="container my-5">
    <div class="imgContainer">
      <img :src="course.courseImage.url" class="img-fluid courseImage border border-dark" />
    </div>
    <div class="content">
      <h3 class="mt-5">{{ course.name }}</h3>
      <p>{{ course.description }}</p>
      <div class="row">
        <div class="col-md-3 col-sm-4 col-11 info">
          <h5><b> Basic Details: </b></h5>
          <p v-if="course.price"><b> Price </b>: ₹{{ course.price }}</p>
          <p v-else> <b> Price</b>: Free</p>
          <p><b>Category: </b>{{ course.category.name }}</p>
          <p v-if="course.subcategory">
            <b>SubCategory: </b>{{ course.subcategory.name }}
          </p>
        </div>
        <div class="col-md-3 col-sm-4 col-11 info">
          <h5><b> This course includes: </b></h5>
          <ul class="list-unstyled">
            <li>video lectures</li>
            <li>Full lifetime access</li>
            <li>1 downloadable resource</li>
            <li>Access on mobile and TV</li>
          </ul>
        </div>
        <div class="col-md-3 col-sm-4 col-11 info">
          <h5><b> Instructor Details: </b></h5>
          <div class="instDetail">
            <p><b>Name: </b>{{ course.instructor.name }}</p>
            <p><b>Email: </b>{{ course.instructor.email }}</p>
            <p><b>Phone: </b>{{ course.instructor.phone }}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="row my-5">
      <div class="col-sm-9">
        <video ref="myVideo" id="myVideo" :src="videoUrl" controls></video>
      </div>
      <div class="col-sm-3 links">
        <div v-for="(video, index) of course.videos" :key="index">
          <div class="wrapper bg-light border border- p-2">
            <span class="videolink" @click="nextVideo(video, index)">
               {{ video.name }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import course
import courseData from "../../../services/courses";
export default {
  name: "summary",
  props: ["id"],
  data() {
    return {
      course: "",
      videoUrl: "",
    };
  },
  created() {
    courseData.showCourseSummary(this.id).then((res) => {
      this.course = res.data;
      this.videoUrl = this.course.videos[0].url;
    });
  },
  methods:{
       nextVideo(video, index){
      this.videoUrl = video.url; 
      this.clicked = index;
    },
  }
};
</script>

<style scoped>

.courseImage{
 position:relative;
 left:100%;
 animation:animate 3s forwards;
 transition: all 0.4s ease-in;
}

@keyframes animate{
  from{
  left:100%;
  transform: rotate3d(1,1,1,0deg);
  } 
  to{
  left:0%;
  transform: rotate3d(1,1,1,360deg);
  }
}

.info {
  background: rgb(255, 255, 255);
  padding: 10px;
  margin: 10px;
  box-shadow: 5px 5px 15px black;
  position: relative;
  z-index: 0;
}

.info::before{
  content: '';
  position: absolute;
  height: 100%;
  width: 5px;
  background-color: rgba(132, 0, 255, 0.404);
  left: 0;
  bottom: 0;
  z-index: -1;
  transition: all 0.8s ease-in-out;
}

.info:hover::before{
  width: 100%;
}

video {
  width: 100%;
}
.videolink {
  cursor: pointer;
}
.links {
  height: 75vh;
  overflow: auto;
}
.videolink:hover {
  color: blueviolet;
}
</style>
