export const courses = {
  namespaced: true,
  strict: true,
  state: {
    categoryId: null,
    subCategoryId: null,
    // courses: [],
    // categoryArr: [],
    // subCategoryArr: [],
    percentage: 0,
    courses: []
  },
  mutations: {
    setCategoryId(state, cId) {
      state.categoryId = cId;
      state.subCategoryId = null;
    },
    setSubCategoryId(state, sId) {
      state.categoryId = sId;
    },
    setPercentage(state,arg){
      // console.log(arg)
        state.courses.map((course)=>{
         if(course.id == arg[2]){
          //  console.log(course)
           for(let i = 0;i<course.videos.length;i++){
            //  console.log(course.videos[i])
             if(course.videos[i].url == arg[1]){
              //  console.log('matched on number ',i)
               if(arg[0] > course.videos[i].progressPer){
                course.videos[i].progressPer = arg[0]
               }
             }
           }
         }
        })
        // state.percentage = arg[0]
    },
    setCourses(state, course){
      // console.log(state.courses.includes(course))
      let idArr = [];
      state.courses.map((course)=>{
        idArr.push(course.id);
      })
      if(!idArr.includes(course.id)){
        state.courses.push(course)
      }
    }
  },
  actions: {
    setCategoryId({ commit }, cId) {
      commit("setCategoryId", cId);
    },
    setSubCategoryId({ commit }, sId) {
      commit("setSubCategoryId", sId);
    },
    setPercentage({commit}, arg){
        commit('setPercentage', arg)
    },
    setCourses({commit}, course){
        // console.log(course)
        commit('setCourses', course)
    }
  },
};
