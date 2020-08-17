<template>
	<div class="burger">
      <div class="link"> 
        <div class="first_page"> 
           <div class="burger_img">
              <img
                  v-if="product.img_f"
                  :class="product.bludo_class" 
                  :src="require('../assets/Products/' + product.img_f)" 
              />
           </div>
           <div class="name_of_burger">
              <span>{{product.name_f}}</span>
           </div> 
        </div>
        <div class="second_page">
           <div class="part_of_recipe">
             <span>{{product.about_f}}</span>
           </div>

           <button class="add_btn_block" @click="Add_In_List">
             <span class="add">Добавить в список</span>
           </button>
           
              <button class="details_btn_block" @click="Go_to_Recipe">
                <span class="details">Детали</span>
              </button>
        </div>
      </div>
       <!-- Мда, ну кто бы мог подумать, что можно указывать классы в router-link))) -->
  </div> 
</template>

<script>
	export default {
	  name: "Bludo",
    props: {
       product: {
         type: [Object, Array, Boolean]
       }
    },
    methods: {
       Add_In_List() {
          this.$emit('GetProperties', this.product)
       },

       Go_to_Recipe() {
          this.$emit('Go_to_Recipe2', this.product)
       }
    }
	}
</script>

<style>
   .burger {
    height: 400px;
    width: 300px;
    position: relative;
    display: inline-block;
    margin-left: 75px;
    margin-top: 45px;
  }

   .burger .link {
    position: absolute;
    width: 300px;
    height: 400px;
    margin-top: 0;
    margin-left: 0;
    cursor: pointer;
  } 

   .burger .first_page {
    backface-visibility: hidden;
    perspective: 1500px;
    height: 400px;
    width: 300px;
    position: absolute;
    top: 0;
    left: 0;
    cursor: pointer;
    transition: .8s;
    -o-transition: .8s;
    -webkit-transition: .8s;
    -mozila-transition: .8s;
  }

  .burger .first_page .burger_img {
    height: 340px;
    width: 300px;
    position: absolute;
    top: 0;
    left: 0;
  }

  .burger .first_page .burger_img img {
    position: absolute;
    left: 0;
    top: 0;
    min-height: 340px;
    max-width: 300px;
  }

  .burger .first_page .burger_img .special {
    max-height: 310px;
    min-width: 300px;
  }

  .burger .first_page .name_of_burger {
    position: absolute;
    top: 340px;
    height: 60px;
    width: 300px;
    background: black;
    left: 0;
  }

  .burger .first_page .name_of_burger span {
    font-size: 15px;
    font-family: 'Flavors', cursive;
    display: flex;
    justify-content: center;
    margin-top: 16px;
    color: white;
  } 

  .burger .second_page {
    height: 400px;
    width: 300px;
    position: absolute;
    top: 0;
    left: 0;
    cursor: pointer;
    background: black;
    perspective: 1500px;
    backface-visibility: hidden;
    transition: .8s;
    -o-transition: .8s;
    -mozila-transition: .8s;
    -webkit-transition: .8s;
    transform: rotateY(180deg); 
  }

  .burger .second_page .part_of_recipe {
    position: absolute;
    top: 5px;
    left: 7px;
  }

  .burger .second_page .part_of_recipe span {
    font-size: 20px;
    font-family: 'Flavors', cursive;
    color: white;
    display: inline;
  }

  .burger:hover .first_page {
     transform: rotateY(180deg);
  }

  .burger:hover .second_page {
     transform: rotateY(360deg);
  }
  
  .burger .second_page .add_btn_block {
     height: 50px;
     width: 125px;
     background: rgba(200, 0, 0, .7);
     border: 0;
     position: absolute;
     margin-left: 15px;
     margin-top: 330px;
     cursor: pointer;
     transition: .8s;
     -o-transition: .8s;
     -mozila-transition: .8s;
     -webkit-transition: .8s;
  }

  .burger .second_page .add_btn_block:hover {
     box-shadow: 0 0 15px rgba(200, 0, 0, .7); 
     transform: scale(.9);
  }

  .burger .second_page .add_btn_block .add {
     font-size: 15px;
     font-family: 'Flavors', cursive;
     font-weight: normal;
  }

  .burger .second_page .details_btn_block {
     height: 50px;
     width: 125px;
     background: rgba(0, 200, 0, .7);
     border: 0;
     position: absolute;
     margin-left: 155px;
     margin-top: 330px;
     cursor: pointer;
     transition: .8s;
     -o-transition: .8s;
     -mozila-transition: .8s;
     -webkit-transition: .8s;
  }

  .burger .second_page .details_btn_block:hover {
     box-shadow: 0 0 15px rgba(0, 200, 0, .7);
     transform: scale(.9);
  }

  .burger .second_page .details_btn_block .details {
     font-size: 15px;
     font-family: 'Flavors', cursive;
     font-weight: normal;
  }
</style>