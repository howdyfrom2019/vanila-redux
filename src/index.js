import { legacy_createStore } from "redux";

const form = document.querySelector("form");
const input = document.querySelector("input");
const ul = document.querySelector("ul");

const ADD_TODO = 0;
const DELETE_TODO = 1;

const reducer = (state = [], action) => {
    switch (action.type) {
        case ADD_TODO:
            return [...state, { text: action.text, id: Date.now() }];
        case DELETE_TODO:
            return state.filter(v => v.id !== Number(action.id));
        default:
            return state;
    }
};

const deleteToDo = (e) => {
    const id = Number(e.target.parentNode.id);
    store.dispatch({ type: DELETE_TODO, id });
}

const onSubmit = (e) => {
    e.preventDefault();
    const todo = input.value;

    input.value = "";
    addToDo(todo);
    // store.dispatch({ type: ADD_TODO, text: todo });
}

const store = legacy_createStore(reducer);

store.subscribe(() => console.log(store.getState()));

const paintToDos = () => {
    const toDos = store.getState();
    ul.innerHTML = "";
    toDos.forEach((toDo) => {
        const li = document.createElement("li");
        const btn = document.createElement("button");

        btn.innerText ="DEL";
        btn.style.marginLeft = "24px";
        btn.addEventListener("click", deleteToDo);
        li.id = toDo.id;
        li.innerText = toDo.text;
        li.appendChild(btn);
        ul.appendChild(li);
    })
}
store.subscribe(paintToDos);

const addToDo = (text) => {
    store.dispatch({ type: ADD_TODO, text: text });
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