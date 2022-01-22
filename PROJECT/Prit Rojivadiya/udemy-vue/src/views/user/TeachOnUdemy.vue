<template>
      <!-- header -->
    <div class="TeachHeader">
        <img class="img-fluid d-none d-sm-block" src="../../assets/images/people/teacher2.jpg" alt="">
        <img class="img-fluid d-block d-sm-none" src="../../assets/images/people/teacher.jpg" alt="">
        <div class="header-content p-4">
            <h1>Come teach <br class="d-none d-sm-block"> with us</h1>
            <p>Become an instructor and change lives — including your own</p>
            <button class="btn btn-dark w-100" @click="this.$router.push({name: 'signup'})" >Get Started</button>
        </div>
    </div>

    <!-- reasons -->
    <div class="container my-5">
        <h1 class="text-center my-3">So many reasons to start</h1>
        <div class="row">
            <div class="col-12 col-md-4 text-center">
                <img src="../../assets/images/reasons/value-prop-teach-v3.jpg" alt="">
                <h3>Teach your way</h3>
                <p>Publish the course you want, in the way you want, and always have of control your own content.</p>
            </div>
            <div class="col-12 col-md-4 text-center">
                <img src="../../assets/images/reasons/value-prop-inspire-v3.jpg" alt="">
                <h3>Inspire learners</h3>
                <p>Teach what you know and help learners explore their interests, gain new skills, and advance their
                    careers.</p>
            </div>
            <div class="col-12 col-md-4 text-center">
                <img src="../../assets/images/reasons/value-prop-get-rewarded-v3.jpg" alt="">
                <h3>Get rewarded</h3>
                <p>Expand your professional network, build your expertise, and earn money on each paid enrollment.</p>
            </div>
        </div>
    </div>

    <!-- information -->
    <div class="info p-5" style="background-color: blueviolet;">
        <div class="row text-center text-white">
            <div class="col">
                <h1><b>40M</b></h1>
                <p>Students</p>
            </div>
            <div class="col">
                <h1><b>65+</b></h1>
                <p>Languages</p>
            </div>
            <div class="col">
                <h1><b>480M</b></h1>
                <p>Enrollments</p>
            </div>
            <div class="col">
                <h1><b>180+</b></h1>
                <p>Countries</p>
            </div>
            <div class="col">
                <h1><b>7000+</b></h1>
                <p>Customrs</p>
            </div>
        </div>
    </div>

    <!-- how to begin -->
    <div class="container my-5 howToBegin">
        <h1 class="text-center my-5" style="color: blueviolet;">how to begin</h1>
        <nav>
            <div class="nav nav-tabs w-75 nav-fill me-auto ms-auto my-3" id="nav-tab" role="tablist">
                <button class="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home"
                    type="button" role="tab" aria-controls="nav-home" aria-selected="true">
                    <h3> Plan your curriculam </h3>
                </button>
                <button class="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile"
                    type="button" role="tab" aria-controls="nav-profile" aria-selected="false">
                    <h3> Record your video </h3>
                </button>
                <button class="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact"
                    type="button" role="tab" aria-controls="nav-contact" aria-selected="false">
                    <h3> Launch your course </h3>
                </button>
            </div>
        </nav>
        <div class="tab-content" id="nav-tabContent">
            <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                <div class="row">
                    <div class="col-12 col-sm-6 p-5 align-self-center">
                        <p>You start with your passion and knowledge. Then choose a promising topic with the help of our
                            Marketplace Insights tool.
                            The way that you teach — what you bring to it — is up to you.</p>
                        <b>How we help you</b>
                        <p>We offer plenty of resources on how to create your first course. And, our instructor
                            dashboard and curriculum pages help keep you organized.</p>
                    </div>
                    <div class="col-12 col-sm-6 p-5">
                        <img class="img-fluid" src="../../assets/images/teachudemy/plan-your-curriculum-v3.jpg" alt="">
                    </div>
                </div>
            </div>
            <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                <div class="row">
                    <div class="col-12 col-sm-6 p-5 align-self-center">
                        <p>Use basic tools like a smartphone or a DSLR camera. Add a good microphone and you’re ready to
                            start.
                            If you don’t like being on camera, just capture your screen. Either way, we recommend two
                            hours or more of video for a paid course.</p>
                        <b>How we help you</b>
                        <p>Our support team is available to help you throughout the process and provide feedback on test
                            videos..</p>
                    </div>
                    <div class="col-12 col-sm-6 p-5">
                        <img class="img-fluid" src="../../assets/images/teachudemy/record-your-video-v3.jpg" alt="">
                    </div>
                </div>
            </div>
            <div class="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">
                <div class="row">
                    <div class="col-12 col-sm-6 p-5 align-self-center">
                        <p>Gather your first ratings and reviews by promoting your course through social media and your
                            professional networks.
                            Your course will be discoverable in our marketplace where you earn revenue from each paid
                            enrollment.</p>
                        <b>How we help you</b>
                        <p>Our custom coupon tool lets you offer enrollment incentives while our global promotions drive
                            traffic to courses. There’s even more opportunity for courses chosen for Udemy Business.</p>
                    </div>
                    <div class="col-12 col-sm-6 p-5">
                        <img class="img-fluid" src="../../assets/images/teachudemy/launch-your-course-v3.jpg" alt="">
                    </div>
                </div>
            </div>
        </div>
    </div>

    

    <!-- carousel -->

    <div class="container my-5">
        <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <div class="row">
                        <div class="imgContainer col-sm-6 text-center">
                            <img src="../../assets/images/reviews/frank-1x-v2.jpg" class="img-fluid" alt="...">
                        </div>
                        <div class="content col-sm-6 align-self-center text-sm-center p-sm-5">
                            <p>“I’m proud to wake up knowing my work is helping people around the world improve their
                                careers and build great things. While being a full-time instructor is hard work, it lets
                                you
                                work when, where, and how you want.”</p>
                            <b>Frank Kane</b>
                            <p>Data Science & IT Certifications</p>
                        </div>
                    </div>
                </div>
                <div class="carousel-item">
                    <div class="row">
                        <div class="imgContainer col-sm-6 text-center">
                            <img src="../../assets/images/reviews/paulo-1x.jpg" class="img-fluid" alt="...">
                        </div>
                        <div class="content col-sm-6 align-self-center text-sm-center p-sm-5">
                            <p>““Udemy has changed my life. It’s allowed me to follow my passion and become a teacher I
                                love to see my students succeed and hear them say they’ve learned more, quicker, from my
                                courses than they did in college. It’s so humbling.”</p>
                            <b>Paulo Dichone</b>
                            <p>Developer (Android Speciality)</p>
                        </div>
                    </div>
                </div>
                <div class="carousel-item">
                    <div class="row">
                        <div class="imgContainer col-sm-6 text-center">
                            <img src="../../assets/images/reviews/deborah-1x.jpg" class="img-fluid" alt="...">
                        </div>
                        <div class="content col-sm-6 align-self-center text-sm-center p-sm-5">
                            <p>“Teaching on Udemy has provided me with two important elements: the opportunity to reach
                                more learners than I ever would be able to on my own and a steady stream of extra
                                income. ”</p>
                            <b>Deborah Grayson Riege</b>
                            <p>Leadership, Communication</p>
                        </div>
                    </div>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls"
                data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls"
                data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    </div>



    <div class="my-5 container-fluid">
        <div class="row">
            <div class="col-md-3 col-12 col-sm-6">
                <img class="img-fluid" src="../../assets/images/teachudemy/support-1-v3.jpg" alt="">
            </div>
            <div class="col-md-6 col-12 col-sm-6 p-5 text-center align-self-center">
                <h1>You won’t have to do it alone</h1>
                <p>Our <b> Instructor Support Team </b> is here to answer your questions and review your test video,
                    while our <b> Teaching Center </b> gives you plenty of resources to help you through the process.
                    Plus, get the support of experienced instructors in our <b> online community. </b> </p>
            </div>
            <div class="d-none d-sm-none d-md-block col-md-3 col-12">
                <img class="img-fluid" src="../../assets/images/teachudemy/support-2-v3.jpg" alt="">
            </div>
        </div>
    </div>

    <!-- become instructor today -->
    <div class="text-center bg-light p-5">
        <h1 class="text-center">Become an instructor today</h1>
        <p>Join one of the world’s largest online learning marketplaces.</p>
        <button class="btn btn-dark" @click="this.$router.push({name: 'signup'})" >Get Started</button>
    </div>


    <div class="bg-dark p-4 text-white border-bottom">
        <div class="row">
            <div class="col-md-6 col-12"> <b> Top companies choose <span style="color: blueviolet;"> Udemy Business
                    </span> to build in-demand career skills. </b> </div>
            <div class="col-md-6 col-12">
                <div class="row">
                    <div class="col">
                        <img class="img-fluid" src="../../assets/images/logos/apple-dark.svg" alt="">
                    </div>
                    <div class="col"><img class="img-fluid" src="../../assets/images/logos/box-dark.svg" alt=""></div>
                    <div class="col"><img class="img-fluid" src="../../assets/images/logos/volkswagen-dark.svg" alt="">
                    </div>
                    <div class="col"><img class="img-fluid" src="../../assets/images/logos/netflix-dark.svg" alt=""></div>
                    <div class="col"><img class="img-fluid" src="../../assets/images/logos/eventbrite-dark.svg" alt="">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "teachOnUdemy",
  components: {
      
  },
};
</script>

<style scoped>
  .TeachHeader {
            position: relative;
            top: 3px;
        }

        @media screen and (min-width: 768px) {
            .header-content {
                padding: 20px;
                width: 350px;
                position: absolute;
                top: 40%;
                left: 30%;
                transform: translate(-50%, -50%);
            }
        }

        .howToBegin .nav-tabs button.active {
            border: 2px solid blueviolet;
        }

        .howToBegin nav {
            box-shadow: none;
            z-index: 0;
        }
</style>
