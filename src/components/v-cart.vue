<template>
	<div class="lovely_recipes">

        <Notification
            :notification="notif"
        />
        
        <div class="busket_background" @click="DeleteBusket">
			<vue-fontawesome class="bitbucket" icon="bitbucket" size="4" color="white"></vue-fontawesome>
		</div>

        <p class="count_arr">{{CART.length}}/144</p>

        <router-link
            :to="{name: 'Home'}"
        >
        	<button class="back_btn">Назад</button>
        </router-link>
        
        <div class="all_recipes">
		    <v-cart-item
               v-for="(item, index) in main_props"
               :key="item.id"
               :second_props="item" 
               @DeleteItem="DeleteItem2(index)" 
		    />	
	    </div>
	</div>
</template>
<script>
    import vCartItem from './v-cart-item'
    import {mapActions, mapGetters} from 'vuex'
    import Notification from './notification.vue'

	export default {
		name: 'vCart',
		props: {
			main_props: {
				type: [Object, String, Number, Array]
			}
		},
		data() {
           return {
              notif: []
           };
		},
		computed: {
           ...mapGetters([
              'CART'
           ])
		},
		methods: {
           ...mapActions([
              'DELETE_FROM_BUSKET',
           ]),

           DeleteItem2(index) {
           	  //alert(index)
              this.DELETE_FROM_BUSKET(index)
              .then(() => {
                  let txt = 'Рецепт был удален'
                  let icon = 'times'
                  let time = Date.now().toLocaleString()

                  this.notif.push({info: txt, id: time, icon: icon})
              })
           },

           DeleteBusket() {
           	  this.CART.splice(0, 144) //Удаляем все элементы в массиве cart
           	  
              let txt = 'Все Рецепты были удалены'
              let icon = 'times'
              let time = Date.now().toLocaleString()

              this.notif.push({info: txt, id: time, icon: icon})
           },
		},
        components: {
       	   'v-cart-item': vCartItem,
       	   Notification
        }
	};
</script>
<style>
	.lovely_recipes {
		height: 25250px;
		width: 1592px; /* 1592px */
		top: 0;
		left: 0;
		position: absolute;
		background: url('../assets/background/jpg/Background.jpg');
		background-size: cover;
		background-position: center;
		z-index: 4;
	}

	.lovely_recipes .back_btn {
		height: 75px;
		width: 225px;
		border: 0;
		background: white;
		position: relative;
		font-size: 40px;
		font-family: 'Seaweed Script', cursive;
		margin-top: 40px;
		margin-right: 50px;
		float: right;
        cursor: pointer;
        transition: .9s;
        -o-transition: .9s;
        -mozila-transition: .9s;
        -webkit-transition: .9s;
	}

	.lovely_recipes .back_btn:hover {
		transform: translateX(-20px);
	}

    .lovely_recipes .busket_background {
		height: 75px;
		width: 75px;
		position: relative;
		float: left;
		margin-left: 50px;
        margin-top: 40px;
        cursor: pointer;
	}

	.lovely_recipes .busket_background .bitbucket {
	    display: flex;
	    justify-content: center;
	    align-items: center;
	    transition: .8s;
	    -o-transition: .8s;
	    -mozila-transition: .8s;
	    -webkit-transition: .8s;
	}

	.lovely_recipes .busket_background .bitbucket:hover {
		text-shadow: 0 0 20px white;
	} 
    
    .lovely_recipes .count_arr {
    	position: absolute;
    	margin-top: 50px;
    	margin-left: 715px;
    	font-size: 60px;
    	font-weight: bold;
    	font-family: 'Roboto Slab', serif;
    }

    .lovely_recipes .all_recipes {
    	width: 1592px;
    	height: 25250px;
    	position: absolute;
    	margin-top: 140px;
    	margin-left: 0;
    }

</style>