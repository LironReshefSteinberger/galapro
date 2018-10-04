import Vue from 'vue'
import Vuex from 'vuex'

import UrlService from './services/UrlService.js'


Vue.use(Vuex)


export default new Vuex.Store({
  state: {
        // urlLoading: false,
        url: null,  
        msg: null,
        searchBy: {
          url: '',
          isChecked: true
        },
        urlSocket: null,
    },
    mutations: {
        // setUrlLoading(state, { isLoading }) {
        //     state.urlLoading = isLoading;
        // },
        setUrl(state, { url }) {
          console.log('mutation state.url', url);
          state.url = url;
          console.log('mutation setUrl state.url', state.url);
        },
        setSearch(state, { searchBy }) {
            console.log('mutation setSearch', searchBy);
            state.searchBy = searchBy;
            console.log('mutation setSearch state.searchBy', state.searchBy);
        },
        setMsg(state, { msg }) {
          console.log('mutation state.msg', msg);
          state.msg = msg;
          console.log('mutation setMsg state.msg', state.msg);
        },
        setUrlSocket(state, { url }) {
            console.log('mutation state.urlSocket', url);
            state.urlSocket = url;
            console.log('mutation setUrl state.urlSocket', state.urlSocket);
        },
    },
    getters: {
        setUrl(state) {
          console.log('setUrl');
            return state.url;
        },
        setUrlSocket(state) {
          console.log('setUrlSocket');
            return state.urlSocket;
        },
        // urlLoading(state) {
        //     return state.urlLoading
        // },
        setMsg(state) {
          console.log('setMsg', state.msg);
          return state.msg;
      },
    },
    actions: {
        openSocket(context, {searchBy}) {
            console.log('in openSocket in actions');
            return UrlService.query(searchBy)
            .then((data) => {
                if (data.url) {
                  let url = data.url;
                  context.commit({type: 'setUrlSocket', url});
              
                }
            })
        },
        searchBy(context, { searchBy }) {
            // context.commit({ type: 'setUrlLoading', isLoading: true })
            context.commit({ type: 'setSearch', searchBy })
            // console.log('searchBy in store: searchBy', searchBy)
            return UrlService.query(searchBy)
                .then((data) => {
                    if (data.url) {
                      let url = data.url;
                      context.commit({ type: 'setUrl', url }) 
                    } else if (data.msg) {
                      let msg = data.msg;
                      context.commit({ type: 'setMsg', msg })
                    }

                    // console.log('url from server after searchBy in store', url);
                })
                // .catch(err =>{
                //     context.commit({ type: 'setUrlLoading', isLoading: false })
                // })
                .finally(() => {
                    // context.commit({ type: 'setUrlLoading', isLoading: false });
                })
        },

        // urlById(context, { url }) {
        //     context.commit({ type: 'setUrlLoading', isLoading: true })
        //     Promise.all(
        //         url.map(urlId => {
        //             return UrlService.getUrlById(urlId)
        //         })
        //     )
        //     .then(url =>{
        //         // console.log('url', url);
        //         context.commit({ type: 'loggedUserUrl', url })
        //         context.commit({ type: 'setUrlLoading', isLoading: false })
        //     })
        // }
    }
});





