import {createStore} from "vuex";

export default createStore({
    state: {
        likes: 0,
    },
    getters: {
        plusOneLike(state) {
            return state.likes + 1;
        }
    },
    mutations: {
        incrementLikes(state) {
            state.likes += 1;
        },
        decrementLikes(state) {
            state.likes -= 1;
        }
    },
})