function openNav() {
    document.getElementById("mySidepanel").style.width = "50%";
    document.body.classList.add("no-scroll");
  }
  
  function closeNav() {
    document.getElementById("mySidepanel").style.width = "0";
    document.body.classList.remove("no-scroll");
  }