<template>
	<div class="notification">
		<transition-group
             name="animation"
             class="transit"
             :duration="750"
		>    
		        <div class="notification__content"
                    v-for="item in notification" 
                    :key="item.id"
		        >
			        <div class="notification__content__txt">
				        <span class="txt">{{item.info}}</span>
			        </div>
			        <div class="notification__content__button">
				        <vue-fontawesome class="icon" :icon="item.icon" size="3" color="white"></vue-fontawesome>
			        </div>
		        </div>
		</transition-group>
	</div>
</template>
<script>
	export default {
		name: "notification",
	    props: {
	    	notification: {
	    		type: [Array, Object],
	    		default() {
	    			return [] 
	    		}
	    	}
	    },
	    computed: {},
	    methods: {
	    	Timeoutside() {
	    		let vm = this
                
                if(vm.notification.length) {
                   setTimeout(() => {
                      vm.notification.splice(vm.notification.length - 1, 1)
                   }, 3500)
                }
            }
	    },

	    watch: { /* И да, я теперь понял, что watch действует не только на какие-нибудь строчные значения */
	    	notification() {
	    		this.Timeoutside()
	    	}
	    },

	    mounted() { 
           this.Timeoutside()
	    }
	}
</script>
<style>
	.notification {
		position: fixed;
		top: 120px;
		right: 16px;
		z-index: 10;
		height: 85px;
		cursor: pointer;
	}

	.notification__content {
		width: 350px;
		border-radius: 5px;
		height: 85px;
		margin-bottom: 16px;
		background: green;
	}

	.notification__content__txt .txt {
		color: white;
		font-size: 20px;
		margin-left: 15px;
		position: absolute;
		font-family: 'Seaweed Script', cursive;
		margin-top: 25px;
	}

	.notification__content__button {
		border-radius: 25px;
		height: 45px;
		width: 45px;
		border: 1px solid white;
		transition: .2s;
		cursor: pointer;
		position: relative;
		float: right;
		right: 10px;
		top: 17px;
	}

	.notification__content__button .icon {
		display: flex;
		justify-content: center;
		align-items: center;
		padding-right: 0px;
		margin-top: -2px;
		transform: scale(.95);
	}

	.transit {
		display: flex;
		flex-direction: column-reverse;
	}

	.animation-enter {
		transform: scale(0);
		opacity: 0;
/* 		transform: translateX(120px);
 */ 	}

	.animation-enter-active {
		transition: all .6s ease;
 	}

	.animation-enter-to {
		opacity: 1;
		transform: scale(1);
	}

	.animation-leave {
		height: 75px;
	}

    .animation-leave-active {
    	transition: height .6s, opacity .6s, transform .6s ease;
    }

    .animation-leave-to {
    	opacity: 0;
    	height: 0px;
    	transform: scale(0);
/*     	transform: translateX(120px); 
 */    }

    .animation-move {
    	transition: transform .6s ease;
    }
</style>