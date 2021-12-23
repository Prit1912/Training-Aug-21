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
              <h4 class="text-danger">CSS Components</h4>
              <ol>
                <li>
                  <router-link :to="{ name: 'alert' }"
                    >alert</router-link
                  >
                </li>
                 <li>
                  <router-link :to="{ name: 'buttons' }"
                    >buttons</router-link
                  >
                </li>
                 <li>
                  <router-link :to="{ name: 'listgroup' }"
                    >listgroups</router-link
                  >
                </li>
              </ol>
              <h4 class="text-danger">Utilities</h4>
              <ol>
                <li>
                  <router-link :to="{ name: 'borders' }"
                    >borders</router-link
                  >
                </li>
                <li>
                  <router-link :to="{ name: 'spacing' }"
                    >spacing</router-link
                  >
                </li>
                <li>
                  <router-link :to="{ name: 'typography' }"
                    >typography</router-link
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
              Day2
            </button>
          </h2>
          <div
            id="collapseThree"
            class="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <h4 class="text-danger">Grid and flexbox</h4>
              <ol>
                <li>
                  <router-link :to="{ name: 'flexbox' }"
                    >flexbox</router-link
                  >
                </li>
                 <li>
                  <router-link :to="{ name: 'grid' }"
                    >grid</router-link
                  >
                </li>
              </ol>
              <h4 class="text-danger">Javascript Widgets</h4>
              <ol>
                <li>
                  <router-link :to="{ name: 'accordion' }"
                    >accordion</router-link
                  >
                </li>
                <li>
                  <router-link :to="{ name: 'modals' }"
                    >modals</router-link
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
    name: 'Bootstrap'
}
</script>

<style scoped>
.row {
  width: 100%;
}
</style>