<template>
	<div class="recipe_page">
        
        <Notification 
            :notification="notif_props"
        />

		<div class="block_back" @click="Go_back"> 
			<vue-fontawesome icon="arrow-left" class="arrow" size="2" color="white"></vue-fontawesome>
		</div>
	    <div class="block_with_ingridients">
	    	<span class="ingridients">Ингридиенты</span>
			<ol
               :class="recipe.text_class"
			>
			    <li 
			       v-for="(item, index) in recipe.recipes_f" 
			       :key="item.id"
			    > 
                   <span>{{index}}):</span> <span>{{item}}</span>
                </li> 
			</ol> 
		</div> 
		<div class="img_block" @mouseover="Show_Star_Block" @mouseout="Hide_Star_Block">	
			<img 
			    v-if="recipe.img_f"
			    :class="recipe.img_class" 
			    :src="require('../assets/Products/' + recipe.img_f)" 
			/>	
			<div class="star_block2">
		       <div @click="Click_Star"> <!-- Нужно было просто сделать обертку для иконки), это нужно для того, чтобы событие срабатывало -->
		          <vue-fontawesome ref="star2" icon="star" class="star2" size="8" color="white"></vue-fontawesome>
		       </div>
	        </div>
		</div>
		<div class="recipe_opisanie">	
			<span class="Name">{{recipe.name_f}}</span>
			<div class="clock_b">
				<div @click="Little_anim">
				   <vue-fontawesome icon="bell" class="clock" size="3" color="black"></vue-fontawesome>
				</div>
			    <span class="time_txt">{{recipe.time_f}}</span>	
			</div>
			<div class="special_icon_block" @mouseover="Show_class_of_food" @mouseout="Hide_class_of_food">
				<img 
				  v-if="recipe.special_icon_img"
				  class="special_img" 
				  :src="require('../assets/icons/' + recipe.special_icon_img)" />
		    </div>
		    <div class="special_name_block">
		    	<span class="food_class_txt">{{recipe.class_of_product}}</span>
		    </div>
			<div class="cook_information">
				<span slot="Information_b">{{recipe.cook_f}}</span>
			</div>
		</div> 
	</div>
</template>
<script>
	import Notification from './notification.vue'
    import {mapActions, mapGetters} from 'vuex'

	export default {
       name: "Recipe",
       data() {
       	  return {
             notif_props: []
       	  }
       },
       methods: {
         ...mapActions([
         	'SET_PRODUCT_TO_SHOP',
         	'GET_PRODUCTS_FROM_API'
         ]),
         
         Click_Star() {
            let star2 = document.querySelector('.star2')  

            let txt = 'Рецепт был добавлен' 
            let icon = 'check'
            let time = Date.now().toLocaleString()

            star2.style.color = 'gold'

            this.notif_props.push({info: txt, id: time, icon: icon})

            this.SET_PRODUCT_TO_SHOP(this.recipe)
        },

       	 Show_Star_Block() {
            document.querySelector('.star_block2').classList.add('Show')
       	 },

         Hide_Star_Block() {
         	document.querySelector('.star_block2').classList.remove('Show')
         },

         //this.$router.push('/') //window.location.href = '/'

       	 Little_anim() {
       	 	document.querySelector('.clock').classList.add('wanted_anim')

       	 	setTimeout(() => {
               document.querySelector('.clock').classList.add('wanted')
               document.querySelector('.clock').classList.remove('wanted_anim')
       	 	}, 2600); //- Оставлю на потом) Будет очень грандиозно 
       	 },

       	 Show_class_of_food() {
           document.querySelector('.special_name_block').classList.remove('And_second_class')

       	   setTimeout(() => {
              document.querySelector('.special_name_block').classList.add('Do_animate') 
       	   }, 50)	

           setTimeout(() => {
              document.querySelector('.special_name_block').classList.add('And_one_class')
              document.querySelector('.special_name_block').classList.remove('Do_animate')
           }, 420)
       	 }, 

       	 Hide_class_of_food() {
       	 	document.querySelector('.special_name_block').classList.remove('And_one_class')

       	 	setTimeout(() => {
               document.querySelector('.special_name_block').classList.add('Do_animate_2')
       	 	}, 50)

       	 	setTimeout(() => {
               document.querySelector('.special_name_block').classList.add('And_second_class')
               document.querySelector('.special_name_block').classList.remove('Do_animate_2')
       	 	}, 420)
       	 },

       	 Go_back() {
            this.$router.push({name: "Home"})
       	 }

       	  // FIRST() { //Я обвернул mapActions в Функцию, потому что только в формате функции он может без ошибочно выполнять действия в switch() {case:} или в if() {}, else if() {}
          //   this.SET_PRODUCT_TO_SHOP(this.recipe)
       	  // },

       	  // SECOND() {
       	  //   this.DELETE_FROM_BUSKET(this.CART.index) //Да, оказывается, даже на другой странице он видит этот параметр 
       	  // }
       },

       computed: {
       	  ...mapGetters([
            'CART',
            "PRODUCT"
       	  ]),

       	  recipe() {
       	  	let result = {}

       	  	let vm = this

       	  	this.PRODUCT.map((item) => {
       	  	   if(item.article === vm.$route.query.recipe) {
       	  	   	  result = item
       	  	   }	 
       	  	})

       	  	return result
       	  }
       },

       mounted() {
          this.GET_PRODUCTS_FROM_API() //Тут мы делаем для того, чтобы когда мы отправляли ссылку на эту страницу другому пользователю, она открылась, а точнее, чтобы там были все данные
       },

       components: {
       	  Notification
       }
	}
</script>
<style>
	.recipe_page {
       background-image: url('../assets/background/other/Background_burger.webp'); 
       background-size: cover;
       height: 1520px;
       width: 1592px;
       position: absolute;
       top: 0; /* -46px - default position */
       left: 0; /* -75px */
       z-index: 4;
	}

	.recipe_page .block_back {
		width: 50px;
		height: 50px;
		border-radius: 30px;
		position: absolute;
		margin-top: 10px;
        left: 25px;
        background: black;
        cursor: pointer;  
        transition: .8s;
        -o-transition: .8s;
        -mozila-transition: .8s;
        -webkit-transition: .8s;
	} 

	.recipe_page .block_back .arrow {
        margin-top: 7.5px;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer; 
	}

    .recipe_page .block_back:hover {
    	box-shadow: 0 0 15px white;
    	transform: scale(.9);
    }

	.recipe_page .block_with_ingridients {
		height: 600px;
		width: 650px;
		position: absolute;
		margin-top: 0px;
		margin-left: 80px;
		background: transparent;
	}

	.recipe_page .block_with_ingridients .ingridients {
		font-size: 48px;
		font-family: 'Flavors', cursive;
		display: flex;
		justify-content: center;
		align-items: center;
		color: white;
		text-shadow: 0 0 10px black;
	}

	.recipe_page .block_with_ingridients ol {
		font-size: 27px;
		font-family: 'Flavors', cursive;
		display: inline;
		color: white;
		text-shadow: 0 0 10px white;
		list-style-type: none;
		margin-top: -15px;
	}

	.recipe_page .block_with_ingridients .first_ingridient {
		font-size: 21px;
		text-shadow: 0 0 15px white;
	}

	.recipe_page .block_with_ingridients .second_ingridient {
		font-size: 16px;
		text-shadow: 0 0 20px white;
	}

	.recipe_page .block_with_ingridients .third_ingridient {
		font-size: 13px;
		text-shadow: 0 0 25px white;
	}

	.recipe_page .img_block {
		height: 600px;
		width: 800px;
		position: relative;
		border: 1px solid white;
		float: right;
		margin-right: 25px;
		margin-top: 20px;
		cursor: pointer;
		transition: .8s;
		-o-transition: .8s;
		-mozila-transition: .8s;
		-webkit-transition: .8s;
	}

	.recipe_page .img_block img {
		position: absolute;
		top: 0;
		left: 0;
		min-height: 600px;
		max-width: 800px;
	}

	.recipe_page .img_block .first_img {
		min-width: 800px;
		max-height: 600px;
	}

	.recipe_page .img_block .second_img {
		max-height: 600px;
	}

	.recipe_page .img_block .third_img {
		max-height: 400px;
		min-width: 800px;
	}

	.recipe_page .star_block2 {
		height: 600px;
		width: 800px;
		background: rgba(47,79,79, 0.7);
		position: absolute;
		top: 0;
		left: 0;
		display: none;
	}

	.recipe_page .star_block2.Show {
		display: block;
	}

	.recipe_page .star_block2 .star2 {
		margin-top: 250px;
		display: flex;
		justify-content: center;
		align-items: center;
		cursor: pointer;
		transition: .7s;
		-o-transition: .7s;
		-mozila-transition: .7s;
		-webkit-transition: .7s;
		z-index: 2;
	}

	.recipe_page .star_block2 .star2:hover {
		transform: rotate(216deg);
	}

	.recipe_page .recipe_opisanie {
		width: 1592px;
		height: 870px;
		background: white;
		position: absolute;
		margin-top: 650px;
		left: 0;
	}

	.recipe_page .recipe_opisanie .Name {
		font-size: 36px;
		font-family: 'Flavors', cursive;
		display: flex;
        justify-content: center;
        align-items: center;
	}

	.recipe_page .recipe_opisanie .clock_b {
		height: 50px;
		width: 150px;
		position: relative;
		margin-top: -45px;
		float: right;
	}

	.recipe_page .recipe_opisanie .clock_b .clock {
		cursor: pointer;
		display: flex;
		justify-content: right;
		position: absolute;
	}

	.recipe_page .recipe_opisanie .clock_b .clock.wanted_anim {
		animation: 2.5s sod linear 1;
    }

	@keyframes sod {
		0% {
          transform: rotate(0deg); 
		}

		10% {
		  transform: rotate(25deg);	
		}

		20% {
		  transform: rotate(0deg);
		}

		30% {
		  transform: rotate(-25deg);	
		}

		40% {
		  transform: rotate(0deg);	
		}

		50% {
		  transform: rotate(25deg);	
		}

		60% {
          transform: rotate(0deg);
		} 

		70% {
		  transform: rotate(-25deg);
		}

		80% {
          transform: rotate(0deg);
		}

		90% {
		  transform: rotate(25deg);	
		}

		100% {
		  transform: rotate(0deg);
		}
	}

	.recipe_page .recipe_opisanie .clock_b .clock.wanted {
		transform: rotate(0);
	}

	.recipe_page .recipe_opisanie .clock_b .icon_of_p {
		height: 45px;
		width: 45px;
		position: relative;
		float: left;
		margin-top: 5px;
		border-radius: 20px;
		border: 2px solid black;
		cursor: pointer;
		transition: .8s;
		-o-transition: .8s;
		-mozila-transition: .8s;
		-webkit-transition: .8s;
	}

	.recipe_page .recipe_opisanie .clock_b .icon_of_p:hover {
		transform: scale(.95);
	}

	.recipe_page .recipe_opisanie .clock_b .img_of_icon {
		max-height: 45px;
		max-width: 45px;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.recipe_page .recipe_opisanie .clock_b .time_txt {
		font-size: 24px;
		font-family: 'Flamenco';
		font-weight: bold;
		position: relative;
		float: right;
		margin-top: 5px;
		margin-right: 30px;
		justify-content: center;
		display: flex;
		align-items: center;
		font-weight: bold;
	} 

	.recipe_page .recipe_opisanie .special_icon_block {
        height: 45px;
        width: 45px;
        border-radius: 30px;
        border: 2px solid black;
        cursor: pointer;
        margin-top: -45px;
        margin-left: 5px;
        position: relative;
        float: left;
	}

	.recipe_page .recipe_opisanie .special_icon_block .special_img {
		width: 45px;
		height: 45px;
		border-radius: 30px;
		top: 0;
		left: 0;
		position: absolute;
	}

	.recipe_page .recipe_opisanie .special_name_block {
		height: 35px;
		width: 120px;
		background: black;
		position: relative;
		float: left;
		left: 10px;
		top: -24px; /* -38.5px || 39px */
		border: 1px solid black;
		opacity: 0;
	}

	.recipe_page .recipe_opisanie .special_name_block.Do_animate {
		animation: up_anim .4s linear 1;
	}

	@keyframes up_anim {
		0% {
          opacity: .2;
          top: -27px;   
		}

		25% {
          opacity: .4;
          top: -30px;
		}

		50% {
          opacity: .6;
          top: -33px;
		} 

		75% {
          opacity: .8;
          top: -36px;
		}

		100% {
          opacity: 1;
          top: -38.5px;
		}
	}

	.recipe_page .recipe_opisanie .special_name_block.Do_animate_2 {
		animation: down_anim .4s linear 1;
	}

	@keyframes down_anim {
		0% {
          opacity: .8;
          top: -36px; 
		}

		25% {
          opacity: .6;
          top: -33px; 
		}

		50% {
          opacity: .4;
          top: -30px;
		}

		75% { 
          opacity: .2;
          top: -27px; 
		}

		100% {
          opacity: 0;
          top: -24px;
		}
	}

	.recipe_page .recipe_opisanie .special_name_block.And_one_class {
		opacity: 1;
		top: -38.5px;
	}

	.recipe_page .recipe_opisanie .special_name_block.And_second_class {
		opacity: 0;
		top: -24px;
	}

	.recipe_page .recipe_opisanie .special_name_block .food_class_txt {
		font-size: 15px;
		font-family: 'Flavors', cursive;
		color: white;
		display: flex;
		justify-content: center;
		align-items: center;
		position: absolute;
		top: 5px;
		left: 5px;
	}

	.recipe_page .recipe_opisanie .cook_information {
		height: 250px;
		width: 1592px;
		position: absolute;
		top: 60px;
		left: 0;
	}

	.recipe_page .recipe_opisanie .cook_information span {
		font-size: 19px;
		font-weight: bold;
		font-family: 'Flavors', cursive;
		display: inline;
	}

	.recipe_page .freedom_block {
        height: 1000px;
        width: 1592px;
        position: relative;
        margin-top: 0px;
        margin-left: 0;
        background: rgba(0,0,0, .8);
        display: none;
	}

	.recipe_page .freedom_block.freedom_show {
		display: block;
	}

	.recipe_page .freedom_block .block_with_set_item {
		position: fixed;
		background: white;
		height: 550px;
		width: 950px;
		margin-top: 65px;
		left: 325px;
	}

	.recipe_page .freedom_block .block_with_set_item .T_blocks {
		position: relative;
		display: inline-block;
		width: 250px;
		height: 350px;
		margin-left: 50px;
		top: 57px;
		background: #FFFFFF;
        border: 1px solid rgba(0, 0, 0, 0.2);
        border-radius: 25px;
        cursor: pointer;
        transition: .3s;
        -o-transition: .3s;
        -mozila-transition: .3s;
        -webkit-transition: .3s;
	}

	.recipe_page .freedom_block .block_with_set_item .T_blocks:hover {
		border: 2px solid #000000;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
	}

	.recipe_page .freedom_block .block_with_set_item .T_name {
		font-size: 25px;
		font-family: 'Flavors';
		position: absolute;
		margin-top: 417px;
	}

	.recipe_page .freedom_block .block_with_set_item .hour_block_name {
		left: 144px;
	}

	.recipe_page .freedom_block .block_with_set_item .minute_block_name {
        left: 434px;
	}  

	.recipe_page .freedom_block .block_with_set_item .seconds_block_name {
		left: 730px;
	}

	.recipe_page .freedom_block .block_with_set_item .T_blocks .T_pole {
		font-size: 170px;
		font-weight: normal;
		height: 195px;
		width: 195px;
		position: absolute;
		top: 77px;
		left: 28px;
		border: 0;
	}

    .recipe_page .freedom_block .block_with_set_item .btn {
    	position: relative;
    	display: inline-block;
    	height: 75px;
    	width: 400px;
    	border-radius: 35px;
    	margin-left: 50px;
    	margin-top: 110px;
    } 

	.recipe_page .freedom_block .block_with_set_item .start_button {
		background: #2400FF;
		cursor: pointer;
	}

	.recipe_page .freedom_block .block_with_set_item .change_button {
        background: #66420D;
        cursor: no-drop;
	} 

	.recipe_page .freedom_block .block_with_set_item .start_button .start_button_txt {
		font-size: 36px;
		color: white;
		position: relative;
		display: flex;
		justify-content: center;
		align-items: center;
		top: 15px;
	} 

	.recipe_page .freedom_block .block_with_set_item .change_button .change_button_txt {
		font-size: 36px;
		color: white;
		position: relative;
		display: flex;
		justify-content: center;
		align-items: center;
		top: 15px;
	}

	.recipe_page .freedom_block .block_with_set_item .crest_block {
		position: absolute;
		margin-top: -537.5px;
		height: 45px;
		width: 45px;
		border-radius: 25px;
		border: 2px solid #FF0000;
		cursor: pointer;
        left: 455px;
        transition: .8s;
        -o-transition: .8s;
        -webkit-transition: .8s;
        -mozila-transition: .8s;
	}

	.recipe_page .freedom_block .block_with_set_item .crest_block:hover {
		transform: scale(.9);
	}

	.recipe_page .freedom_block .block_with_set_item .crest_block .crst {
		font-size: 45px;
		display: flex;
		margin-top: -7.5px;
		justify-content: center;
		align-items: center;
		transition: .8s;
		-o-transition: .8s;
		-mozila-transition: .8s;
		-webkit-transition: .8s;
	}

	.recipe_page .freedom_block .block_with_set_item .crest_block .crst:hover {
	    text-shadow: 0 0 20px black;
	}
</style>