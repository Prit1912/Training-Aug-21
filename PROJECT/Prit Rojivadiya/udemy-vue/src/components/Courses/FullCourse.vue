<template>
  <div class="container">
    <div class="heading my-2 bg-dark">
      <p>{{ course.name }}</p>
    </div>
    <div class="row">
      <div class="col-sm-9">
        <video ref="myVideo" id="myVideo" :src="videoUrl" controls></video>
      </div>

      <div class="col-sm-3 links">
        {{per}}%
        <div v-for="(video, index) of course.videos" :key="index">
          <div class="wrapper bg-light border border- p-2 ">
          <span class="videolink" @click="nextVideo(video,index)">
            <input type="checkbox"> {{ video.name }}
          </span>
          <div class="progress" :hidden="clicked != index" >
            <div
              :id="video.url"
              class="progress-bar progress-bar-striped"
              role="progressbar"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
        </div>
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

    <div v-if="this.$store.state.user.user.role == 'user'">
      <div class="row my-5">
        <div class="col-sm-6 border-dark border p-sm-5 p-4">
          <h3 style="color: blueviolet" class="border-bottom mb-3">Review</h3>
          <form>
            <div class="row mb-3">
              <label for="inputEmail3" class="col-sm-2 col-form-label"
                >Comment</label
              >
              <div class="col-sm-10">
                <input
                  type="text"
                  v-model="review"
                  class="form-control"
                  id="inputEmail3"
                />
              </div>
            </div>
            <fieldset class="row mb-3">
              <legend class="col-form-label col-sm-2 pt-0">Rating</legend>
              <div class="col-sm-10">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    v-model="rating"
                    type="radio"
                    name="gridRadios"
                    id="gridRadios1"
                    value="5"
                    checked
                  />
                  <label class="form-check-label" for="gridRadios1">
                    Excellent
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    v-model="rating"
                    type="radio"
                    name="gridRadios"
                    id="gridRadios2"
                    value="4"
                  />
                  <label class="form-check-label" for="gridRadios2">
                    Great
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    v-model="rating"
                    type="radio"
                    name="gridRadios"
                    id="gridRadios3"
                    value="3"
                  />
                  <label class="form-check-label" for="gridRadios3">
                    Very Good
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    v-model="rating"
                    type="radio"
                    name="gridRadios"
                    id="gridRadios4"
                    value="2"
                  />
                  <label class="form-check-label" for="gridRadios4">
                    Good
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    v-model="rating"
                    type="radio"
                    name="gridRadios"
                    id="gridRadios5"
                    value="1"
                  />
                  <label class="form-check-label" for="gridRadios5"> Ok </label>
                </div>
              </div>
            </fieldset>
            <button type="button" @click="rateCourse" class="btn btn-dark">
              Review
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import userData from "../../services/users";
import courseData from "../../services/courses";
import store from '../../store/index'


export default {
  name: "fullCourse",
  props: {
    courseId: String,
  },
  components: {},
  data() {
    return {
      course: {},
      videoUrl: "",
      rating: 5,
      review: "",
      clicked: 0,
      per: 0,
      // widhtObject:{
      //   width:"0%"
      // }
    };
  },
  computed: {
    proper: function(){
      return localStorage.getItem('progressPercentage')
    }
  },
  mounted() {
    let video = document.getElementById("myVideo");
    let id = this.courseId
    let len;
    let count = 0;
    store.state.courses.courses.map((course)=>{
       if(course.id == this.courseId){
         len = course.videos.length;
         for(let i = 0;i<course.videos.length;i++){
              document.getElementById(course.videos[i].url).style.width = course.videos[i].progressPer+"%"
              if(course.videos[i].progressPer == 100){
                count ++;
                document.getElementById(course.videos[i].url).parentElement.parentElement.getElementsByTagName('input')[0].checked = true;
               }
          }
       }
     })
     console.log(((count/len)*100).toFixed(2))
     this.per = ((count/len)*100).toFixed(2)

      document.getElementById("myVideo").addEventListener("ended", () => {
      console.log("video ended");
      // this.videoUrl = this.course.videos[1].url;
      // console.log(this.videoUrl)
      
      // if (this.clicked < this.course.videos.length) {
      //   console.log(
      //     document.getElementsByClassName("videolink")[this.clicked].nextSibling
      //   );
      //     // document.getElementsByClassName("videolink")[this.clicked].nextSibling.setAttribute("hidden",true)
         document.getElementsByClassName("videolink")[this.clicked + 1].click();
      //    document.getElementsByClassName("videolink")[this.clicked + 1].nextSibling.removeAttribute("hidden")
        //  this.clicked ++;
          // console.log(this.clicked)
      // }

    });

    // console.log(video.src)
    setInterval(function () {
      if (video.readyState > 0) {
        var minutes = parseInt(video.duration / 60, 10);
        var seconds = video.duration % 60;
        console.log(video.duration,minutes, seconds,video.currentTime);
        // this.progressPercentage = parseInt(
        //   (video.currentTime / video.duration) * 100
        // );
        // localStorage.setItem(
        //   "progressPercentage",
        //   parseInt((video.currentTime / video.duration) * 100)
        // );
        // this.$store.dispatch('courses/setPercentage',parseInt((video.currentTime / video.duration) * 100))
        // console.log(this.progressPercentage);
        let percentage = Math.ceil((video.currentTime / video.duration) * 100)
        if(video.currentTime > video.duration - 2){
          percentage = 100;
          document.getElementById(video.src).parentElement.parentElement.getElementsByTagName('input')[0].checked = true
        }
        store.dispatch('courses/setPercentage',[percentage,video.src,id])
        
        // this.style = {
        //   width: this.progressPercentage+'%'
        // }

        // (Put the minutes and seconds in the display)

        // video.addEventListener("ended", ()=>{
        //   clearInterval(i);
        // })
      }
    }, 1000);
    setInterval(()=>{
     store.state.courses.courses.map((course)=>{
       if(course.id == id){
         for(let i = 0;i<course.videos.length;i++){
            //  console.log(course.videos[i])
             if(course.videos[i].url == video.src){
              //  console.log('matched on number ',i)
              //  console.log(document.getElementById(video.src).parentElement.parentElement.getElementsByTagName('input')[0])
               document.getElementById(video.src).style.width = course.videos[i].progressPer+"%"
              //  this.widhtObject = {
              //    width: course.videos[i].progressPer+"%"
              //  }
             }
           }
       }
     })
    //  this.widhtObject = {
    //    width: store.state.courses.percentage+"%"
    //  }
    },1000)
    // console.log(this.$refs.myVideo);
    // console.log(document.getElementById("myVideo"));
    // document.getElementById("myVideo").addEventListener("playing", () => {
      // console.log(video.currentTime);
    // });
    // console.log(this.clicked)
    // console.log(
    //       document.getElementsByClassName("videolink")[this.clicked].nextSibling.style
    //     );
  
  },
  created() {
    courseData
      .getCourseById(this.courseId)
      .then((res) => {
        this.course = res.data;
        res.data.videos = res.data.videos.map((data)=>{
          return{...data,progressPer: 0}
        })
        // console.log(res.data.videos)
        store.dispatch('courses/setCourses',{
          id: this.courseId,
          videos: res.data.videos
        })
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
    nextVideo(video, index){
      console.log('called')
      this.videoUrl = video.url; 
      this.clicked = index;
    },
    rateCourse() {
      let review = {
        review: this.review,
        rating: Number(this.rating),
      };
      userData
        .rateCourse(this.courseId, review)
        .then((res) => {
          console.log(res.data);
          this.review = "";
          this.rating = 5;
        })
        .catch((err) => {
          console.log(err.response);
        });
    },
  },
};
</script>

<style scoped >
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
.links{
  height: 75vh;
  overflow: auto;
}
.videolink:hover {
  color: blueviolet;
}
</style>
