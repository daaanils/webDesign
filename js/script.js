// const questions = document.querySelectorAll('.question-answer');

// questions.forEach(function(question) {
//     const btn = question.querySelector('.question-btn');
//     btn.addEventListener("click", function() {
//         questions.forEach(function(item) {
//             if (item !== question) {
//                 item.classList.remove("show-text");
//             }
//         })
//         question.classList.toggle("show-text");
//     })
// })

// // FAQ

// const buttons = document.querySelectorAll('button');

// buttons.forEach( button =>{
//     button.addEventListener('click',()=>{
//         const faq = button.nextElementSibling;
//         const icon = button.children[1];

//         faq.classList.toggle('show');
//         icon.classList.toggle('rotate');
//     })
// } )


// User categories

const userIcon = document.querySelector('.user-icon');
const userDropdown = document.querySelector('.user-options');

userIcon.addEventListener('click', () => {
  userDropdown.style.display = userDropdown.style.display === 'block' ? 'none' : 'block';
});

document.addEventListener('click', (event) => {
  const target = event.target;
  const isClickInside = userIcon.contains(target) || userDropdown.contains(target);
  if (!isClickInside) {
    userDropdown.style.display = 'none';
  }
});

const wishlistHeader = document.querySelector('.wishlist-header');
const wishlistEmpty = document.querySelector('.wishlist-empty');

wishlistHeader.addEventListener('click', () => {
  wishlistHeader.classList.toggle('wishlist-show-empty');
});

// user options
const container = document.querySelector('.container');
const icon = container.querySelector('.icon');

icon.addEventListener('click', () => {
  container.classList.toggle('show-content');
});
  
//scrolling effect

window.addEventListener('scroll', reveal);

function reveal() {
  let reveals = document.querySelectorAll('.reveal');

  for(let i = 0; i < reveals.length; i++) {
    let windowheight = window.innerHeight;
    let revealtop = reveals[i].getBoundingClientRect().top;
    let revealpoint = 150;

    if(revealtop < windowheight - revealpoint) {
      reveals[i].classList.add('active');
    }
    else {
      reveals[i].classList.remove('active');
    }
  }


}