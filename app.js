const textarea = document.querySelector("textarea");
const addBtn = document.getElementById("addBtn");
const list = document.getElementById("list");
const delBtn = document.getElementById("delBtn");

addBtn.addEventListener("click", function (event) {
  const memoList = document.createElement("div");
  memoList.innerHTML = textarea.value;
  memoList.innerHTML += `<button id='delBtn' type='button' >삭제</button>`;
  list.appendChild(memoList);
  textarea.value = "";

  list.addEventListener("click", function (event) {
    if (event.target.id === "delBtn") {
      event.target.parentNode.remove();
    }
  });
});
