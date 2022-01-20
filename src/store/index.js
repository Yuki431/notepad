import Vue from "vue"
import Vuex from "vuex"
import createPersistedState from "vuex-persistedstate"

Vue.use(Vuex)

export default new Vuex.Store({
    plugins: [createPersistedState()],
    state: {
        memos: [
            {id: 1, body: "サンプルのメモです"}
        ],
        update(state, data) {
            let x = state.memos.find(memo => memo.id == data.id);
            x.body - data.body;
        }
    },
    mutations: {
        save(state, memo) {
            var max = state.memos[state.memos.length - 1].id;
            memo.id = max + 1;
            state.memos.push(memo);
        },
        update(state, data) {
            let x = state.memos.find(memo => memo.id == data.id);
            x.body = data.body;
        }
    }
})