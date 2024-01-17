 
 
 
function showSideBar() {
    const sidebar = document.querySelector(".sidebar");
    sidebar.style.display = "flex";
}

function hideSideBar() {
    const sidebar = document.querySelector(".sidebar");
    sidebar.style.display = "none";
}




// collapsible function

// function toggleClass() {
//     let coll = document.querySelector(".collapsible-box");
//     coll.classList.toggle("active");
// }

let coll = document.querySelectorAll(".collapsible-box");
let i;
for(i = 0; i < coll.length; i++) {

    coll[i].addEventListener("click", function() {
        this.classList.toggle("active");

    });
   
}
    
