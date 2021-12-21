let viewBtn = document.getElementById("viewButton");
let eatval = document.getElementById("eat");
let orderBtn=document.getElementById("orderButton");  

viewBtn.onclick = function() {
    let eatval = document.getElementById("eat");
    eatval.textContent = "View all food items.";
    viewBtn.textContent = "button Viewed";

}
orderBtn.onclick = function() {
    let eatval = document.getElementById("eat");
    eatval.textContent = "order succsesfully.";
    viewBtn.textContent = "button Viewed";

}