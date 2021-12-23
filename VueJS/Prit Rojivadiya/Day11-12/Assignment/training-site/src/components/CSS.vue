<template>
  <div class="row">
    <div class="col-md-2 col-12">
      <br />
      <div class="accordion" id="accordionExample">
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingOne">
            <button
              class="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Day1
            </button>
          </h2>
          <div
            id="collapseOne"
            class="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <h4 class="text-danger">Assignment</h4>
              <ol>
                <li>
                  <router-link :to="{ name: 'cssd1assignment' }"
                    >assignment</router-link
                  >
                </li>
              </ol>
              <h4 class="text-danger">Practice</h4>
              <ol>
                <li>
                  <router-link :to="{ name: 'cssd1practice1' }"
                    >practice1</router-link
                  >
                </li>
                <li>
                  <router-link :to="{ name: 'cssd1practice2' }"
                    >practice2</router-link
                  >
                </li>
                <li>
                  <router-link :to="{ name: 'cssd1practice3' }"
                    >practice3</router-link
                  >
                </li>
                <li>
                  <router-link :to="{ name: 'cssd1practice4' }"
                    >practice4</router-link
                  >
                </li>
                <li>
                  <router-link :to="{ name: 'cssd1practice5' }"
                    >practice5</router-link
                  >
                </li>
              </ol>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingTwo">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Day2
            </button>
          </h2>
          <div
            id="collapseTwo"
            class="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <h4 class="text-danger">Practice</h4>
              <ol>
                <li>
                  <router-link :to="{ name: 'cssd2practice1' }"
                    >Practice1</router-link
                  >
                </li>
                <li>
                  <router-link :to="{ name: 'cssd2practice2' }"
                    >Practice2</router-link
                  >
                </li>
                <li>
                  <router-link :to="{ name: 'cssd2practice3' }"
                    >Practice3</router-link
                  >
                </li>
              </ol>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingThree">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Day3
            </button>
          </h2>
          <div
            id="collapseThree"
            class="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <h4 class="text-danger">Assignment</h4>
              <ol>
                <li>
                  <router-link :to="{ name: 'cssd3assignment' }"
                    >assignment</router-link
                  >
                </li>
              </ol>
              <h4 class="text-danger">Practice</h4>
              <ol>
                <li>
                  <router-link :to="{ name: 'cssd3practice1' }"
                    >practice1</router-link
                  >
                </li>
                <li>
                  <router-link :to="{ name: 'cssd3practice2' }"
                    >practice2</router-link
                  >
                </li>
                <li>
                  <router-link :to="{ name: 'cssd3practice3' }"
                    >practice3</router-link
                  >
                </li>
                <li>
                  <router-link :to="{ name: 'cssd3practice4' }"
                    >practice4</router-link
                  >
                </li>
                <li>
                  <router-link :to="{ name: 'cssd3practice5' }"
                    >practice5</router-link
                  >
                </li>
              </ol>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingFour">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFour"
              aria-expanded="false"
              aria-controls="collapseFour"
            >
              Day4
            </button>
          </h2>
          <div
            id="collapseFour"
            class="accordion-collapse collapse"
            aria-labelledby="headingFour"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <h4 class="text-danger">Practice</h4>
              <ol>
                <li>
                  <router-link :to="{ name: 'cssd4practice1' }"
                    >practice1</router-link
                  >
                </li>
                <li>
                  <router-link :to="{ name: 'cssd4practice2' }"
                    >practice2</router-link
                  >
                </li>
                <li>
                  <router-link :to="{ name: 'cssd4practice3' }"
                    >practice3</router-link
                  >
                </li>
                <li>
                  <router-link :to="{ name: 'cssd4practice4' }"
                    >practice4</router-link
                  >
                  </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-md-10 col-12 my-4">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: "CSS",
};
</script>

<style scoped>
.row {
  width: 100%;
}
</style>
