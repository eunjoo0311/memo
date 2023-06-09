const textarea = document.querySelector("textarea");
const addBtn = document.getElementById("addBtn");
const list = document.getElementById("list");

// localStorage에 저장된 데이터가 있는지 확인하고, 있으면 리스트를 생성
if (localStorage.getItem("memo")) {
  list.innerHTML = localStorage.getItem("memo");
}

addBtn.addEventListener("click", function (event) {
  const memoList = document.createElement("div");
  memoList.innerHTML = textarea.value;
  memoList.innerHTML += `<button id='delBtn' type='button' >삭제</button>`;
  list.prepend(memoList);
  textarea.value = "";

  localStorage.setItem("memo", list.innerHTML);

  const delBtn = memoList.querySelector("#delBtn");
  delBtn.addEventListener("click", function (event) {
    event.target.parentNode.remove();
    localStorage.setItem("memo", list.innerHTML);
  });
});

// 삭제 기능
list.addEventListener("click", function (event) {
  if (event.target.id === "delBtn") {
    event.target.parentNode.remove();
    localStorage.setItem("memo", list.innerHTML);
  }
});
