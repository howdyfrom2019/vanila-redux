import { legacy_createStore } from "redux";

const plus = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

/**
 * @reducer: data를 수정하기 위한 목적의 함수.
 * @store.dispatch: action을 줄 수 있음.
 */

const countModifier = (count = 0, action) => {
    if (action.type === "minus") {
        return --count;
    } else if (action.type === "plus") {
        return ++count;
    }
    return count;
};

const countStore = legacy_createStore(countModifier);

const onChange = () => {
    number.innerText = countStore.getState();
}

countStore.subscribe(onChange);
plus.addEventListener("click", () => countStore.dispatch({ type: "plus" }));
minus.addEventListener("click", () => countStore.dispatch({ type: "minus" }));
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