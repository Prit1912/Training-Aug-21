export const courses = {
  namespaced: true,
  strict: true,
  state: {
    categoryId: null,
    subCategoryId: null,
    // categoryArr: [],
    // subCategoryArr: [],
    percentage: 0,
    courses: [], // for courses id
    allCourses: [],
    updatedCourses: [],
    filteredCourses: [],
    searchedCourses: [],
    searchedString: "",
    filterApplied: false,
  },
  mutations: {
    setCategoryId(state, cId) {
      state.categoryId = cId;
      // state.subCategoryId = null;
    },
    setSubCategoryId(state, sId) {
      state.subCategoryId = sId;
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
    },
    setAllCourses(state,courses){
      state.allCourses = courses;
      state.updatedCourses = courses;
    },
    setUpdatedCourses(state,courses){
      state.updatedCourses = courses;
    },
    setFilteredCourses(state,courses){
      state.filteredCourses = courses
    },
    setSearchedCourses(state,courses){
      state.searchedCourses = courses
    },
    setSearchedString(state,str){
      state.searchedString = str;
    },
    setFilterStatus(state,val){
      state.filterApplied = val
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
    },
    setAllCourses({commit}, courses){
      commit('setAllCourses', courses)
    },
    setUpdatedCourses({commit}, courses){
      commit('setUpdatedCourses', courses)
    },
    setFilteredCourses({commit}, courses){
      commit('setFilteredCourses', courses)
    },
    setSearchedCourses({commit}, courses){
      commit('setSearchedCourses', courses)
    },
    setSearchedString({commit}, str){
      commit('setSearchedString', str)
    },
    setFilterStatus({commit}, val){
      commit('setFilterStatus', val)
    }
  },
};
