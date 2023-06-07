// this function open mobile menu
function openMobileMenu(){
    document.getElementById("mobile-menu").style.width = "100%";
    document.getElementById("close-icon").style.display = "block";
}

//this function close mobile menu
function closeMobileMenu(){
    document.getElementById("mobile-menu").style.width = "0%";
    document.getElementById("close-icon").style.display = "none";
}

const data = [
  {
    id: '1',
    title: 'Starfoods',
    desc: 'Starfoods is a leading online shopping site offering a vast selection of products. With a user-friendly interface, it provides a seamless shopping experience. From  home goods to toys, Starfoods has it all. Enjoy secure payments, fast shipping, and excellent customer service. Start exploring and find your perfect purchase today!',
    technogies: ['CSS', 'HTML', 'JavScript', 'Bootstrap', 'SQL Server'],
    img: './assets/images/snapshoot-portfolio.png',
    demoLink: 'https://starfoods.ir',
    sourceLink: 'https://github.com/akbarsazish/starfoods',
    ccompany:'Hajizada Trading',
    positon: 'Front-end Developer',
    year: '2022'
  },
  {
    id: '2',
    title: 'Second Project',
    desc: 'A daily selection of privately personalized reads; no accounts or sign-ups required. A daily selection of privately personalized reads; no accounts or sign-ups required. A daily selection of privately personalized reads; no accounts or sign-ups required.',
    technogies: ['Ruby on rails', 'CSS', 'HTML', 'JavScript'],
    img: './assets/images/snapshoot portfolio-des.svg',
    demoLink: 'https://starfoods.ir',
    sourceLink: 'https://starfoods.ir',
    ccompany:'Alborz1',
    positon: 'back end dev1',
    year: '20211'
  },
  {
    id: '3',
    title: 'CRM Project',
    desc: 'In this project, we will build a simple HTML list of To Do tasks. The list will be styled according to the specifications listed later in this lesson. This simple web page will be built using webpack and served by a webpack dev server.',
    technogies: ['Ruby on rails', 'CSS', 'HTML', 'JavScript'],
    img: './assets/images/snapshoot-portfolio-des-one.svg',
    demoLink: 'https://star4.ir',
    sourceLink: 'https://star4.ir',
    ccompany:'Alborz2',
    positon: 'back end dev2',
    year: '20212'
  },
  {
    id: '4',
    title: 'Khooshpul',
    desc: 'A simple book store with vanilla JavaScript. You can select multiple numbers of books. Adding them to cart, removing them from cart, decreasing and increasing the cart amount and calculating the total cost of the cart.',
    technogies: ['Ruby on rails', 'CSS', 'HTML', 'JavScript'],
    img: './assets/images/snapshoot portfolio-des-two.svg',
    demoLink: 'https://khooshpul.com',
    sourceLink: 'https://khooshpul.com',
    ccompany:'Alborz3',
    positon: 'back end dev3',
    year: '20213'
  },
  {
    id: '5',
    title: 'Second Project',
    desc: 'A daily selection of privately personalized reads; no accounts or sign-ups required. A daily selection of privately personalized reads; no accounts or sign-ups required. A daily selection of privately personalized reads; no accounts or sign-ups required.',
    technogies: ['Ruby on rails', 'CSS', 'HTML', 'JavScript'],
    img: './assets/images/snapshoot portfolio-des.svg',
    demoLink: 'https://starfoods.ir',
    sourceLink: 'https://starfoods.ir',
    sourceLink: 'https://khooshpul.com',
    ccompany:'Alborz4',
    positon: 'back end dev4',
    year: '20214'
  },

];


const porjectModal = document.getElementById('myProjects');

function showProjects(){

    porjectModal.innerHTML=data.map((project)=>{
        const {
            id, title, desc, technogies, img, demoLink, sourceLink, ccompany, positon, year
          } = project;

          let imgFirst = "";
          let imgSecond =""
          if(id % 2 === 0){
            imgFirst = `<div class="snapshoot for-bg-img" id="snapshoot-profile">
                           <img class="porject-img" src="${img}" alt="image">
                        </div>`
          }else if( id % 2 !== 0){
            imgSecond = `<div class="snapshoot for-bg-img" id="snapshoot-profile">
                           <img class="porject-img" src="${img}" alt="image">
                        </div>`
           }

          return  `
                <div class="snapshoot-card">
                     ${imgFirst} 
                    <div class="tonic-part">
                        <h2 class="headline-2"> ${title} </h2>
                        <ul class="worke-expr">
                            <li class="exp-items exp-item1"> ${ccompany}  </li>
                            <li class="exp-items exp-item2"> ${positon}  </li>
                            <li class="exp-items exp-item3"> ${year}  </li>
                        </ul>
                        <p class="exp-info text-color"> ${desc} </p>
                        <ul class="work-tech">
                            <li class="tech-items"> ${technogies[0]} </li>
                            <li class="tech-items"> ${technogies[1]} </li>
                            <li class="tech-items"> ${technogies[2]}  </li>
                            <li class="tech-items"> ${technogies[3]}  </li>
                            <li class="tech-items"> ${technogies[4]}  </li>
                        </ul>
                         <button type="button" id="seeProject" onclick="showProjectDetails('prDetails'+${id})" class="see-project btnHover btnPressed btnDisabled"> See Project </button> 
                    </div>
                    ${imgSecond}
                 </div>
            

                <div id="prDetails${id}" class="modal">
                  <div class="porject-details" id="porject-details">
                    <span class="close-popup">
                        <img id="close-popup" onclick="hideProjectDetails('prDetails'+${id})" class="icon-cancel" src="assets/images/icon-cancel.svg" alt="cancel">
                    </span>
                    <h2 class="headline-2"> ${title} </h2>
                    <ul class="worke-expr-details">
                        <li class="exp-detail-items exp-item1"> ${ccompany}  </li>
                        <li class="exp-detail-items exp-item2"> ${positon} </li>
                        <li class="exp-detail-items exp-item3"> ${year}  </li>
                    </ul>
                    <div class="details-img-wrapper">
                        <img class="details-img" src="${img}" alt="image">
                    </div>
                    <div class="project-info">
                        <div class="info-text">
                            <p> ${desc} </p>
                        </div>
                        <div class="tech-and-btn">
                            <ul class="work-tech popupTech">
                                <li class="tech-items"> ${technogies[0]} </li>
                                <li class="tech-items"> ${technogies[2]} </li>
                                <li class="tech-items"> ${technogies[3]}  </li>
                                <li class="tech-items"> ${technogies[4]}</li>
                            </ul>
                            <span class="button-container">
                                <button type="button" class="popupBtn see-project btnHover btnPressed btnDisabled"> <a href="${demoLink}"> See live  <img src="assets/images/Icon-go-live.svg" alt="see live" class="see-live-img"> </a> </button>
                                <button type="button" class="popupBtn see-project btnHover btnPressed btnDisabled"> <a href="${sourceLink}"> See Source <img src="assets/images/icon-gitHub.png" alt="see source" class="see-source-img"> </a> </button>
                        </span>
                        </div>
                    </div>
                  </div>
               </div>
            <div id="back-drop"> </div>
         `;
         
    });
}

showProjects();

function showProjectDetails(projectId) {
  var modal = document.getElementById(projectId);
  modal.classList.add("show-modal");
}

function hideProjectDetails(projedctId){
    document.getElementById(projedctId).style.display="none";
}

/**
  * Form Validation function
*/

function validateForm(event) {
    var email = document.getElementById("email");
    var errorMessage = document.getElementById("error-msg");
    var email = email.value;
    
    if (email !== email.toLowerCase()) {
      errorMessage.textContent = "Email must be in lowercase.exp: ali@gmail.com";
      errorMessage.style.display = "block";
      event.preventDefault(); 
    } else {
      errorMessage.style.display = "none";
    }
  }



/**
  * local storage funcitons are geting data from form and save it into brower
*/


  // Get data from form feilds
  function loadFormData() {
    var formData = localStorage.getItem('formData'); 

    if (formData) {
      formData = JSON.parse(formData); 

      document.getElementById('name').value = formData.name; 
      document.getElementById('email').value = formData.email;
      document.getElementById('message').value = formData.message;
    }
  }
  
  function storeFormData() {
    var formData = {
      name: document.getElementById('name').value, 
      email: document.getElementById('email').value, 
      message: document.getElementById('message').value 
    };

    localStorage.setItem('formData', JSON.stringify(formData));
  }

  //when page load it load form data from local storage
  window.onload = function() {
    loadFormData();
  };

   // when any input field change it will save the data to local storage
   var formFields = document.querySelectorAll('input, textarea');
   formFields.forEach(function(field) {
     field.addEventListener('input', function() {
       storeFormData();
     });
   });
