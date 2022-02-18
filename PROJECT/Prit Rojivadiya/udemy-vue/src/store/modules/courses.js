export const courses = {
  namespaced: true,
  strict: true,
  state: {
    categoryId: "all",
    subCategoryId: "all",
    percentage: 0,
    courses: [],
    allCourses: [],
    updatedCourses: [],
    filteredCourses: [],
    searchedCourses: [],
    searchedString: "",
    filterApplied: false,
    selectedFilter: "all"
  },
  mutations: {
    setCategoryId(state, cId) {
      state.categoryId = cId;
      state.subCategoryId = null;
    },
    setSubCategoryId(state, sId) {
      state.subCategoryId = sId;
    },
    setPercentage(state,arg){
        state.courses.map((course)=>{
         if(course.id == arg[2]){
           for(let i = 0;i<course.videos.length;i++){
             if(course.videos[i].url == arg[1]){
               if(arg[0] > course.videos[i].progressPer){
                course.videos[i].progressPer = arg[0]
               }
             }
           }
         }
        })
    },
    setCourses(state, course){
      let idArr = [];
      state.courses.map((course)=>{
        idArr.push(course.id);
      })
      if(!idArr.includes(course.id)){
        state.courses.push(course)
      }else{
        state.courses.map((c)=>{
          if(c.id == course.id){
            for(let video of course.videos){
              for(let vid of c.videos){
                if(video.url == vid.url){
                  video.progressPer = vid.progressPer
                }
              }
            }
            c.videos = course.videos;
          }
        })
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
    },
    setSelectedFilter(state,val){
      state.selectedFilter = val;
    }
  },
  actions: {

    // set category id
    setCategoryId({ commit }, cId) {
      commit("setCategoryId", cId);
    },

    // set subcategory id
    setSubCategoryId({ commit }, sId) {
      commit("setSubCategoryId", sId);
    },

    // set video watched percentage
    setPercentage({commit}, arg){
        commit('setPercentage', arg)
    },

    // add course id's to array
    setCourses({commit}, course){
        commit('setCourses', course)
    },

    // set all courses
    setAllCourses({commit}, courses){
      commit('setAllCourses', courses)
    },

    // set updated course array
    setUpdatedCourses({commit}, courses){
      commit('setUpdatedCourses', courses)
    },

    // set an array of filered courses
    setFilteredCourses({commit}, courses){
      commit('setFilteredCourses', courses)
    },

    // set an array of searched courses
    setSearchedCourses({commit}, courses){
      commit('setSearchedCourses', courses)
    },

    // set searched course string
    setSearchedString({commit}, str){
      commit('setSearchedString', str)
    },

    // set status of courses are filtered or not
    setFilterStatus({commit}, val){
      commit('setFilterStatus', val)
    },

    // set selected filter
    setSelectedFilter({commit},val){
      commit('setSelectedFilter', val)
    }
  },
};
