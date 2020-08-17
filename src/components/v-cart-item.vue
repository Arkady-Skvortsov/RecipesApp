<template>
	<div class="product_block">
		<div class="img_of_product">
			<img 
			    v-if="second_props.img_f"
			    :class="second_props.special_icon_class"
			    :src="require('../assets/Products/' + second_props.img_f)" 
			/>
			<div class="star_block" @click="DeleteItem">
				<vue-fontawesome class="Star" icon="star" size="4.5" color="gold"></vue-fontawesome>
			</div>
		</div>
        
		<p class="name_product" @click="Go_to_R">{{second_props.name_f}}</p>

		<div class="class_of_product_wrapper">
			<div class="type_recipe_txt"
               v-if="isExisting"
			>
				<p>{{second_props.class_of_product}}</p>
			</div>

			<div class="type_recipe_img" @mouseover="Show_Class" @mouseout="Hide_Class">
				<img
				  v-if="second_props.special_icon_img"
				  :src="require('../assets/icons/' + second_props.special_icon_img)"  
				/>
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		name: 'v-cart-item',
		props: {
			second_props: {
				type: [Object, String, Number, Array]
			}
		},
		data() {
          return {
          	isExisting: false
          } 
		},
		methods: {
			DeleteItem() {
				this.$emit('DeleteItem')
			},

			Show_Class() {
				this.isExisting = true
			},

			Hide_Class() {
                this.isExisting = false
 			},
 			
 			Go_to_R() {
 				this.$router.push({name: "Recipe", query: {recipe: this.second_props.article}})
 			}
		}
	}
</script>
<style>
	.product_block	{
		height: 150px;
		width: 1592px;
		background: black;
		display: inline-block;
		margin-left: 0;
		margin-top: 25px;
		position: relative;
	}

	.product_block .img_of_product {
		height: 120px;
		width: 120px;
		position: absolute;
		margin-top: 15px;
		margin-left: 50px;
		border-radius: 65px;
		cursor: pointer;
	}
    
    .product_block .img_of_product img {
    	height: 120px;
    	max-width: 120px;
    	border-radius: 65px;
    	position: absolute;
    	top: 0;
    	left: 0;
    }

    .product_block .img_of_product .cart_icon_class {
        max-height: 120px;
        min-width: 120px;
	}

	.product_block .img_of_product .star_block {
		height: 120px;
		width: 120px;
		position: absolute;
		margin-top: 0;
		border-radius: 65px;
		margin-left: -2px;
		opacity: 0;
        background: rgba(0, 0, 0, .7);
        border: 2px solid yellow;
        transition: .8s;
        -o-transition: .8s;
        -mozila-transition: .8s;
        -webkit-transition: .8s;        
	}

	.product_block .img_of_product .star_block:hover {
		opacity: 1;
	}

	/* keyframes show_star {
		0% {
          opacity: .2;
		}

		25% {
		  opacity: .4;	
		}

		50% {
          opacity: .6;
		}

		75% {
		  opacity: .8;	
		}

		100% {
		  opacity: 1;	
		}
	} */

	.product_block .img_of_product .star_block .Star {
		position: absolute;
		margin-top: 25px;
		margin-left: 30px;
		transition: .8s;
		-o-transition: .8s;
		-mozila-transition: .8s;
		-webkit-transition: .8s;
	}

	.product_block .img_of_product .star_block .Star:hover {
		transform: rotate(217deg);
	}

	.product_block .name_product {
		font-size: 45px;
		font-family: 'Fjalla One', sans-serif;
		color: white;
		display: flex;
		justify-content: center;
		align-items: center;
		margin-top: 45px;
		cursor: pointer;
		transition: .5s;
		-o-transition: .5s;
		-mozila-transition: .5s;
		-webkit-transition: .5s;
	}

	.product_block .name_product:hover {
		text-shadow: 0 0 15px white;
	}

	.product_block .class_of_product_wrapper {
		height: 75px;
		width: 240px;
		float: right;
		position: relative;
		margin-top: -105px;
		margin-right: 50px;
	}

	.product_block .class_of_product_wrapper .type_recipe_txt {
		height: 35px;
		width: 150px;
        background: white;
        position: absolute;
        margin-top: 20px;
        margin-left: 0;
	}

	.product_block .class_of_product_wrapper .type_recipe_txt p {
		font-size: 20px;
		font-family: 'Fjalla One', sans-serif;
        position: absolute;
        top: -13px;
	}

	.product_block .class_of_product_wrapper .type_recipe_img {
		height: 75px;
		width: 75px;
		border-radius: 45px;
		border: 1px solid white;
		position: relative;
		float: right;
		margin-right: 0;
		margin-top: -1.5px;
		cursor: pointer;
		transition: .8s;
		-o-transition: .8s;
		-mozila-transition: .8s;
		-webkit-transition: .8s;
	}

	.product_block .class_of_product_wrapper .type_recipe_img:hover {
		transform: scale(.7);
	}

	.product_block .class_of_product_wrapper .type_recipe_img img {
		height: 75px;
		width: 75px;
		border-radius: 45px;
		position: absolute;
		top: 0;
		left: 0;
	}
</style>