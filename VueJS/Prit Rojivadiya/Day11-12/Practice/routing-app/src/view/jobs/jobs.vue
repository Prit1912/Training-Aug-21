<template>
  <h1>Jobs</h1>
  <div v-for="job in jobs" :key="job.id"  >
      <router-link :to="{name: 'JobDetails', params: {id: job.id}}">
          <h2>{{job.title}}</h2>
      </router-link>
  </div>
</template>

<script>
export default {
    name: 'Jobs',
    data(){
        return{
            jobs: [
                {title: 'React Developer', id: 1, details: 'react'},
                {title: 'Node Developer', id: 2, details: 'node'},
                {title: 'Vue Developer', id: 3, details: 'vue'}
            ]
        }
    }
}
</script>

<style>

</style>