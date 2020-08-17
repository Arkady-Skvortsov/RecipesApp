<template>
	<div class="main_select">
		<div class="up_select">
			<p 
              class="title"
              @click="Toggle"
			>{{selected}}</p>
		</div> 
		<div class="down_select"
           v-if="AreVisible"
		> 
			<div
			  class="inside_select"
			  v-for="item in options"
			  :key="item.id"
			  :class="item.class"
			  @click="GetParamsUp(item)"
			>
				<div class="img_inside_select">
					<img
					   :class="item.img_class" 
					   :src="require('../assets/icons/' + item.img_icon)" 
					/>
				</div>

				<span
                   class="text_inside_select"
				>{{item.name}}</span>
			</div> 
		</div>
	</div>
</template>
<script>
	export default {
		name: "vSelect",
		data() {
			return {
				AreVisible: false,
			}
		},
		props: {
			options: {
				type: [Array, Object],
                default() {
                    return {}
                }
			},

			selected: {
                type: String,
                default() {
                    return ""
                }
            }
		},
		methods: {
			Toggle() { //Чтобы создать в Vue.js toggle с помощью v-if, мы пишем вот так -> this.AreVisible = !this.AreVisible
				this.AreVisible = true
			},

			Hide_select() {
				this.AreVisible = false
			},

			GetParamsUp(item) {
				this.$emit('GetParams', item)
			}
		},

		created() {
           document.addEventListener('click', this.Hide_select.bind(this), true)
		},

		beforeDestroy() {
           document.removeEventListener('click', this.Hide_select)
		}
	}
</script>
<style>
	.main_select {
		height: 505px;
		width: 300px;
		margin-top: 25px;
		margin-left: 75px;
		position: absolute;
		cursor: pointer;
		display: block;
	}
    
    .main_select .up_select {
    	height: 45px;
    	width: 300px;
    	position: absolute;
    	margin-top: 0;
    	margin-left: -1px;
    	border-radius: 25px;
    	background: white;
    	cursor: pointer;
        border: 2px solid black;
        box-shadow: 0 5px 4px rgba(0, 0, 0, .25);
        transition: .8s;
        -o-transition: .8s;
        -webkit-transition: .8s;
        -mozila-transition: .8s;
    }	

    .main_select .up_select:hover {
    	box-shadow: 0 5px 4px rgba(0, 0, 0, .75);
    }

    .main_select .up_select .title {
    	font-size: 25px;
    	font-weight: normal;
    	font-family: 'Roboto', sans-serif;
    	display: flex;
    	justify-content: center;
    	align-items: center;
    	margin-top: 7.5px;
    }

    .main_select .down_select {
    	height: 465px;
    	width: 300px;
    	position: absolute;
    	margin-top: 55px;
    	background: black;
    	border: 1px solid white;
    	margin-left: -1px;
    	border-radius: 25px;
    	z-index: 2;
    }

    .main_select .down_select .inside_select {
    	height: 50px;
    	width: 300px;
    	background: black;
    	margin-top: 0;
    	margin-left: 0;
    	position: relative;
    	display: inline-block;
    	cursor: pointer;
    	border: 1px solid white;
    	transition: .8s;
    	-o-transition: .8s;
    	-webkit-transition: .8s;
    	-mozila-transition: .8s;
    }

    .main_select .down_select .inside_select.first {
    	border-top-left-radius: 25px;
    	border-top-right-radius: 25px;
    }

    .main_select .down_select .inside_select.last {
    	border-bottom-left-radius: 25px;
    	border-bottom-right-radius: 25px;
    }

    .main_select .down_select .inside_select .img_inside_select {
    	position: absolute;
    	margin-top: 5px;
    	margin-left: 20px;
    	border: 1px solid white;
    	border-radius: 25px;
    	height: 40px;
    	width: 40px;
    }

    .main_select .down_select .inside_select .img_inside_select img {
    	max-height: 40px;
    	max-width: 40px;
    	border-radius: 25px;
    	transition: .8s;
    	-o-transition: .8s;
    	-mozila-transition: .8s;
    	-webkit-transition: .8s;
    }

    .main_select .down_select .inside_select .img_inside_select img:hover {
    	transform: scale(.8);
    }

    .main_select .down_select .inside_select .img_inside_select img.first_img {
    	max-width: 40px;
    	min-height: 40px;
    }

    .main_select .down_select .inside_select .img_inside_select img.second_img {
    	max-width: 40px;
    	min-height: 40px;
    }

    .main_select .down_select .inside_select .img_inside_select img.third_img {
    	max-width: 40px;
    	min-height: 40px;
    }

    .main_select .down_select .inside_select .img_inside_select img.fourth_img {
    	max-width: 40px;
    	min-height: 40px;
    }

    .main_select .down_select .inside_select .img_inside_select img.fifth_img {
    	max-width: 40px;
    	min-height: 40px;
    }

    .main_select .down_select .inside_select .img_inside_select img.six_img {
    	min-width: 40px;
    	min-height: 40px;
    }

    .main_select .down_select .inside_select .img_inside_select img.seventh_img {
    	max-width: 40px;
    	min-height: 40px;
    }

    .main_select .down_select .inside_select .img_inside_select img.eight_img {
    	max-width: 40px;
    	min-height: 40px;
    }

    .main_select .down_select .inside_select .img_inside_select img.nine_img {
    	max-width: 40px;
    	min-height: 40px;
    }

    .main_select .down_select .inside_select .text_inside_select {
    	font-size: 25px;
    	font-family: 'Roboto', sans-serif;
    	color: white;
    	display: flex;
    	justify-content: center;
    	align-items: center;
    	margin-top: 10px;
    	transition: .7s;
    	-o-transition: .7s;
    	-mozila-transition: .7s;
    	-webkit-transition: .7s;
    }

    .main_select .down_select .inside_select .text_inside_select:hover {
        text-shadow: 0 0 10px white;
    }
</style>