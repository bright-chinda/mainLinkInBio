
let savedElementToggle = document.querySelectorAll(".saved-element-toggle")
let savedInnerElementToggle = document.querySelectorAll(".saved-element-inner-toggle")
let addSocialLinks = document.querySelectorAll(".add-social-links")
let addCtaBtn = document.querySelectorAll(".add-call-action-button")
let priceDiscountHideDisplay = document.querySelectorAll(".price-discount-hide-display")


const notificationDropdown = document.getElementById("notificationsDropdown");
const profileDropdown = document.getElementById("profileDropdown");
const workspaceDropdown = document.getElementById("workspaceDropdown");
const dropdownBtns = document.querySelectorAll(".dropdown-btn");

// This Loops through the navbar dropdowns and toggles them on button click
dropdownBtns.forEach((dropdownBtn) => {
  var dropdown = dropdownBtn.getAttribute("data-dropdown");
  dropdownBtn.addEventListener("click", function () {
    document.getElementById(dropdown).classList.toggle("visible");
  });
});

let cancelEditorModal = document.querySelector(".cancel-editor-modal")
let linkInBioContainer = document.querySelector(".link-inBio-container")
let bioElementModal = document.querySelector("#componentsModal");


cancelEditorModal.addEventListener("click", ()=>{
  bioElementModal.classList.add("not-active")
})







// cards display dropdown
  let carddisplayBtn = document.querySelectorAll(".full-card-display")
  let HalfcardDisplayDropdown = document.querySelectorAll(".half-cards-display-dropdown")
  
  for(let i = 0; i < carddisplayBtn.length; i++){
    carddisplayBtn[i].addEventListener("click",function(){
      HalfcardDisplayDropdown[i].classList.toggle("visible")
    })
  }
  
  carddisplayBtn.forEach(element => {
    element.addEventListener("click",function(){
      carddisplayBtn.forEach(btns => {
        btns.classList.remove("add-boder")
      })
      element.classList.add("add-boder")
      console.log(element);
    })
  });
// cards display dropdown ends here



// Product select video function
function productpostselector(){
  let productpostvalue = document.getElementById("productpostvalue").value
  let toggleSocialPost = document.querySelectorAll(".toggle-social-post")
  toggleSocialPost.forEach(element => {
    element.classList.add("hidden")
  });
  let specificsocialpost = document.getElementById(productpostvalue)
  specificsocialpost.classList.remove("hidden")
}
// Product select video  function ends here

// social post function
function socialpostselector(){
  let socialpostvalue = document.getElementById("socialpostvalue").value
  let toggleSocialPost = document.querySelectorAll(".toggle-social-post")
  toggleSocialPost.forEach(element => {
    element.classList.add("hidden")
  });
  let specificsocialpost = document.getElementById(socialpostvalue)
  specificsocialpost.classList.remove("hidden")
}
// social post function ends here


// social modal link function
let socialLinkBtnToggle = document.querySelectorAll(".social-link-select")
let socialLinkMenu = document.querySelectorAll(".social-link-dropdown-menu")

for(let i = 0; i < socialLinkBtnToggle.length; i++){
  socialLinkBtnToggle[i].addEventListener("click",function(){
    console.log(socialLinkMenu);
    socialLinkMenu[i].classList.toggle("visible")
  })
}



function callsocialLinks(targetlinks){
  let socialTabcontent = document.querySelectorAll(".tab-content-link-btn");

  socialTabcontent.forEach((tab)=>tab.classList.add("inactive-social-link-tab"));

  let currentsocialTab = document.querySelector(`#${targetlinks}`)
  
  currentsocialTab.classList.remove("inactive-social-link-tab");

  // change social link text
  let socialLinkSelectedText = document.querySelectorAll(".socialLink-instagram-btn")
  let socialLinkSelectText = document.querySelector(".social-link-select-text")
  let changeSocialLinkText = document.querySelectorAll(".social-link-selected-text")
  
  for(let i = 0; i < socialLinkSelectedText.length; i++){
    socialLinkSelectedText[i].addEventListener("click",function(){
      socialLinkSelectText.innerHTML = changeSocialLinkText[i].innerHTML;
    })
  }
  // change social link text ends here
}

// social modal link function ends here



savedElementToggle.forEach((element, i )=> {
  element.addEventListener("click",() =>{
    element.classList.toggle("remove-active-element-toggle")
    savedInnerElementToggle[i].classList.toggle("remove-active-element-toggle")
    priceDiscountHideDisplay[i].classList.toggle("hidden")
  })
});


let linkinBioElementModal = document.querySelectorAll(".linkin-bio-element-modal")
function saveelementchanges(){
  linkinBioElementModal.forEach((element, i)=> {
    linkinBioElementModal[i].classList.remove("visible")
  });
  let mainId = document.querySelector("#hero-btn")
  mainId.setAttribute('data-modal', "errorpopup");
}



function callBioElements(targetelement){
  let appModalElement = document.querySelector(".app-modal-linkLn-bio-elements");
  let bioElementModal = document.querySelector("#componentsModal");

  let allTabcontent = document.querySelectorAll(".tab-content-x");

  allTabcontent.forEach((tab)=>tab.classList.add("inactive-tab"));

  let currentTab = document.querySelector(`#${targetelement}`)
  
  currentTab.classList.remove("inactive-tab");

  bioElementModal.classList.add("visible");
  appModalElement.classList.remove("visible");
}



// add/duplicate call to acion button
for (let i = 0; i < addCtaBtn.length; i++) {
  let parentContainer = document.querySelector('.duplicate-call-actin-button');
  addCtaBtn[i].addEventListener('click', function () {
    let postElement = document.createElement('div');
    postElement.classList.add('duplicate-call-actin-button');
    postElement.innerHTML = `
    <div class="duplicate-call-actin-button">
                    <div class="social-links-body">
                        <div class="hero-section-username-input">
                          <p>Add Banner Image</p>
                          <div class="sportlight-image-section">
                            <div class="sportlight-image-display">
                              <img src="images/app-store-images/cta-phone.png" class="img">
                            </div>
                            <div class="sportlight-image-toggler">
                              <label for="sportlight-input-image" class="sportlight-label-btn">Add Image</label>
                              <input type="file" name="" class="sportlight-input-hide-img" id="sportlight-input-image">
                            </div>
                          </div>
                        </div>
                        
                        <div class="add-banner-title hero-section-username-input">
                          <p>Button text</p>
                          <input type="text" name="" id="" placeholder="Enter button text">
                        </div>
      
                        <div class="add-banner-title hero-section-username-input">
                          <p>Button link</p>
                          <input type="text" name="" id="" placeholder="Enter button link">
                        </div>

                      <div class="sub-footer">
                        <div class="addTo-herosection-btn">
                          <input type="checkbox" name="" id="">
                          <p>Add to hero section</p>
                        </div>

                        <div class="bio-element-footer">
                          <button class="cards-footer-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 16 17" fill="none">
                              <path id="Vector" d="M2.99489 17C2.46292 17 2.00857 16.8222 1.63182 16.4666C1.25505 16.1109 1.06667 15.6821 1.06667 15.1799V2.40088H0V0.890648H4.79999V0H11.2V0.890648H16V2.40088H14.9333V15.1799C14.9333 15.6885 14.7467 16.119 14.3733 16.4714C14 16.8238 13.5439 17 13.0051 17H2.99489ZM13.3333 2.40088H2.66665V15.1799C2.66665 15.2703 2.69742 15.3445 2.75897 15.4026C2.82052 15.4607 2.89916 15.4898 2.99489 15.4898H13.0051C13.0872 15.4898 13.1624 15.4575 13.2308 15.393C13.2992 15.3284 13.3333 15.2574 13.3333 15.1799V2.40088ZM5.23079 13.4761H6.83077V4.41456H5.23079V13.4761ZM9.16923 13.4761H10.7692V4.41456H9.16923V13.4761Z" fill="#FF0303"></path>
                            </svg>
                            <div class="cards-footer-icon-tooltip">
                              <p>Delete</p>
                            </div>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
     `;
    parentContainer.appendChild(postElement);
  });
}
// add/duplicate call to acion button ends here



// add/duplicate social link
for (let i = 0; i < addSocialLinks.length; i++) {
  let parentContainer = document.querySelector('.duplicate-social-link');
  addSocialLinks[i].addEventListener('click', function () {
    let postElement = document.createElement('div');
    postElement.classList.add('duplicate-social-link');
    postElement.innerHTML = `
      <div class="sidebar-section-one-body">
        <div class="social-links-body">
          <button class="social-link-select">
            <div class="social-link-select-text">
              <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 181 181" fill="#003E80">
                <path d="M60.332 90.5555C60.3027 73.8975 73.7851 60.3652 90.4399 60.3363C107.098 60.3037 120.633 73.7801 120.665 90.4413C120.697 107.103 107.215 120.632 90.5541 120.664C73.8993 120.696 60.3642 107.217 60.332 90.5555ZM44.0321 90.588C44.0819 116.254 64.927 137.014 90.5866 136.964C116.249 136.915 137.021 116.075 136.971 90.4091C136.921 64.752 116.073 43.9798 90.4078 44.03C64.7478 44.0798 43.9822 64.9277 44.0321 90.588ZM127.852 42.1238C127.864 48.1173 132.737 52.9704 138.731 52.9587C144.727 52.9467 149.58 48.0763 149.571 42.0828C149.559 36.0893 144.686 31.2334 138.69 31.2454C132.693 31.2571 127.841 36.1303 127.852 42.1238ZM54.0748 164.228C45.2517 163.844 40.4605 162.378 37.2676 161.149C33.0391 159.513 30.0219 157.552 26.8463 154.4C23.6766 151.235 21.709 148.227 20.058 144.007C18.8179 140.814 17.3254 136.029 16.9117 127.206C16.4631 117.667 16.3606 114.805 16.3168 90.6407C16.2698 66.4821 16.3578 63.6201 16.7742 54.0727C17.1521 45.2556 18.6274 40.458 19.853 37.2679C21.4891 33.0339 23.4451 30.0223 26.603 26.847C29.7666 23.6713 32.7751 21.7097 36.9975 20.0588C40.188 18.8123 44.9732 17.3314 53.7934 16.9125C63.3376 16.4607 66.1965 16.3642 90.3551 16.3171C114.519 16.2701 117.381 16.3553 126.928 16.7746C135.745 17.1585 140.542 18.6189 143.73 19.8534C147.961 21.4894 150.978 23.4398 154.151 26.6034C157.323 29.7674 159.291 32.7698 160.942 37.0014C162.188 40.1827 163.669 44.9739 164.085 53.7913C164.54 63.3355 164.643 66.1975 164.686 90.3561C164.733 114.521 164.645 117.383 164.226 126.925C163.842 135.747 162.379 140.542 161.147 143.738C159.511 147.963 157.555 150.981 154.394 154.156C151.233 157.32 148.225 159.293 144 160.944C140.815 162.187 136.024 163.671 127.21 164.09C117.666 164.539 114.806 164.642 90.6393 164.686C66.4807 164.733 63.6222 164.642 54.0748 164.228ZM53.0192 0.626695C43.3898 1.08132 36.8129 2.62335 31.0655 4.8756C25.1161 7.19502 20.0729 10.3031 15.0561 15.3407C10.033 20.3812 6.94824 25.4333 4.64649 31.3886C2.41828 37.1506 0.908058 43.7305 0.482778 53.366C0.0606799 63.0191 -0.0361835 66.0979 0.0108341 90.6729C0.0578518 115.245 0.166028 118.33 0.626306 127.986C1.08658 137.612 2.62332 144.186 4.87522 149.936C7.19747 155.886 10.3028 160.927 15.3432 165.947C20.3808 170.967 25.4361 174.049 31.3942 176.353C37.1502 178.578 43.7327 180.095 53.3653 180.517C63.018 180.942 66.0996 181.036 90.6686 180.989C115.249 180.942 118.331 180.834 127.984 180.376C137.613 179.916 144.184 178.374 149.937 176.127C155.887 173.799 160.93 170.7 165.947 165.659C170.964 160.621 174.049 155.566 176.351 149.608C178.579 143.852 180.095 137.269 180.514 127.643C180.937 117.984 181.037 114.899 180.989 90.3268C180.942 65.7518 180.831 62.673 180.374 53.0231C179.916 43.3876 178.374 36.8165 176.125 31.0634C173.8 25.114 170.698 20.0761 165.66 15.0533C160.622 10.0362 155.567 6.94544 149.609 4.64971C143.85 2.42114 137.27 0.902438 127.638 0.485996C117.985 0.0578883 114.903 -0.0357935 90.3254 0.0108706C65.7535 0.0578883 62.6719 0.163236 53.0192 0.626695Z"/>
              </svg>
              <h5>Instagram</h5>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" width="9" height="6" viewBox="0 0 9 6" fill="none">
              <path id="Vector" opacity="0.5" d="M4.5 4.1147L8.16124 -3.66635e-08L9 0.942648L4.5 6L-4.12044e-08 0.942647L0.838761 -3.56739e-07L4.5 4.1147Z" fill="#003E80"></path>
            </svg>

            <!-- social link dropdown menu -->
            <div class="social-link-dropdown-menu">
              <div class="social-link-dropdown-menu-overflow custom-scroll-bar">
                <div class="socialLink-instagram-btn" onclick="callsocialLinks('instagram-selected-socialink')">
                  <div class="social-link-selected-text">
                    <svg xmlns="http://www.w3.org/2000/svg" class="social-link-icons" width="13" height="13" viewBox="0 0 181 181" fill="#003E80">
                      <path d="M60.332 90.5555C60.3027 73.8975 73.7851 60.3652 90.4399 60.3363C107.098 60.3037 120.633 73.7801 120.665 90.4413C120.697 107.103 107.215 120.632 90.5541 120.664C73.8993 120.696 60.3642 107.217 60.332 90.5555ZM44.0321 90.588C44.0819 116.254 64.927 137.014 90.5866 136.964C116.249 136.915 137.021 116.075 136.971 90.4091C136.921 64.752 116.073 43.9798 90.4078 44.03C64.7478 44.0798 43.9822 64.9277 44.0321 90.588ZM127.852 42.1238C127.864 48.1173 132.737 52.9704 138.731 52.9587C144.727 52.9467 149.58 48.0763 149.571 42.0828C149.559 36.0893 144.686 31.2334 138.69 31.2454C132.693 31.2571 127.841 36.1303 127.852 42.1238ZM54.0748 164.228C45.2517 163.844 40.4605 162.378 37.2676 161.149C33.0391 159.513 30.0219 157.552 26.8463 154.4C23.6766 151.235 21.709 148.227 20.058 144.007C18.8179 140.814 17.3254 136.029 16.9117 127.206C16.4631 117.667 16.3606 114.805 16.3168 90.6407C16.2698 66.4821 16.3578 63.6201 16.7742 54.0727C17.1521 45.2556 18.6274 40.458 19.853 37.2679C21.4891 33.0339 23.4451 30.0223 26.603 26.847C29.7666 23.6713 32.7751 21.7097 36.9975 20.0588C40.188 18.8123 44.9732 17.3314 53.7934 16.9125C63.3376 16.4607 66.1965 16.3642 90.3551 16.3171C114.519 16.2701 117.381 16.3553 126.928 16.7746C135.745 17.1585 140.542 18.6189 143.73 19.8534C147.961 21.4894 150.978 23.4398 154.151 26.6034C157.323 29.7674 159.291 32.7698 160.942 37.0014C162.188 40.1827 163.669 44.9739 164.085 53.7913C164.54 63.3355 164.643 66.1975 164.686 90.3561C164.733 114.521 164.645 117.383 164.226 126.925C163.842 135.747 162.379 140.542 161.147 143.738C159.511 147.963 157.555 150.981 154.394 154.156C151.233 157.32 148.225 159.293 144 160.944C140.815 162.187 136.024 163.671 127.21 164.09C117.666 164.539 114.806 164.642 90.6393 164.686C66.4807 164.733 63.6222 164.642 54.0748 164.228ZM53.0192 0.626695C43.3898 1.08132 36.8129 2.62335 31.0655 4.8756C25.1161 7.19502 20.0729 10.3031 15.0561 15.3407C10.033 20.3812 6.94824 25.4333 4.64649 31.3886C2.41828 37.1506 0.908058 43.7305 0.482778 53.366C0.0606799 63.0191 -0.0361835 66.0979 0.0108341 90.6729C0.0578518 115.245 0.166028 118.33 0.626306 127.986C1.08658 137.612 2.62332 144.186 4.87522 149.936C7.19747 155.886 10.3028 160.927 15.3432 165.947C20.3808 170.967 25.4361 174.049 31.3942 176.353C37.1502 178.578 43.7327 180.095 53.3653 180.517C63.018 180.942 66.0996 181.036 90.6686 180.989C115.249 180.942 118.331 180.834 127.984 180.376C137.613 179.916 144.184 178.374 149.937 176.127C155.887 173.799 160.93 170.7 165.947 165.659C170.964 160.621 174.049 155.566 176.351 149.608C178.579 143.852 180.095 137.269 180.514 127.643C180.937 117.984 181.037 114.899 180.989 90.3268C180.942 65.7518 180.831 62.673 180.374 53.0231C179.916 43.3876 178.374 36.8165 176.125 31.0634C173.8 25.114 170.698 20.0761 165.66 15.0533C160.622 10.0362 155.567 6.94544 149.609 4.64971C143.85 2.42114 137.27 0.902438 127.638 0.485996C117.985 0.0578883 114.903 -0.0357935 90.3254 0.0108706C65.7535 0.0578883 62.6719 0.163236 53.0192 0.626695Z"/>
                    </svg>
                    <h5>Instagram</h5>
                  </div>
                </div>

                <div class="socialLink-instagram-btn" onclick="callsocialLinks('facebook-selected-socialink')">
                  <div class="social-link-selected-text">
                    <svg xmlns="http://www.w3.org/2000/svg" class="social-link-icons" width="7" height="15" viewBox="0 0 7 15" fill="#003E80">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M1.54098 7.55713V14.8041C1.54098 14.9021 1.62295 15 1.7377 15H4.44262C4.54098 15 4.63934 14.9184 4.63934 14.8041V7.42655H6.59016C6.68852 7.42655 6.77049 7.34494 6.78688 7.24701L6.95082 5.04353C6.96721 4.92927 6.86885 4.83134 6.7541 4.83134H4.62295V3.26442C4.62295 2.88901 4.91803 2.59521 5.29508 2.59521H6.80328C6.90164 2.59521 7 2.5136 7 2.39935V0.195865C7 0.0979324 6.91803 0 6.80328 0H4.2459C2.7541 0 1.54098 1.20783 1.54098 2.69314V4.83134H0.196721C0.0983608 4.83134 0 4.91295 0 5.0272V7.24701C0 7.34494 0.0819673 7.44287 0.196721 7.44287H1.54098V7.55713Z"/>
                      </svg>
                    <h5>Facebook</h5>
                  </div>
                </div>

                <div class="socialLink-instagram-btn" onclick="callsocialLinks('whatssap-selected-socialink')">
                  <div class="social-link-selected-text">
                    <svg xmlns="http://www.w3.org/2000/svg" class="social-link-icons" width="13" height="13" viewBox="0 0 240 242" fill="#003E80">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M205 35.0505C193.932 23.9005 180.759 15.0604 166.247 9.04349C151.734 3.02658 136.17 -0.0472316 120.46 0.000548585C54.6 0.000548585 1 53.6105 1 119.511C0.998726 140.483 6.51686 161.086 17 179.251L0 241.191L63.36 224.561C80.8716 234.107 100.495 239.116 120.44 239.131C144.084 239.135 167.198 232.129 186.86 218.996C206.522 205.864 221.847 187.196 230.899 165.353C239.95 143.51 242.321 119.474 237.711 96.2834C233.101 73.0932 221.717 51.7909 205 35.0705V35.0505ZM120.5 219.001C102.695 218.992 85.2199 214.191 69.91 205.101L66.27 202.931L28.67 212.781L38.67 176.131L36.32 172.371C23.2891 151.68 18.3442 126.912 22.4314 102.804C26.5187 78.696 39.3511 56.9415 58.4735 41.7025C77.596 26.4635 101.666 18.81 126.078 20.2062C150.49 21.6025 173.53 31.9506 190.79 49.2705C204.692 63.176 214.16 80.8914 217.995 100.177C221.83 119.462 219.861 139.452 212.337 157.619C204.813 175.785 192.071 191.313 175.722 202.239C159.374 213.164 140.153 218.998 120.49 219.001H120.5ZM175 144.541C172 143.031 157.33 135.831 154.61 134.831C151.89 133.831 149.89 133.321 147.86 136.341C145.83 139.361 140.14 146.051 138.4 148.061C136.66 150.071 134.91 150.331 131.95 148.821C128.99 147.311 119.32 144.161 107.95 133.981C101.402 127.941 95.7757 120.973 91.25 113.301C89.5 110.301 91.06 108.691 92.58 107.231C94.1 105.771 95.58 103.751 97.05 102.001C98.2931 100.492 99.3042 98.8071 100.05 97.0005C100.447 96.1773 100.633 95.2682 100.591 94.3552C100.549 93.4422 100.281 92.554 99.81 91.7705C99 90.2705 93 75.5705 90.6 69.5806C88.2 63.5906 85.71 64.5806 83.87 64.4406C82.03 64.3006 80.14 64.3505 78.17 64.3505C76.6512 64.3861 75.1563 64.736 73.7795 65.3779C72.4026 66.0199 71.1736 66.9401 70.17 68.0806C67.48 71.0506 59.75 78.3006 59.75 93.0005C59.75 107.701 70.44 121.881 71.94 123.901C73.44 125.921 93 156.071 123 169.001C130.12 172.061 135.68 173.901 140 175.321C146.092 177.158 152.527 177.558 158.8 176.491C164.54 175.651 176.46 169.281 178.97 162.311C181.48 155.341 181.47 149.311 180.72 148.121C179.97 146.931 178.03 146.061 175.02 144.531L175 144.541Z"/>
                    </svg>
                    <h5>Whatsapp</h5>
                  </div>
                </div>

                <div class="socialLink-instagram-btn" onclick="callsocialLinks('twitter-selected-socialink')">
                  <div class="social-link-selected-text">
                    <svg xmlns="http://www.w3.org/2000/svg" class="social-link-icons" width="13" height="13" viewBox="0 0 158 144" fill="#003E80">
                      <g filter="url(#filter0_d_2874_60)">
                      <path d="M122.133 0H145.133L94.8845 57.6091L154 136H107.712L71.4593 88.4551L29.9772 136H6.96162L60.7082 74.3817L4 0H51.4606L84.231 43.4566L122.133 0ZM114.06 122.19H126.806L44.536 13.0849H30.8603L114.06 122.19Z"/>
                      </g>
                      <defs>
                      <filter id="filter0_d_2874_60" x="0" y="0" width="158" height="144" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                      <feOffset dy="4"/>
                      <feGaussianBlur stdDeviation="2"/>
                      <feComposite in2="hardAlpha" operator="out"/>
                      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2874_60"/>
                      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2874_60" result="shape"/>
                      </filter>
                      </defs>
                    </svg>
                    <h5>X (twitter)</h5>
                  </div>
                </div>

                <div class="socialLink-instagram-btn" onclick="callsocialLinks('youtube-selected-socialink')">
                  <div class="social-link-selected-text">
                    <svg xmlns="http://www.w3.org/2000/svg" class="social-link-icons" width="13" height="13" viewBox="0 0 203 143" fill="#003E80">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M200.928 30.8518C200.928 30.8518 198.946 16.8384 192.847 10.6853C185.119 2.5924 176.465 2.53998 172.509 2.07112C144.123 -9.53674e-07 101.49 0 101.49 0H101.416C101.416 0 58.8017 -9.53674e-07 30.4009 2.07112C26.4298 2.55491 17.7872 2.5889 10.0623 10.6853C3.95969 16.8384 2.01918 30.8518 2.01918 30.8518C2.01918 30.8518 0 47.2963 0 63.7747V79.184C0 95.6284 2.01918 112.107 2.01918 112.107C2.01918 112.107 4.00093 126.12 10.0623 132.284C17.7872 140.377 27.9396 140.115 32.4727 140.978C48.7242 142.531 101.505 143 101.505 143C101.505 143 144.176 142.925 172.561 140.891C176.532 140.422 185.171 140.374 192.9 132.277C199.002 126.124 200.98 112.095 200.98 112.095C200.98 112.095 203 95.6513 203 79.1725V63.7636C202.959 47.3188 200.939 30.8407 200.939 30.8407L200.928 30.8518ZM80.4626 97.8797V40.7421L135.301 69.4065L80.4626 97.8797Z"/>
                    </svg>
                    <h5>Youtube</h5>
                  </div>
                </div>

                <div class="socialLink-instagram-btn" onclick="callsocialLinks('thread-selected-socialink')">
                  <div class="social-link-selected-text">
                    <svg xmlns="http://www.w3.org/2000/svg" class="social-link-icons" width="13" height="13" viewBox="0 0 156 181" fill="#003E80">
                      <path d="M121.39 83.8898C120.605 83.5141 119.812 83.1548 119.012 82.8122C117.613 57.0698 103.521 42.3323 79.8605 42.1815C66.2087 42.0909 53.9885 47.6477 46.3722 59.1837L59.3847 68.0945C64.7969 59.8983 73.2904 58.1507 79.5456 58.1507C79.6176 58.1507 79.6903 58.1506 79.7619 58.1517C87.5524 58.2009 93.4315 60.462 97.2365 64.8714C100.005 68.0817 101.858 72.518 102.774 78.1165C95.8672 76.9443 88.3969 76.5844 80.4107 77.041C57.9151 78.3349 43.4528 91.4313 44.4243 109.629C44.9171 118.86 49.5241 126.802 57.3957 131.989C64.0516 136.375 72.6235 138.519 81.5325 138.034C93.2974 137.39 102.527 132.91 108.966 124.716C113.856 118.495 116.949 110.432 118.315 100.272C123.921 103.65 128.077 108.095 130.372 113.438C134.274 122.521 134.501 137.447 122.301 149.615C111.611 160.275 98.7617 164.887 79.3425 165.029C57.8013 164.87 41.5099 157.975 30.9179 144.533C20.9991 131.947 15.873 113.768 15.6819 90.4998C15.873 67.232 20.9991 49.0523 30.9179 36.4666C41.5099 23.0254 57.801 16.1295 79.3421 15.9702C101.039 16.1312 117.615 23.0601 128.612 36.566C134.005 43.1887 138.071 51.518 140.751 61.2293L156 57.1678C152.751 45.2145 147.639 34.9136 140.683 26.3716C126.584 9.05657 105.964 0.183679 79.3953 0H79.289C52.7746 0.183326 32.3853 9.08948 18.6878 26.4704C6.49919 41.9377 0.212019 63.459 0.000709093 90.4361L0 90.4998L0.000709093 90.5635C0.212019 117.541 6.49919 139.062 18.6878 154.53C32.3853 171.91 52.7746 180.817 79.289 181H79.3953C102.968 180.836 119.584 174.676 133.272 161.025C151.181 143.165 150.642 120.779 144.739 107.036C140.504 97.1809 132.43 89.1766 121.39 83.8898ZM80.6901 122.087C70.8305 122.642 60.5873 118.224 60.0825 108.762C59.7081 101.746 65.0844 93.9182 81.295 92.9857C83.1517 92.8788 84.9734 92.8264 86.7628 92.8264C92.6515 92.8264 98.16 93.3973 103.168 94.4905C101.301 117.777 90.3434 121.559 80.6901 122.087Z"/>
                    </svg>
                    <h5>Thread</h5>
                  </div>
                </div>

                <div class="socialLink-instagram-btn" onclick="callsocialLinks('tiktok-selected-socialink')">
                  <div class="social-link-selected-text">
                    <svg xmlns="http://www.w3.org/2000/svg" class="social-link-icons" width="13" height="13" viewBox="0 0 186 213" fill="#003E80">
                      <path d="M158.215 42.6926C146.727 35.2121 138.437 23.2391 135.851 9.2907C135.292 6.27783 134.982 3.17405 134.982 0H98.3158L98.2537 146.754C97.6412 163.191 84.0962 176.379 67.493 176.379C62.3324 176.379 57.474 175.093 53.1949 172.841C43.3828 167.687 36.6661 157.417 36.6661 145.601C36.6661 128.627 50.4966 114.815 67.4889 114.815C70.663 114.815 73.7048 115.34 76.5809 116.237V78.8552C73.6013 78.4461 70.5761 78.1981 67.4889 78.1981C30.2765 78.1981 0 108.43 0 145.601C0 168.402 11.4054 188.583 28.8156 200.783C39.7741 208.475 53.1121 213 67.493 213C104.71 213 134.982 182.764 134.982 145.601V71.1805C149.363 81.4879 166.984 87.5632 186 87.5632V50.9418C175.757 50.9418 166.218 47.9041 158.215 42.6926Z"/>
                    </svg>
                    <h5>Tiktok</h5>
                  </div>
                </div>

                <div class="socialLink-instagram-btn" onclick="callsocialLinks('email-selected-socialink')">
                  <div class="social-link-selected-text">
                    <svg xmlns="http://www.w3.org/2000/svg" class="social-link-icons" width="13" height="13" viewBox="0 0 123 89" fill="#003E80">
                      <path d="M7.048 0H115.832C117.771 0 119.533 0.794 120.809 2.069C122.086 3.346 122.879 5.111 122.879 7.048V81.807C122.879 83.268 122.428 84.629 121.658 85.758C121.517 86.123 121.297 86.463 120.996 86.752C120.795 86.941 120.574 87.096 120.34 87.213C119.115 88.234 117.541 88.856 115.832 88.856H7.048C5.111 88.856 3.347 88.063 2.069 86.786C0.794 85.51 0 83.748 0 81.807V7.048C0 5.107 0.792 3.344 2.068 2.069C3.344 0.792 5.107 0 7.048 0ZM5.406 78.842L43.53 40.622L5.406 9.538V78.842ZM47.729 44.045L8.424 83.449H114.125L76.563 44.051L64.18 54.602C63.209 55.432 61.755 55.479 60.727 54.645L47.729 44.045ZM80.674 40.549L117.473 79.147V9.198L80.674 40.549ZM8.867 5.406L62.388 49.045L113.611 5.406H8.867Z"/>
                    </svg>
                    <h5>Email</h5>
                  </div>
                </div>

                <div class="socialLink-instagram-btn" onclick="callsocialLinks('pinterest-selected-socialink')">
                  <div class="social-link-selected-text">
                    <svg xmlns="http://www.w3.org/2000/svg" class="social-link-icons" width="13" height="13" viewBox="0 0 211 212" fill="#003E80">
                      <path d="M0 106C0 151.253 28.2295 189.889 67.961 205.093C66.9925 196.816 65.9663 183.169 68.1794 173.596C70.0874 165.36 80.4973 121.142 80.4973 121.142C80.4973 121.142 77.3571 114.828 77.3571 105.47C77.3571 90.808 85.8177 79.852 96.3594 79.852C105.327 79.852 109.65 86.6136 109.65 94.7127C109.65 103.768 103.909 117.3 100.946 129.854C98.4777 140.355 106.196 148.922 116.499 148.922C135.164 148.922 149.522 129.142 149.522 100.596C149.522 75.3221 131.446 57.6665 105.64 57.6665C75.7704 57.6665 58.2311 80.1832 58.2311 103.458C58.2311 112.53 61.701 122.248 66.0446 127.54C66.5934 128.122 66.8987 128.895 66.8977 129.697C66.8977 129.987 66.8565 130.281 66.7782 130.562C65.9787 133.904 64.1984 141.067 63.8605 142.529C63.3948 144.454 62.3398 144.872 60.3411 143.936C47.2277 137.804 39.0309 118.538 39.0309 103.064C39.0309 69.7695 63.0981 39.2076 108.414 39.2076C144.848 39.2076 173.168 65.2935 173.168 100.149C173.168 136.516 150.35 165.791 118.667 165.791C108.018 165.791 98.0243 160.221 94.5956 153.659C94.5956 153.659 89.3288 173.815 88.0513 178.747C85.5745 188.324 78.6964 200.439 74.4352 207.321C84.2599 210.369 94.6862 212 105.5 212C163.764 212 211 164.536 211 106C211 47.464 163.764 0 105.5 0C47.236 0 0 47.4598 0 106Z"/>
                    </svg>
                    <h5>Pinterest</h5>
                  </div>
                </div>

                <div class="socialLink-instagram-btn" onclick="callsocialLinks('LinkedIn-selected-socialink')">
                  <div class="social-link-selected-text">
                    <svg xmlns="http://www.w3.org/2000/svg" class="social-link-icons" width="13" height="13" viewBox="0 0 196 141" fill="#003E80">
                      <path d="M42 140.84H0V0.839844H42V140.84ZM196 140.84H154V66.0518C154 46.5638 147.056 36.8618 133.294 36.8618C122.388 36.8618 115.472 42.2938 112 53.1718C112 70.8398 112 140.84 112 140.84H70C70 140.84 70.56 14.8398 70 0.839844H103.152L105.714 28.8398H106.582C115.192 14.8398 128.954 5.34784 147.826 5.34784C162.176 5.34784 173.782 9.33784 182.644 19.3618C191.562 29.3998 196 42.8678 196 61.7818V140.84Z"/>
                    </svg>
                    <h5>LinkedIn</h5>
                  </div>
                </div>
              </div>
            </div>
            <!-- social link dropdown menu ends here-->
          </button>
          
          <!-- selected social link dropdown item -->
          <div class="tab-content-link-btn" id="instagram-selected-socialink">
            <div class="add-banner-title hero-section-username-input">
              <p>Instagram Username</p>
              <input type="text" name="" id="" placeholder="Example: @bukayo_saka">
            </div>
          </div>

          <div class="tab-content-link-btn inactive-social-link-tab" id="facebook-selected-socialink">
            <div class="hero-section-username-input">
              <p>Facebook page link</p>
              <input type="text" name="" id="" placeholder="https://facebook.com/facebookpage">
            </div>
          </div>

          <div class="tab-content-link-btn inactive-social-link-tab" id="whatssap-selected-socialink">
            <div class="hero-section-username-input">
              <p>Add whatssap link</p>
              <input type="text" name="" id="" placeholder="https://whatssap.com/whatssap">
            </div>
          </div>

          <div class="tab-content-link-btn inactive-social-link-tab" id="twitter-selected-socialink">
            <div class="hero-section-username-input">
              <p>X (twitter) Username</p>
              <input type="text" name="" id="" placeholder="@bukayo_saka">
            </div>
          </div>

          <div class="tab-content-link-btn inactive-social-link-tab" id="youtube-selected-socialink">
            <div class="hero-section-username-input">
              <p>Add youtube channel Link </p>
              <input type="text" name="" id="" placeholder="https://youtube.com/youtube">
            </div>
          </div>

          <div class="tab-content-link-btn inactive-social-link-tab" id="thread-selected-socialink">
            <div class="hero-section-username-input">
              <p>Thread Username</p>
              <input type="text" name="" id="" placeholder="@Bright_nwenenda">
            </div>
          </div>

          <div class="tab-content-link-btn inactive-social-link-tab" id="tiktok-selected-socialink">
            <div class="hero-section-username-input">
              <p>Tiktok Username</p>
              <input type="text" name="" id="" placeholder="@Bright_nwenenda">
            </div>
          </div>

          <div class="tab-content-link-btn inactive-social-link-tab" id="email-selected-socialink">
            <div class="hero-section-username-input">
              <p>Email address</p>
              <input type="text" name="" id="" placeholder="Brightnwenenda@gmail.com">
            </div>
          </div>

          <div class="tab-content-link-btn inactive-social-link-tab" id="pinterest-selected-socialink">
            <div class="hero-section-username-input">
              <p>Add Pinterest link</p>
              <input type="text" name="" id="" placeholder="https://pinterest.com/pinteres">
            </div>
          </div>

          <div class="tab-content-link-btn inactive-social-link-tab" id="LinkedIn-selected-socialink">
            <div class="hero-section-username-input">
              <p>Add LinkedIn link</p>
              <input type="text" name="" id="" placeholder="https://LinkedIn.com/LinkedIn">
            </div>
          </div>
          <!-- selected social link dropdown item ends-->

          <div class="sub-footer">
            <div class="addTo-herosection-btn">
              <input type="checkbox" name="" id="">
              <p>Add to hero section</p>
            </div>

            <div class="bio-element-footer">
              <button class="cards-footer-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 16 17" fill="none">
                  <path id="Vector" d="M2.99489 17C2.46292 17 2.00857 16.8222 1.63182 16.4666C1.25505 16.1109 1.06667 15.6821 1.06667 15.1799V2.40088H0V0.890648H4.79999V0H11.2V0.890648H16V2.40088H14.9333V15.1799C14.9333 15.6885 14.7467 16.119 14.3733 16.4714C14 16.8238 13.5439 17 13.0051 17H2.99489ZM13.3333 2.40088H2.66665V15.1799C2.66665 15.2703 2.69742 15.3445 2.75897 15.4026C2.82052 15.4607 2.89916 15.4898 2.99489 15.4898H13.0051C13.0872 15.4898 13.1624 15.4575 13.2308 15.393C13.2992 15.3284 13.3333 15.2574 13.3333 15.1799V2.40088ZM5.23079 13.4761H6.83077V4.41456H5.23079V13.4761ZM9.16923 13.4761H10.7692V4.41456H9.16923V13.4761Z" fill="#FF0303"></path>
                </svg>
                <div class="cards-footer-icon-tooltip">
                  Delete
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
     `;
    parentContainer.appendChild(postElement);
  });
}
// add/duplicate social link ends here

// add/duplicate social link
// let addItemListing = document.querySelectorAll(".add-item-listing-btn")

// addItemListing.forEach(element => {
//   let parentContainer = document.querySelector('.sidebar-section-one-body');
//   element.addEventListener("click", ()=>{
//     let postElement = document.createElement('sidebar-section-one-body');
//     postElement.innerHTML = `
//        <div class="duplicate-social-link">
//                       <div class="active-and-inactive-header">
//                         <div class="sidebar-section-one-head" style="padding: 10px 20px;">
//                           <div class="active-and-inactive-header-content">
//                             <h5>Add New Item</h5>
//                             <p>Add the item's image, name, and link.</p>
//                           </div>
//                           <button class="active-button-toggle section-toggle-dropdown">
//                             <div class="active-light-toggle"></div>
//                           </button>
//                         </div>
//                       </div>

//                       <div class="hide-active-toggle" style="padding: 0 20px;">
//                         <div class="sidebar-section-display">
//                           <div class="query-cards-container">
//                             <div class="hero-section-username-input" style="margin-top: 0;">
//                               <p style="font-size: 13px;">Item Listing Header Text</p>
//                               <input type="text" name="" id="">
//                             </div>

//                             <div class="hero-section-username-input" style="margin-top: 15px;">
//                               <p style="font-size: 13px;">Item Description</p>
//                               <textarea name="" id=""></textarea>
//                             </div>

//                             <div class="hero-section-username-input" style="margin-top: 15px;">
//                               <p style="font-size: 13px;">Item Description</p>
//                               <div class="item-listing-image-background">
//                                 <div class="item-listing-img-display">
//                                   <img src="images/Group 8431.png" class="img">
//                                 </div>
//                                 <p>
//                                   For best results, upload a 500 x 500 pixel photo. Larger images will be resized, which may affect quality.
//                                 </p>
                                
//                                 <div class="">
//                                   <label for="sportlight-input-image" class="sportlight-label-btn">
//                                     <svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" width="18px" fill="#6C63FF"><path d="M480-320 280-520l56-58 104 104v-326h80v326l104-104 56 58-200 200ZM240-160q-33 0-56.5-23.5T160-240v-120h80v120h480v-120h80v120q0 33-23.5 56.5T720-160H240Z"/></svg>
//                                     Upload
//                                   </label>
//                                   <input type="file" name="" class="sportlight-input-hide-img" id="sportlight-input-image">
//                                 </div>
//                               </div>

//                               <div class="hero-section-username-input" style="margin-top: 20px;">
//                                 <p style="font-size: 13px;">Item link</p>
//                                 <input type="text" name="" id="">
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                       </div>

//      `;
//     parentContainer.appendChild(postElement);
//   })
// });
// // add/duplicate social link ends here






