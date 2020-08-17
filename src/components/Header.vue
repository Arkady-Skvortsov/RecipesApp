<template>
	<header>
		<router-link :to="{name: 'Search'}">
            <div class="go_button">
        	    <vue-fontawesome icon="search" class="search" size="2.5" color="white"></vue-fontawesome>	
            </div>
        </router-link>	
        
		    <span id="Name_of_app">Recipes App</span>

        <div class="wrap"> 
        	<router-link :to="{name: 'vCart', params: {main_props: CART}}">
            <div class="count_block"
               ref="count_block"
               v-if="CART.length !== 0"
            > 
                <span class="count">{{CART.length}}</span>
            </div>

                <div class="choice_activate">
			        <vue-fontawesome icon="shopping-cart" class="sh_cart" size="3" color="white"></vue-fontawesome>
		        </div>
            </router-link>  
	    </div>
	</header>
</template>
<script>
    import {mapGetters} from 'vuex'

	export default {
	   name: "Header",
       computed: {
       	 ...mapGetters([
            'CART'
       	 ])
       },
	};
</script>
<style>
	header {
		height: 100px;
		width: 1592px; /* 1592px */
		position: fixed;
		top: 0;
		left: 0;
		background: black;
		z-index: 3;
	}

	header .go_button {
		height: 50px;
		width: 50px;
		position: relative;
		float: left;
		margin-left: 100px;
		margin-top: 25px;
		cursor: pointer;
		background: transparent; /* background: transparent; - будет прозрачным */
	}

	header .go_button .search {
		transition: .7s;
		-o-transition: .7s;
		-mozila-transition: .7s;
		-webkit-transition: .7s;
	}

	header .go_button .search:hover {
		text-shadow: 0 0 15px white;
	}

	header.Down_fixed {
		position: absolute;
	} 

	header #Name_of_app {
		display: flex;
		justify-content: center;
		align-items: center;
		margin-top: 14px;
		color: white;
		font-size: 48px;
		font-family: 'Seaweed Script', cursive;
	}

	header .count_block {
		font-size: 40px;
		font-family: 'Ruluko', sans-serif;
		position: relative;
		float: right;
		margin-right: 152px;
		background: #EBFF05;
		z-index: 2;
		margin-top: -67px;
		border-radius: 25px;
	    height: 40px;
	    width: 40px;
	    cursor: pointer;
	    transition: .9s;
	    -o-transition: .9s;
	    -mozila-transition: .9s;
	    -webkit-transition: .9s;  
	}

	header .count_block:hover {
		opacity: .7;
	}

	header .count_block .count {
		display: flex;
		justify-content: center;
		margin-top: -5px;
	}

	header .choice_activate {
       position: relative;
       float: right;
       margin-top: -32px;
       cursor: pointer;  
	}

	header .choice_activate .sh_cart {
		position: relative;
		float: right;
		margin-right: 175px;
		margin-top: -20px;
		transition: .8s;
		-o-transition: .8s;
		-mozila-transition: .8s;
		-webkit-transition: .8s;
	}

	header .choice_activate .sh_cart:hover {
		text-shadow: 0 0 20px white;
	}
</style>