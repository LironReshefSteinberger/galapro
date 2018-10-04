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
    <h2 v-if="urlSocket">user URL sent by socket: {{urlSocket}}</h2>
    <h2 v-if="newUrl">new URL sent by socket: {{newUrl}}</h2>
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
      // newUrl: null,
    }
  },
  methods: {
    setUrl: debounce(function() {
      this.searchBy.url = this.searchBy.url.toLowerCase();      
      var searchBy = JSON.parse(JSON.stringify(this.searchBy));
      console.log('var searchBy', searchBy);
      if (this.searchBy.url && !this.searchBy.isChecked) this.$socket.emit('openSocket');
      this.$store.dispatch({ type: "searchBy", searchBy }).then(url => {});
    }, 2000),
    redirectUrl(url) {
      console.log('redirectUrl-');

      this.$router.push(url);
    }
  },
  computed: {
    url() {
      return this.$store.getters.setUrl;
            // this.$router.push(this.$store.getters.setUrl);
            // if (this.$store.getters.setUrl) window.location.href = /a;
            // if (this.$store.getters.setUrl) this.$router.go('/a')

      // return this.redirectUrl(this.$store.getters.setUrl);
    },
    urlSocket() {
      return this.$store.getters.setUrlSocket;
    },
    newUrl() {
      this.$socket.on('sendUserUrl', function(data){
          console.log('sendUserUrl in home cpm', data);
          return data;
      });
    },
    msg() {
      return this.$store.getters.setMsg;
    },
    // msg() {
    //   return this.$store.getters.setMsg;
    // },
  },
  sockets: {
    openSocket() {
      this.$store.dispatch({ type: "openSocket", searchBy: this.searchBy });
      
    }
  }
};
</script>
