function enterSite() {
    $("#landing").css("transform", "translate(-200vw)");
    $("#dimmed-bg").css("visibility", "visible");
    $("#dimmed-bg").css("transform", "translate(0)");
    $("#above-fold").css("opacity", "1");
    $("#full-site").css("visibility", "visible");
    $("#full-site").css("overflow", "visible");
    $("#full-site").css("max-height", "auto");
    $("#register-side-bar").css("transform", "translate(0)");
}


$("#visible-section").mouseenter(function() { openForm(); });
$("#empty-section").mouseenter(function() { closeForm(); });
$("#form-section").mouseleave(function() { closeForm(); });

function openForm() {
    $("#register-side-bar").css("transform", "translate(-650px)");
    $("#register-side-bar").css("transition-delay", "0s");
    $("#register-side-bar").css("z-index", "100");
    
    $("#call-num").css("opacity", "0");
    $("#reg").css("opacity", "0");
}

function closeForm() {
    $("#register-side-bar").css("transform", "translate(0)");
    $("#register-side-bar").css("z-index", "0");
    $("#call-num").css("opacity", "1");
    $("#reg").css("opacity", "1");
}


(function manageTotalUsers() {
    
    let totalUsers = String(getRandom(10000, 20000));
    totalUsers = addComma(totalUsers);
    
    addToTotalUsers(totalUsers);
    
    function addToTotalUsers(currentValue) {
        let num = Number(currentValue.replace(",", ""));
        num++;
        num = String(num);
        num = addComma(num);
        $("#total-users").html(num);
        setTimeout(function() {
            addToTotalUsers(num);
        }, getRandom(100, 2000));
    }
    
    function getRandom(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    }
    
    function addComma(num) {
        return num.slice(0, 3) + "," + num.slice(3, 6);
    }
    
})();

var hamgurger = document.querySelector('.hamburger');
var hamgurger_container = document.querySelector('.hamburger-container');
var navlinks = document.querySelector('.nav-links');
var link = document.querySelectorAll('.nav-links a');
var section = document.querySelector('#above-fold article');

var menuOpen = false;

for(let i=0;i<link.length;i++){
link[i].addEventListener('click', () =>{
  navlinks.classList.remove('open');
  hamgurger.classList.remove('open');
  section.style.opacity=1;
})
}


hamgurger.addEventListener('click', () => {
  if (!menuOpen) {
    hamgurger.classList.add('open');
    navlinks.classList.add('open');
    section.style.opacity=0;
    section.style.transition='all 0.7s ease-in';
    menuOpen = true;
  } else {
    hamgurger.classList.remove('open');
    navlinks.classList.remove('open');
    menuOpen = false;
    section.style.opacity=1;
    section.style.transition='all 0.7s ease-in';
  }
});













