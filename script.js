var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var li = document.querySelectorAll("li");
var buttons = document.getElementsByClassName("deletebutton");

function inputLength() {
	return input.value.length;
}

function removeParentWithDelete(e) {
	e.target.parentNode.remove(); //or this.remove();
}

function toggleDoneOnClick(e) {
	e.target.classList.toggle("done");
}

for (var i=0; i < li.length; i++) {
	buttons[i].addEventListener("click", removeParentWithDelete);
}

for (var i=0; i < li.length; i++) {
	ul.addEventListener("click", toggleDoneOnClick);
}

function createListElement() {
	var deleteButton = document.createElement("BUTTON");
	deleteButton.innerHTML = "Delete";
	deleteButton.onclick = removeParentWithDelete;

	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	li.appendChild(deleteButton);
	ul.appendChild(li);
	deleteButton.setAttribute("class","buttonprop");
	input.value = "";
}


function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);
