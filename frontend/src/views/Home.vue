<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <h2> this is home page</h2>
      <form @submit.prevent="setUrl">
      <input type="text" v-model="searchBy.url" placeholder="Enter an URL" autofocus/>
      <input type="checkbox" v-model="searchBy.isChecked" @change="setUrl" checked/>
      <button type="primary" @click="setUrl">Submit</button>
    </form>
    <h2 v-if="msg">{{msg}}</h2>
    <h2 v-if="url">{{url}}</h2>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import debounce from "lodash.debounce";


export default {
  name: "home",
  components: {},
  data() {
    return {
      searchBy: {
        url: "",
        isChecked: true
      },
    }
  },
  methods: {
    setUrl: debounce(function() {
      this.searchBy.url = this.searchBy.url.toLowerCase();      
      var searchBy = JSON.parse(JSON.stringify(this.searchBy));
      console.log('var searchBy', searchBy);
      this.$store.dispatch({ type: "searchBy", searchBy }).then(url => {});
    }, 2000),
    redirectUrl(url) {
      console.log('redirectUrl-');

      this.$router.push(url);
    }
  },
  computed: {
    url() {
      console.log('gamesForBabyHomeDisplay in home-');
      return this.$store.getters.setUrl;
            // this.$router.push(this.$store.getters.setUrl);
            // if (this.$store.getters.setUrl) window.location.href = /a;
            // if (this.$store.getters.setUrl) this.$router.go('/a')

      // return this.redirectUrl(this.$store.getters.setUrl);
    },
    msg() {
            console.log('gamesForBassssssbyHomeDisplay in home-');

      return this.$store.getters.setMsg;
    },
  },
};
</script>
