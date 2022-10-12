const form = document.querySelector("form");
const input = document.querySelector("input");
const ul = document.querySelector("ul");

const createToDo = (todo) => {
    const li = document.createElement("li");
    li.innerText = todo;
    ul.appendChild(li);
}

const onSubmit = (e) => {
    e.preventDefault();
    const todo = input.value;

    input.value = "";
    createToDo(todo);
}

form.addEventListener("submit", onSubmit);
// import { legacy_createStore } from "redux";
//
// const plus = document.getElementById("add");
// const minus = document.getElementById("minus");
// const number = document.querySelector("span");
//
// /**
//  * @reducer: data를 수정하기 위한 목적의 함수.
//  * @store.dispatch: action을 줄 수 있음.
//  */
//
// const ADD = "plus";
// const MINUS = "minus";
//
// const countModifier = (count = 0, action) => {
//     switch (action.type) {
//         case ADD:
//             return ++count;
//         case MINUS:
//             return --count;
//         default:
//             return count;
//     }
// };
//
// const countStore = legacy_createStore(countModifier);
//
// const onChange = () => {
//     number.innerText = countStore.getState();
// }
//
// countStore.subscribe(onChange);
// plus.addEventListener("click", () => countStore.dispatch({ type: ADD }));
// minus.addEventListener("click", () => countStore.dispatch({ type: MINUS }));
// let count = 0;
// number.innerText = count;

// const updateText = () => {
//     number.innerText = count;
// }

// const handleAdd = () => {
//     count++;
//     updateText();
// }
//
// const handleMinus = () => {
//     count--;
//     updateText();
// }
// plus.addEventListener("click", handleAdd);
// minus.addEventListener("click", handleMinus);