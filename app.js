 
 
 
function showSideBar() {
    const sidebar = document.querySelector(".sidebar");
    sidebar.style.display = "flex";
}

function hideSideBar() {
    const sidebar = document.querySelector(".sidebar");
    sidebar.style.display = "none";
}




// collapsible functions

let coll = document.querySelectorAll(".collapsible-box");
let i;
for(i = 0; i < coll.length; i++) {

    coll[i].addEventListener("click", function() {
        this.classList.toggle("active");

    });
   
}
    

// go to top function

let myButton = document.querySelector(".myBtn");

// when the user scroll down 20px from the top of the document, show the button

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){

        myButton.style.display = "block";

    } else {
        myButton.style.display = "none";
    }
}

//when the user click on the button, scroll to  the top of the document.

function topFunction() {
    
    document.body.scrollTop = 0; //for safari
    document.documentElement.scrollTop = 0; // chrome and firefox
}


// reset form code

// const formToReset = document.querySelector(".contact-form");
// formToReset.addEventListener('submit' , (e) => {
//     e.preventDefault();
//     formToReset.reset();

// });


   


    // let nameError = document.querySelector(".name-error");
    // let emailError = document.querySelector(".email-error");
    // let messageError = document.querySelector(".message-error");
    // let submitError = document.querySelector(".subit-error");
    
    // function validateName() {
    //     let name = document.querySelector(".contact-name").value;
        
    //     if(name.length == 0) {
    //         nameError.innerHTML ="name is required";
    //         return false;
    //     }
        
    // }