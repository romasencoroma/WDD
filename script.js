/* This pice of code tooked from w3school*/ 
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "241px";
    document.getElementById("main").style.backgroundColor = "rgba(0,0,0,0.4)";
  }
  
  /* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "-0.77%";
    document.getElementById("main").style.backgroundColor = "rgb(220, 221, 220)";
    
  }
  /* End of code from w3school */
  function darkM() {
    var element = document.getElementById("main");
    element.classList.toggle("dark-mode");
    document.getElementById("mainBar").classList.toggle("mainBarN")
    document.getElementById("nature").classList.toggle("natureN")
    document.getElementById("mySidenav").classList.toggle("sidenavN")
    document.getElementById("nM").classList.toggle("nMN")
    document.getElementById("cE").classList.toggle("cEN")
    document.getElementById("cEI").classList.toggle("cEImgN")
  }