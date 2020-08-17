import Vue from "vue";
import Vuex from "vuex";
import axios from 'axios';

Vue.use(Vuex);

let store = new Vuex.Store({
  state: {
     products: [],
     cart: [],
     searchValue: ''
  },
  mutations: {
  	  	SEND_TO_PRODUCTS: (state, products) => {
           state.products = products
  	  	},

        PUT_PRODUCT_TO_SHOP: (state, product) => {
            if(state.cart.length) {
              let isExists = false
              state.cart.map(function(item) {
                if(item.article === product.article) {
                   isExists = true
                   return;
                }
              })

              if(isExists == false) {
                 state.cart.unshift(product)
              }
            } else {
              state.cart.unshift(product)
            }               
        },
        
        REMOVE_FROM_BUSKET: (state, index) => {
           state.cart.splice(index, 1)
        },

        SET_SEARCH_VALUE: (state, value) => {
           //state.searchValue = value
           state.searchValue = value
        }
  },
  actions: {
  	 GET_PRODUCTS_FROM_API({commit}) {
  	 	return axios.get('http://localhost:3000/products')
  	 	  .then((products) => {
             commit('SEND_TO_PRODUCTS', products.data)
             return products.data
  	 	  })
  	 	  .catch((error) => {
             return error 
  	 	  })
  	 },

     SET_PRODUCT_TO_SHOP({commit}, product) {
        commit('PUT_PRODUCT_TO_SHOP', product)
     },

     DELETE_FROM_BUSKET({commit}, index) {
        commit('REMOVE_FROM_BUSKET', index)
     },

     GET_SEARCH_VALUE({commit}, value) {
        commit('SET_SEARCH_VALUE', value)
     }
  },
  getters: {
  	 PRODUCT(state) {
        return state.products
  	 },

     CART(state) {
        return state.cart
     },

     SEARCH_VALUE(state) {
        return state.searchValue
     }
  }
});

export default store;