<!-- <template>
	<div class="menu">
		<div class="sections" @click="Hide_Menu">
			<div class="img_container">
				<img src="../assets/icons/jpg/Hamburger.jpg" alt="Burgers" />
			</div> 
		 <router-link
                 to="/"
                 exact
                 active-class="active"
                 tag="span"  
			>Бургеры</router-link>
		</div>
		<div class="sections" @click="Hide_Menu">
			<div class="img_container">
				<img src="../assets/icons/jpg/salad.jpg" alt="Salads"  />  
			</div>
			<router-link
                 to="/Salads"
                 active-class="active"
                 tag="span" 
			>Салаты</router-link>
		</div>
		<div class="sections" @click="Hide_Menu">
			<div class="img_container">
				 <img src="../assets/icons/png/Garnish.png" alt="Garnish"  /> 
			</div> 
			<router-link
                 to="/Garnish"
                 active-class="active"
                 tag="span"
			>Гарниры</router-link>
		</div>
		<div class="sections" @click="Hide_Menu">
			<div class="img_container">
				 <img src="../assets/icons/jpg/Snacks.jpg" alt="Snacks" /> 
			</div> 
			<router-link
                 to="/Snacks"
                 active-class="active"
                 tag="span"
			>Закуски</router-link> 
		</div>
		<div class="sections" @click="Hide_Menu">
			<div class="img_container">
				<img src="../assets/icons/jpg/Soup.jpg" alt="Soup" />
			</div> 
			<router-link
                 to="/Soup"
                 active-class="active"
                 tag="span"
			>Супы</router-link> 
		</div>
		<div class="sections" @click="Hide_Menu">
			<div class="img_container">
				<img id="six_img" src="../assets/icons/png/Pizza.png" alt="Pizza" />
			</div> 
			<router-link
                 to="/Pizza"
                 active-class="active"
                 tag="span"
			>Пицца</router-link>
		</div>
		<div class="sections" @click="Hide_Menu">
			<div class="img_container">
				<img src="../assets/icons/jpg/Backery.jpg" alt="Backery" />
			</div> 
			<router-link
                 to="/Backery"
                 active-class="active"
                 tag="span" 
			>Выпечка</router-link>
		</div>
		<div class="sections" @click="Hide_Menu">
		    <div class="img_container">
				<img src="../assets/icons/png/Drinks.png" alt="Drinks" /> 
			</div> 
			<router-link
                 to="/Drinks"
                 active-class="active"
                 tag="span"  
			>Напитки</router-link>
		</div>
		<div class="sections" @click="Hide_Menu">
			<div class="img_container">
				 <img src="../assets/icons/jpg/Dessert.jpg" alt="Desset" />   
			</div> 
			<router-link
                 to="/Dessert"
                 active-class="active"
                 tag="span"
			>Десерт</router-link>
		</div>
	</div>
</template>
<script>
    import {mapGetters} from 'vuex' 

	export default {
        name: "Menu",
        methods: {
           Hide_Menu() {
             let M = document.querySelector('.menu')
             let button_menu_header = document.querySelector('.menu_activate')

             M.classList.remove('Go_left_too')
             button_menu_header.classList.remove('anim_for_button')
           },   
        },
        computed: {
            ...mapGetters([
               'PRODUCT'
            ])
        }
	};
</script> 
<style>
    .menu {
    	height: 690px;
        position: fixed;
		left: -24%;  
		top: 100px;
		width: 375px; /* 375px */
		background: black;
        z-index: 9;
        transition: .8s ease-in-out;
        -o-transition: .8s ease-in-out;
        -mozila-transition: .8s ease-in-out;
        -webkit-transition: .8s ease-in-out;
    }

    .menu.Go_left_too {
        left: 0;
    }

    .menu > .sections {
    	position: relative;
    	margin-top: 0px;
    	margin-left: 0;
    	border-top: 1px solid white;
    	border-bottom: 1px solid white;
    	background: black;
    	width: 370px;
    	height: 74px;
    }

    .menu .sections .img_container {
    	height: 44px;
    	width: 44px;
    	position: absolute;
    	left: 23px;
    	top: 10px;
    	border: 5px solid white;
    	border-radius: 40px;
    	cursor: pointer;
    	transition: .8s;
    	-o-transition: .8s;
    	-webkit-transition: .8s;
    	-mozila-transition: .8s;
    	perspective: 1000px;
    }

    .menu .sections .img_container img {
    	min-height: 44px;
    	max-width: 44px; 
    	top: 0;
    	left: 0;
    	border-radius: 40px;
    	transition: .8s;
    	-o-transition: .8s;
    	-webkit-transition: .8s;
    	-mozila-transition: .8s;
    }

    .menu .sections .img_container #six_img {
        max-height: 40px;
        min-width: 44px;
    } 

    .menu .sections .img_container img:hover {
    	transform: translateZ(-150px);
    }

    .menu .sections span {
        font-size: 30px;
        font-family: 'Seaweed Script', sans-serif;
        color: white;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 20px;
        cursor: pointer;
        transition: .8s;
        -o-transition: .8s;
        -mozila-transition: .8s;
        -webkit-transition: .8s;
    }

    .menu .sections span:hover {
        text-shadow: 0 0 15px white;
    }
</style> -->