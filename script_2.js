let toDoArray = [];

renderToDoList();

function renderToDoList() {

  let toDoHTML = '';
  for (i = 0; i < toDoArray.length; i++) {

    let toDO = toDoArray[i];
    let HTML = `<p> ${toDO} </p>`
    toDoHTML += HTML;
  }
  document.querySelector(".list-element-js").innerHTML = toDoHTML;
}



function addToList() {

  let inputElement = document.querySelector(".input-js");
  let inputValue = inputElement.value

  toDoArray.push(inputValue);
  inputElement.value = '';
  renderToDoList();
  console.log("version3");

}