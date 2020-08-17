<template>
   <div class="food_screen_1">
       <Notification 
          :notification="notification"
       />

       <vSelect 
          :options="options" 
          @GetParams="SortedProduct"
          :selected="selected"
       />  
       <div class="screen_for_product">
          <Bludo 
             v-for="product in filteredProduct" 
             :key="product.id" 
             :product="product" 
             @GetProperties="GetP"
             @Go_to_Recipe2="Go_to_Recipe3"
          >
          </Bludo> 
       </div>
   </div> 
</template>

<script>
import Bludo from "../components/Bludo.vue"
import vSelect from '../components/v-select.vue'
import Notification from '../components/notification.vue'

//import _ from 'lodash' - удивительно, но когда я взял данные(хоть и не настоящие) из JSON по урлу, то вдимо мне lodash пока оказался не нужен, либо я что-то не до понимаю
import {mapGetters, mapActions} from 'vuex'

export default {
    name: "Home",
    methods: {
       ...mapActions([
           'GET_PRODUCTS_FROM_API',
           'SET_PRODUCT_TO_SHOP'
       ]),

       GetP(data) {
         this.SET_PRODUCT_TO_SHOP(data)
         .then(() => {
               let time = Date.now().toLocaleString();
               let txt = "Рецет был добавлен"
               let icon = 'check'

               this.notification.push({info: txt, id: time, icon: icon})
         })
       },

       SortedProduct(option) {
          this.sortedArray = [] //Мы чистим массив каждый раз после добавления

          let vm = this //В методе массива .map() свой контекст, по этому заменю переменной vm

          this.PRODUCT.map(function(item) {
             if(item.category === option.name) {
                vm.sortedArray.push(item)
             }
          })

          this.selected = option.name
       },

       SortedProductBySearchValue() {
           this.sortedArray = []

           let vm = this

           //Мы написали так для того, чтобы он каждый раз возвращался к исходному значению
           if(this.SEARCH_VALUE) {
              let A = this.PRODUCT.filter(function(item) {
                return item.name_f.toLowerCase().includes(vm.SEARCH_VALUE.toLowerCase())
                // return false
              })

              this.sortedArray = A
            }

             //console.log(this.SEARCH_VALUE, A)

            // console.log(value)

            // this.sortedArray.push(A)
       },

       Go_to_Recipe3(param) {
          this.$router.push({name: "Recipe", query: {'recipe': param.article}})
       } 
    },

    //Я исключу от сюда watch, так как мы находимся вообще на отдельной странице во время поиска, а по этому у нас будет идти поиск только по нажатию на кнопку
    //НЕТ, watch: {} тут не обходим!... Нет, не нужен

     watch: {
       SEARCH_VALUE() {
         this.SortedProductBySearchValue()
       }
     },

    mounted() {
       this.GET_PRODUCTS_FROM_API()
       .then(() => { // Потому что с верху уже Promise и это считается за Promise
          /* Этот метод сработал)) */ 
          //this.sortedArray = [] 

          this.SortedProductBySearchValue()
         
          let vm = this

          this.PRODUCT.map((item) => {
            if(item.category === this.options[0].name) {
               vm.sortedArray.push(item)
            }
          })

          /* Ещё бы)) */
       })
    },

    computed: {
       ...mapGetters([
          'PRODUCT',
          'SEARCH_VALUE',
          "CART"
       ]),

       filteredProduct() {
         return this.sortedArray
       }
    }, 
    data() {
       return {
          options: [
            {
              id: 1,
              name: 'Бургеры',
              img_icon: "Hamburger.jpg",
              img_class: 'first_img'
            },
            {
              id: 2,
              name: 'Салаты',
              img_icon: "salad.jpg",
              img_class: 'second_img'
            },
            {
              id: 3,
              name: 'Гарниры',
              img_icon: "Garnish.png",
              img_class: 'third_img'
            },
            {
              id: 4,
              name: 'Закуски',
              img_icon: "Snacks.jpg",
              img_class: 'fourth_img'
            },
            {
              id: 5,
              name: 'Супы',
              img_icon: "Soup.jpg",
              img_class: 'fifth_img'
            },
            {
              id: 6,
              name: 'Пицца',
              img_icon: "Pizza.png",
              img_class: 'six_img'
            },
            {
              id: 7,
              name: 'Выпечка',
              img_icon: "Backery.jpg",
              img_class: 'seventh_img'
            },
            {
              id: 8,
              name: 'Напитки',
              img_icon: "Drinks.png",
              img_class: 'eight_img'
            },
            {
              id: 9,
              name: 'Дессерты',
              img_icon: "Dessert.jpg",
              class: 'last',
              img_class: 'nine_img'
            }
          ],

          sortedArray: [],

          notification: [],

          selected: 'Бургеры' //Я понял свою ошибку с selected(при связке)
       }
    },
    components: {
       Bludo,
       vSelect,
       Notification
    },
};
</script>

<style>
	.food_screen_1 {
		width: 1592px; /* 1592px */
		height: 2000px; /* 1850px, 16650px */
    background: url('../assets/background/other/Background_burger.webp');
    left: 0%;
    top: 100px;
    position: absolute;
    justify-content: center;
    background-size: cover;
    transition: .8s ease-in-out;
    -o-transition: .8s ease-in-out;
    -mozila-transition: .8s ease-in-out;
    -webkit-transition: .8s ease-in-out;
	}

  .food_screen_1 .screen_for_product {
    width: 1592px;
    height: 1600px;
    left: 0%;
    top: 150px;
    position: absolute;
  }
</style>
