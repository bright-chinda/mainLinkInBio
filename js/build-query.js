
let menuBtn = document.querySelectorAll(".menu-cont")
let navBar = document.querySelector(".nav-links")
let buildEditorNavBar = document.querySelector(".build-guery-header-nav")
let openMenu = document.querySelectorAll(".open-menu")
let closeMenu = document.querySelectorAll(".close-menu")
let removeModal = document.querySelectorAll(".query-sectors")

// for(let i = 0; i < removeModal.length; i++){
//   removeModal[i].addEventListener("click",function(){
//     appModal.classList.toggle("hidden")
//     console.log(appModal);
//     // appModal.style.display = "none"
//   })
// }


// if (menuBtn) {
  for (let i = 0; i < menuBtn.length; i++) {
    menuBtn[i].addEventListener("click",function(){
      navBar.classList.toggle("nav-links-active")
      if(navBar.classList.contains("nav-links-active")){
        openMenu[i].style.display = "none"
        closeMenu[i].style.display = "block"
     }else if(!navBar.classList.contains("nav-links-active")){
        openMenu[i].style.display = "block"
        closeMenu[i].style.display = "none"
     }
    })
  }

  for (let i = 0; i < menuBtn.length; i++) {
    menuBtn[i].addEventListener("click",function(){
     buildEditorNavBar.classList.toggle("build-active-nav")
      if(buildEditorNavBar.classList.contains("build-active-nav")){
        openMenu[i].style.display = "none"
        closeMenu[i].style.display = "block"
     }else if(!buildEditorNavBar.classList.contains("build-active-nav")){
        openMenu[i].style.display = "block"
        closeMenu[i].style.display = "none"
     }
    })
  }
// }









let defaultLinkInBioDescription = document.querySelector(".linkIn-bio-description-cont")

// 📑tab functionality
function openTabx(evt, tabName) {
    let i, tabContent, tablink;
  
    tabContent = document.getElementsByClassName('tab-content-x');
  
    for (i = 0; i < tabContent.length; i++) {
      tabContent[i].classList.add('inactive-tab');
    }
  
    tablink = document.getElementsByClassName('tab-btn-x');
    for (i = 0; i < tabContent.length; i++) {
      tablink[i].classList.remove('active-tab-indicator');
    }
  
    let content = document.getElementById(tabName);
    content.classList.remove('inactive-tab');
    evt.currentTarget.classList.add('active-tab-indicator');
    defaultLinkInBioDescription.style.display = "none"
    // defaultDescription.classList.add("hidden")
}


