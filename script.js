let toDoArray = [{
  toDoName  : 'cooking',
  toDodate  : '23-12-2000'
}];

renderToDoList();

function renderToDoList() {

  let toDoHTML = '';
  for (i = 0; i < toDoArray.length; i++) {

    let toDO = toDoArray[i];
    // let toDoName = toDO.toDoName;
    // let toDodate = toDO.toDodate

    const {toDoName , toDodate} = toDO // shortcut for above lines (destructuring)

    let HTML = `<p> ${toDoName}</p> <p> ${toDodate}</p>
                <button class= "delete-btn-css " onclick="deleteList(${i})">Delete</button>`
    toDoHTML += HTML;
  }
  document.querySelector(".list-element-js").innerHTML = toDoHTML;
  
}

function addToList() {

  let inputElement  = document.querySelector(".input-js");
  let inputDate     = document.querySelector(".date-js")
  let toDoName = inputElement.value
  let toDodate   = inputDate.value

//   toDoArray.push(
//     {
//       toDoName : toDoName,  
//       toDodate : toDodate
//    }
//    (if property and value are same then we can use 
//     shorthand property as below)
// );

toDoArray.push(
   {
    toDoName,
    toDodate 
 }

);

  inputElement.value = '';
  inputDate.value = '';
  renderToDoList();

}

function deleteList(i){
  toDoArray.splice(i , 1);
  renderToDoList();
}