//Question 4
//Create a function to add a new box to the container.
function clickedAddBox(){
    let container = document.querySelector("#container");
    let newBox = document.createElement("div");
    newBox.classList = "box";
    newBox.textContent = container.children.length;
    newBox.addEventListener("click", clickedBoxEvent);
    // theP = document.querySelector("#container > p");
    // container.insertBefore(newBox, theP);
    container.appendChild( newBox );
  }

//Question 5
//Create a function to remove the last box from the container.
function clickedRemoveBox(){
    let container = document.querySelector("#container");

    // Get the first box with the "box" class within the container
    //let lastAddedBox = container.querySelector("div.box");
    let lastAddedBox = container.lastElementChild;

    lastAddedBox.remove();
}
function clickedBoxToRemove(){
  console.log("The container was deleted");
  let container = document.querySelector("#container");
  let addedbox = container.querySelector("div.box");
  //container.remove(addedbox);
}

function clickedBoxEvent(event){
    //let boxes = document.getElementsByClassName(".box")
    let boxThatWasClicked = event.target;
    boxThatWasClicked.remove();
    for(i=1; i< container.children.length; i++){
        let element = container.children[i];
        element.textContent = i;
        //console.log(container.children[i]);
    }
}

//Question 6
//Add an event listener to btnAddBox that adds a new box to the container when
//clicked.
function clickedAddBoxEvent(){
    let container = document.querySelector("#container");
    let newBox = document.createElement("div");
    newBox.classList = "box";
    newBox.textContent = container.children.length;
    let allBoxes = document.getElementsByName("box");
    allBoxes.forEach(b => {
        let addBox = document.createElement("button");
        addBox.textContent="Delete";
        addBox.addEventListener("click", function(){});
        b.appendChild(addBox);
        });
    theP = document.querySelector("#container > p");
    container.insertBefore(newBox, theP);
  }

//Question 7
//Add an event listener to btnRemoveBox that removes the last box from the
//container when clicked(I remove the boxes using hover this can be changed for click event instead).
function btnRemoveBoxHover() {
    let allBoxes = document.getElementsByClassName("box");
    Array.from(allBoxes).forEach(b => {
        b.addEventListener("mouseover", function(){b.remove();});
        });
  }


//Question 8
//Add an event listener to btnToggleActive that toggles the active class on the first box
//in the container when clicked.
function btnToggle(){
    let firstBox = document.querySelector("#container > div.box");
    firstBox.classList.toggle("active");
}

//Question 9
//Add an event listener to btnReset that removes all boxes from the container and
//resets the box counter.
function btnRemoveAllBoxes() {
    let allBoxes = document.getElementsByClassName("box");
    Array.from(allBoxes).forEach(b => {
        b.remove();
        });
  }

//Question 10
//Add an event listener to each box div so that when it is clicked, it is removed from
//the container div (#container)
function btnRemoveBoxClick() {
    let container = document.querySelector("#container");
    let allBoxes = document.getElementsByClassName("box");
    Array.from(allBoxes).forEach(b => {
        //b.textContent = container.children.length;
        b.addEventListener("click", function(){b.remove();});
        });
  }

  function init(){
    let addBoxButton = document.querySelector("#btn-add-box");
    //addBoxButton.addEventListener = ("click", addBox);
    addBoxButton.addEventListener("click", clickedAddBox );
    // addBoxButton.addEventListener("click",clickedAddBoxEvent);
    let removeBoxButton = document.querySelector("#btn-remove-box");
    removeBoxButton.addEventListener("click", clickedBoxToRemove);
    //removeBoxButton.addEventListener("click",btnRemoveBoxClick);
    //removeBoxButton.addEventListener("click", clickedRemoveBox );
    let activeClass = document.querySelector("#btn-toggle-active");
    activeClass.addEventListener("click",btnToggle);
    let resetBtn = document.querySelector("#btn-reset");
    resetBtn.addEventListener("click",btnRemoveAllBoxes);
}




