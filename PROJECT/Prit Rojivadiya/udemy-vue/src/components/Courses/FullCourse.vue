<template>
  <div v-if="course" class="container">
    <div class="heading my-2 bg-dark">
      <p>{{ course.name }}</p>
    </div>
    <div class="row">
      <div class="col-sm-9">
        <video :src="videoUrl" controls></video>
      </div>
      <div class="col-sm-3">
        <div v-for="(video, index) of course.videos" :key="index">
          <span class="videolink" @click="this.videoUrl = video.url">{{
            video.name
          }}</span>
        </div>
      </div>
    </div>

    <hr />
    <hr />

    <div class="row">
      <div class="col-sm-9">
        <h3 style="color: blueviolet">Course Information</h3>
        <h5>{{ course.name }}</h5>
        <p><b> Description: </b> {{ course.description }}</p>
        <p><b> Price: </b> ₹{{ course.price }}</p>
        <p><b> Instructor: </b> {{ course.instructor.name }}</p>
        <p>
          <b> Resources: </b>
          <button
            class="btn btn-outline-dark"
            @click.prevent="
              downloadWithAxios(course.resources.url, 'example.zip')
            "
          >
            <i class="fas fa-folder-open"></i> download
          </button>
        </p>
      </div>
    </div>

    <div v-if="this.$store.state.user.role == 'user'">
      <div class="row my-5">
        <div class="col-sm-6 border-dark border p-sm-5 p-4">
          <h3 style="color: blueviolet" class="border-bottom mb-3" >Review</h3>
          <form>
  <div class="row mb-3">
    <label for="inputEmail3" class="col-sm-2 col-form-label">Comment</label>
    <div class="col-sm-10">
      <input type="text" v-model="review" class="form-control" id="inputEmail3">
    </div>
  </div>
  <fieldset class="row mb-3">
    <legend class="col-form-label col-sm-2 pt-0">Rating</legend>
    <div class="col-sm-10">
      <div class="form-check">
        <input class="form-check-input" v-model="rating" type="radio" name="gridRadios" id="gridRadios1" value='5' checked>
        <label class="form-check-label" for="gridRadios1">
          Excellent
        </label>
      </div>
      <div class="form-check">
        <input class="form-check-input" v-model="rating" type="radio" name="gridRadios" id="gridRadios2" value="4">
        <label class="form-check-label" for="gridRadios2">
         Great
        </label>
      </div>
      <div class="form-check">
        <input class="form-check-input" v-model="rating" type="radio" name="gridRadios" id="gridRadios3" value="3">
        <label class="form-check-label" for="gridRadios3">
          Very Good
        </label>
      </div>
       <div class="form-check">
        <input class="form-check-input" v-model="rating" type="radio" name="gridRadios" id="gridRadios4" value="2">
        <label class="form-check-label" for="gridRadios4">
          Good
        </label>
      </div>
       <div class="form-check">
        <input class="form-check-input" v-model="rating" type="radio" name="gridRadios" id="gridRadios5" value="1">
        <label class="form-check-label" for="gridRadios5">
          Ok
        </label>
      </div>
    </div>
  </fieldset>
  <button type="button" @click="rateCourse" class="btn btn-dark">Review</button>
</form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import userData from '../../services/users'
import courseData from "../../services/courses";
export default {
  name: "fullCourse",
  props: {
    courseId: String,
  },
  data() {
    return {
      course: "",
      videoUrl: "",
      rating: 5,
      review: ""
    };
  },
  created() {
    courseData
      .getCourseById(this.courseId)
      .then((res) => {
        this.course = res.data;
        this.videoUrl = this.course.videos[0].url;
      })
      .catch((err) => {
        console.log(err.response);
      });
  },
  methods: {
    forceFileDownload(response, title) {
      console.log(title);
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", title);
      document.body.appendChild(link);
      link.click();
    },
    downloadWithAxios(url, title) {
      axios({
        method: "get",
        url,
        responseType: "arraybuffer",
      })
        .then((response) => {
          this.forceFileDownload(response, title);
        })
        .catch(() => console.log("error occured"));
    },
    rateCourse(){
      let review = {
        review: this.review,
        rating: Number(this.rating)
      }
      userData.rateCourse(this.courseId,review).then((res)=>{
        console.log(res.data);
      }).catch((err)=>{
        console.log(err.response);
      })
    }
  },
};
</script>

<style>
.heading {
  height: 8vh;
  display: flex;
  justify-content: center;
}
.heading p {
  color: white;
  font-size: 30px;
}
video {
  width: 100%;
}
.videolink {
  cursor: pointer;
}
.videolink:hover {
  color: blueviolet;
}
</style>
