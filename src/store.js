import { legacy_createStore } from "redux";
import {configureStore, createAction, createReducer, createSlice} from "@reduxjs/toolkit";

// const ADD = 0;
// const DELETE = 1;

// const addToDo = createAction("ADD");
// const deleteTodo = createAction("DELETE");

// const addToDo = (text) => {
//     return {
//         type: ADD,
//         text
//     };
// };
//
// const deleteToDo = (id) => {
//     return {
//         type: DELETE,
//         id
//     };
// };

// const reducer = (state = [], action) => {
//     switch (action.type) {
//         case addToDo.type:
//             return [{ text: action.payload, id: Date.now() }, ...state];
//         case deleteTodo.type:
//             console.log(state, action.payload);
//             return state.filter(toDo => toDo.id !== action.payload);
//         default:
//             return state;
//     }
// };

// const reducer = createReducer([], {
//     [addToDo]: (state, action) => {state.push({ text: action.payload, id: Date.now() })},
//     [deleteTodo]: (state, action) => { return state.filter(toDo => toDo.id !== action.payload) }
// })

const toDo = createSlice({
  name: "toDosReducer",
  initialState: [],
  reducers: {
    add: (state, action) => {state.push({ text: action.payload, id: Date.now() })},
    remove: (state, action) => { return state.filter(toDo => toDo.id !== action.payload) }
}
})

const store = configureStore({ reducer: toDo.reducer });
// const store = legacy_createStore(reducer);

export const { add, remove } = toDo.actions
export default store;