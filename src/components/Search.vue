<template>
	<div class="search_page"> 
               <Notif 
                  :notification="notif_arr"
               />

			    <div class="back_button"
                    @click="Go_back"
                >
				    <vue-fontawesome class="arrow_back" icon="arrow-left" size="2.25" color="black"></vue-fontawesome> 
			    </div> 

                <div class="search_box">
			       <input class="inpt" placeholder="Введите название рецепта" v-model="searchValue" type="text" />
			       <button
                      class="clear_button"
                      @click="clear"
			       >
			       	  <vue-fontawesome class="clear" icon="times" size="1.5" color="white"></vue-fontawesome>  
			       </button>
		           <button 
		               class="search_button"
                       @click="search"
		           >
			          Найти
		           </button>
		        </div>

		        <span class="search_result">{{searchValue}}</span>
	</div>
</template>
<script>
    import {mapGetters, mapActions} from 'vuex'
    import Notif from './notification.vue'

	export default {
		name: "Search",
	     data() {
	     	return {
                searchValue: "",
                notif_arr: []
	     	}
	     },
		methods: {
            ...mapActions([
               'GET_SEARCH_VALUE' 
            ]),

			search() {
                if(this.searchValue === "") {
                   //this.$router.reload()

                    let txt = 'Вы не ввели имя блюда' 
                    let icon = 'times'
                    let time = Date.now().toLocaleString()

                    this.notif_arr.push({info: txt, id: time, icon: icon})

                } else {
                    this.GET_SEARCH_VALUE(this.searchValue) // А это уже не Promise

                    this.$router.push({name: "Home"}) //JS аналог - window.location.href = '/'
               
                    //console.log(value
                }
               //console.log(this.searchValue)
			},

			clear() {
				this.searchValue = ''
			},

            Go_back() {
                this.$router.push({name: "Home"})
            }
		},

        computed: {
            ...mapGetters([
               "SEARCH_VALUE",
               "GET_PRODUCTS_FROM_API"
            ])
        },

        components: {
            Notif
        }

	}
</script>
<style>
	.search_page {
		height: 757px;
		width: 1600px;
		position: absolute;
		top: 0;
		left: 0;
		z-index: 6;
		background: black;
	}

   .search_page .back_button {
    	height: 50px;
    	width: 50px;
    	background: white;
    	position: relative;
    	margin-left: 775px;
    	margin-top: 25px; 
    	cursor: pointer;
    	border-radius: 35px;
    	transition: .9s;
    	-o-transition: .9s;
    	-mozila-transition: .9s;
    	-webkit-transition: .9s;
    }

    .search_page .back_button:hover {
    	box-shadow: 0 0 20px white;
    }

    .search_page .back_button .arrow_back {
    	padding-top: 7.5px;
    	display: flex;
    	justify-content: center;
    	align-items: center;
    	transition: .8s;
    	-o-transition: .8s;
    	-webkit-transition: .8s;
    	-mozila-transition: .8s;
    }

    .search_page .back_button .arrow_back:hover {
    	transform: translateX(-7.5px);
    }
    
    .search_page .search_box {
        height: 80px;
        width: 900px;
        position: absolute;
        margin-top: 150px;
        margin-left: 325px;
        background: transparent;
    }

    .search_page .search_box .inpt {
    	height: 76px;
    	width: 700px;
    	border: 1px solid white;
    	font-size: 35px;
    	font-family: 'Flavors', cursive;
    	font-weight: normal;
    }

    .search_page .search_box .search_button {
    	border: 0;
    	height: 80px;
    	width: 150px;
    	float: right;
    	cursor: pointer;
    	position: relative;
    	background: black;
    	color: white;
    	transition: .8s;
    	-o-transition: .8s;
    	-mozila-transition: .8s;
    	-webkit-transition: .8s;
    }

    .search_page .search_box .search_button:hover {
    	background: white;
    	color: black;
    }

    .search_page .search_result {
    	font-size: 25px;
    	font-family: 'Flavors', cursive;
    	font-weight: bold;
    	display: flex;
    	justify-content: center;
    	margin-top: 300px;
    	color: white;
    }

    .search_page .search_box .clear_button {
    	height: 40px;
    	width: 40px;
    	top: 20px;
    	position: absolute;
    	left: 650px;
    	background: black; 
        border-radius: 20px;
        cursor: pointer;
        border: 0;
        transition: .8s;
        -o-transition: .8s;
        -mozila-transition: .8s;
        -webkit-transition: .8s;
    }

    .search_page .search_box .clear_button:hover {
    	transform: scale(.9);
    }
</style>