import todoreducer from "./TodoSlice";

const { configureStore } = require("@reduxjs/toolkit");
const Store = configureStore({
    reducer: {
        todosData: todoreducer
    }
})


export default Store;