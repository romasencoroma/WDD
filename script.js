/* This pice of code tooked from w3school*/ 
function openNav() {/* function absolutly remaded by Roman */
  var w = window.innerWidth; /* we checking screen size */
  if (w > 1000){ /* if screen bigger than 1000px sidenav will be 250px */
    document.getElementById("mySidenav").style.width = "250px";
  } else if (w < 1000){ /* if screen smaller than 1000px sidenav will be 150px */
    document.getElementById("mySidenav").style.width = "150px";
  }
  if (w > 1000){/* if screen bigger than 1000px sidenav will shift main div with all content */
    document.getElementById("main").style.marginLeft = "241px";
  } else if (w < 1000){ /* if screen bigger than 1000px sidenav will not shift main div with all content */
    document.getElementById("main").style.marginLeft = "0px";
  }
    document.getElementById("main").style.backgroundColor = "rgba(0,0,0,0.4)"; /* making shadow on main div and content inside */
  }
  
  /* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    document.getElementById("main").style.backgroundColor = "rgb(220, 221, 220)";
    
  }
  /* End of code from w3school */
  function darkM() { /* function dark mode  */
    var element = document.getElementById("main");
    element.classList.toggle("dark-mode"); /* give main div another style  */
    document.getElementById("mainBar").classList.toggle("mainBarN") /* give top nav bar another style  */
    document.getElementById("nature").classList.toggle("natureN") /* give another style to word nature */
    document.getElementById("mySidenav").classList.toggle("sidenavN") /* give another style for sidenav */
    document.getElementById("nM").classList.toggle("nMN") /* give another style for button dark mode */
    document.getElementById("cE").classList.toggle("cEN") /* give another style for text div */
    document.getElementById("nE").classList.toggle("cEN") /* give another style for text div */
    document.getElementById("wE").classList.toggle("cEN") /* give another style for text div */
    document.getElementById("wEI").classList.toggle("cEImgN") /* give another style for image div */
    document.getElementById("cEI").classList.toggle("cEImgN") /* give another style for image div */
    document.getElementById("nEI").classList.toggle("nEImgN") /* give another style for image div */
    document.getElementById("Ref").classList.toggle("RefN")
  }
  function darkM2() { /* function dark mode  */
    document.getElementById("main").classList.toggle("dark-mode"); /* give main div another style  */
    document.getElementById("mainBar").classList.toggle("mainBarN") /* give top nav bar another style  */
    document.getElementById("nature").classList.toggle("natureN") /* give another style to word nature */
    document.getElementById("mySidenav").classList.toggle("sidenavN") /* give another style for sidenav */
    document.getElementById("nM").classList.toggle("nMN") /* give another style for button dark mode */
    document.getElementById("SED").classList.toggle("SEDN")
    document.getElementById("SEDL").classList.toggle("SEDNL")
    document.getElementById("SEDLL").classList.toggle("SEDNL")
    document.getElementById("SEDLLN").classList.toggle("SEDNL")
    document.getElementById("SEDLLNS").classList.toggle("SEDNL")
    document.getElementById("SEDLLNP").classList.toggle("SEDNL")
    document.getElementById("SEDLLNPS").classList.toggle("SEDNL")
    document.getElementById("Ref").classList.toggle("RefN")
  }
// End of Roman's part