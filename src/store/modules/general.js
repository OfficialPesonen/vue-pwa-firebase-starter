export default {
    state: {
        loading: true,
        prevRoute: "/",
    },
    getters: {
        loading: state => {
            return state.app;
        },
        prevRoute: state => {
            return state.prevRoute;
        },
    },
    mutations: {
        setLoading(state, value) {
            state.loading = value;
        },
        setPrevRoute(state, value) {
            state.prevRoute = value;
        },
    },
    actions: {}
};