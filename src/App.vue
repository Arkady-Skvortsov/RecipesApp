<template>
  <div id="app">
     <Header />
     <!-- :prod="newObj" тут уже не понадобится привязка, у нас есть Vuex-->
     
     <keep-alive>  
       <router-view />
     </keep-alive>
  </div>
</template>
<script>
  import Header from '@/components/Header'

  export default {
    components: {Header}
  };
</script>
<style>
  @import url('https://fonts.googleapis.com/css2?family=Seaweed+Script&display=swap'); /* Seaweed Script */
  @import url('https://fonts.googleapis.com/css2?family=Fjalla+One&display=swap'); /* Fjalla One */
  @import url('https://fonts.googleapis.com/css2?family=Flavors&display=swap'); /* Flavors */
  @import url('https://fonts.googleapis.com/css2?family=Ruluko&display=swap'); /* Ruluko */
  @import url('https://fonts.googleapis.com/css2?family=Flamenco:wght@300&display=swap'); /* Flamenko */
  @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap'); /* Roboto */


  ::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: #f1f1f1; 
}

::-webkit-scrollbar-thumb {
  background: #888; 
}

::-webkit-scrollbar-thumb:hover {
  background: #555; 
} /* Для scrollbar */

</style>
