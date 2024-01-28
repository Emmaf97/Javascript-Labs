
function init(){
    const p1 = document.querySelector("#para1");
    const p2 = document.querySelector("#para2");
    const btn1 = document.querySelector("#btn1");
    const btn2 = document.querySelector("#btn2");
    p1.addEventListener("click",changeParagraphColor);
    p1.addEventListener("click", function(){clickHighlight(p1)});
    p1.addEventListener("mouseover", function(){hoverHighlight(p1)})
    p1.addEventListener("mouseout", function(){hoverHighlight(p1)})
    p2.addEventListener("click",changeParagraphColor);
    btn1.addEventListener("click", function(){clickedBtn1(p1)});
    //btn2.addEventListener("click", function(){clickedBtn2(p2)});
    btn2.addEventListener("click",deleteParagraph);
    btn1.addEventListener("click",addParagraph);
}
//Create a function to change the text color of a paragraph.
function changeParagraphColor(){
    let p1 = document.querySelector("#para1");
    p1.style.color = "red";
}

//5. How can you change the text color of para1 when btn1 is clicked?
//Hint: Use the addEventListener() method to add a click event listener to btn1, and
//call the changeColor() function inside the event listener function, passing para1 as
//the argument.
function clickedBtn1V1(){
    //const element = event.target;
    let p1 = document.querySelector("#para1");
    p1.style.color = "red";
}
function clickedBtn1(element){
    //const element = event.target;
    element.classList.toggle("blue-font");
    //element.style.color = "red";
}

//6. How can you change the text color of para2 when btn2 is clicked?
//Hint: Use the addEventListener() method to add a click event listener to btn2, and
//call the changeColor() function inside the event listener function, passing para2 as
//the argument.
function clickedBtn2(element){
    element.classList.toggle("blue-font");
}

//7. How can you create a new paragraph element and add it to the container?
//Hint: Use the createElement() method to create a new p element, set its text content
//using the textContent property, and append it to the container using the
//appendChild() method.
function addParagraph(){
    let container = document.querySelector("#container");
    //let p2 = document.querySelector("#para2");
    let newP = document.createElement("p");
    newP.textContent = "Testing Testing 1 2"
    container.append(newP);
}

//8. How can you change the background color of para1 to yellow when it is clicked?
//Hint: Use the addEventListener() method to add a click event listener to para1, and
//set its backgroundColor property to "yellow" inside the event listener function.
function clickHighlight(element){
    element.classList.toggle("highlight");
}

//9. How can you add a "highlight" class to para2 when the user hovers over it, and
//remove the class when the user stops hovering?
//Hint: Use the classList property to add the "highlight" class to para2 when the
//mouseover event is triggered, and remove the class when the mouseout event is
//triggered.
function hoverHighlight(element){
    element.classList.toggle("highlight");
}

//10. How can you add a "Delete" button after each paragraph that removes the
//paragraph from the DOM when clicked?
//Hint: Use the querySelectorAll() method to select all p elements on the page, and
//loop through them using the forEach() method. Inside the loop, create a new button
//element, set its text content using the textContent property, append it to the p
//element using the appendChild() method, and add a click event listener to the button
//that removes the p element from the DOM using the remove() method.

function deleteParagraph(){
    let allPs = document.querySelectorAll("p");
    allPs.forEach(p => {
    let delBtn = document.createElement("button");
    delBtn.textContent="Delete";
    delBtn.addEventListener("click", function(){p.remove();});
    p.appendChild(delBtn);
    });

}
