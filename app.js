function showSideBar() {
    const sidebar = document.querySelector(".sidebar");
    sidebar.style.display = "flex";
}

function hideSideBar() {
    const sidebar = document.querySelector(".sidebar");
    sidebar.style.display = "none";
}

// collapsible function

let coll = document.querySelector(".collapsible");
let i;
for(i=0; i<coll.length; i++) {
    coll[i].addEventListener("click", function() {
        this.classList.toggle("active");
        let content = this.nextElementSibling;
        if(content.style.maxHeight) {
            content.style.maxHeight = null;

        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }
    });
}