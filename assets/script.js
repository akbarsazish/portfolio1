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
    img: './assets/images/starfoods.png',
    demoLink: 'https://starfoods.ir',
    sourceLink: 'https://github.com/akbarsazish/starfoods',
    ccompany:'Hajizada Trading',
    positon: 'Front-end Developer',
    year: '2022'
  },
  {
    id: '2',
    title: 'Sazish Academy',
    desc: 'Sazish Academy: Online platform for web development and programming. Learn HTML, CSS, JavaScript, PHP, ASP.NET, and more. Front-end, back-end, mobile app, and web design tutorials. Build dynamic websites and enhance coding skills.',
    technogies: ['CSS', 'HTML', 'JavScript'],
    img: './assets/images/sazish-academy.png',
    demoLink: 'https://akbarsazish.github.io/Sazish-Academy',
    sourceLink: 'https://github.com/akbarsazish/Sazish-Academy',
    ccompany:'Microverse',
    positon: 'Student',
    year: '2023'
  },
  {
    id: '3',
    title: 'Awesome Books',
    desc: 'This website is a book collection manager. It lets you add books with their titles and authors to a list and remove them when needed. The data is stored in the browser memory using localStorage for easy access and persistence. It is a simple and efficient tool for keeping track of your books.',
    technogies: ['HTML', 'CSS', 'JavScript'],
    img: './assets/images/awesome-book.png',
    demoLink: 'https://akbarsazish.github.io/Awesome-Books-ES6/',
    sourceLink: 'https://github.com/akbarsazish/Awesome-Books-ES6',
    ccompany:'Microvers',
    positon: 'Student',
    year: '2023'
  },
  {
    id: '4',
    title: 'To Do List',
    desc: 'To-Do List is a web-based application designed to help individuals manage and organize their tasks effectively. It offers a user-friendly interface that allows users to create, track, and prioritize their to-do items conveniently.',
    technogies: ['HTML', 'CSS', 'JavScript', '', ''],
    img: './assets/images/todo-list.png',
    demoLink: 'https://akbarsazish.github.io/To-Do-List/',
    sourceLink: 'https://github.com/akbarsazish/To-Do-List',
    ccompany:'Microverse',
    positon: 'Student',
    year: '2023'
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
