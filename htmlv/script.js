let header_btn = document.getElementsByClassName("header_btn");


    

function scrollToSection(sectionId) {
    let section = document.getElementById(sectionId);
    if (section != null && section != "section1") {
      let offset = section.offsetTop - 80;
  
      document.documentElement.scrollTop = offset;
      document.body.scrollTop = offset;

    }   if(sectionId === "section1"){
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    }

    for(let i = 0; i < header_btn.length; i++){
      header_btn[i].classList.remove("active");
    }
    document.getElementById(sectionId).classList.add("active");

  }