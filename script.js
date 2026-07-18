// Counter Animation

let counters = document.querySelectorAll(".counter");


counters.forEach(counter=>{


let target = +counter.innerText;

let count = 0;


let speed = target / 100;



let update = ()=>{


if(count < target){

count += speed;

counter.innerText = Math.ceil(count);

setTimeout(update,20);

}

else{

counter.innerText = target;

}


}


update();


});




// Navbar shadow on scroll

window.addEventListener("scroll",()=>{


let nav=document.querySelector(".navbar");


if(window.scrollY>50){

nav.style.boxShadow="0 5px 20px rgba(0,0,0,.3)";

}

else{

nav.style.boxShadow="none";

}


});