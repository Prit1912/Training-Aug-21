import { createStore } from "vuex";
import axios from 'axios';
const counterStore = createStore({
  state: {
    counter: 0,
    colorCode: "blue"
  },
  mutations: {
    increment(state, randomNumber){
        state.counter += randomNumber;
        // console.log(randomNumber)
    },
    decrement(state, randomNumber){
        state.counter -= randomNumber;
    },
    setColorCode(state,newVal){
        state.colorCode = newVal
    }
  },
  actions: { 
    increment({commit}){
      console.log('increment function')
      axios('https://www.random.org/integers/?num=1&min=1&max=6&col=1&base=10&format=plain&rnd=new')
      .then((res)=>{
        console.log(res);
        commit('increment',res.data);
      })
    },
    decrement({commit}){
      console.log('decrement function')
      axios('https://www.random.org/integers/?num=1&min=1&max=6&col=1&base=10&format=plain&rnd=new')
      .then((res)=>{
        console.log(res);
        commit('decrement',res.data);
      })
    },
    setColorCode({commit},newVal){
      commit('setColorCode',newVal)
    }
  },
  getters:{
    counterSquare(state){
      return state.counter*state.counter
    }
  },
  modules: {}
});

export {counterStore};
