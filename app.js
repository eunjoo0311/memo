const textarea = document.querySelector("textarea");
const addBtn = document.getElementById("addBtn");
const list = document.getElementById("list");
const delBtn = document.getElementById("delBtn");

addBtn.addEventListener("click", function (event) {
  const memoList = document.createElement("li");
  memoList.innerHTML = textarea.value;
  memoList.innerHTML += "<button id='delBtn' type='button'>삭제</button>";
  list.appendChild(memoList);
  textarea.value = "";
});

delBtn.addEventListener("click", function (event) {
  list.removeChild(""); /// js 했던거 찾아보기
});
