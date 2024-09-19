/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')
/*==================== display image qr ====================*/
    document.addEventListener('DOMContentLoaded', function () {
    // Function to open the modal
    function openModal(imageSrc) {
      const modal = document.getElementById('imageModal');
      const modalImage = document.getElementById('modalImage');
      const overlayText = document.querySelector('.overlay-text');
      
      modal.style.display = 'flex'; // Show the modal
      modalImage.src = imageSrc; // Set the image source
      overlayText.style.display = 'block'; // Show the overlay text
    }
  
   // Function to close the modal
   function closeModal() {
    const modal = document.getElementById('imageModal');
    const overlayText = document.querySelector('.overlay-text');
    
    modal.style.display = 'none'; // Hide the modal
    overlayText.style.display = 'none'; // Hide the overlay text
}

// Add event listeners to the images
document.querySelectorAll('.payment__item').forEach(item => {
    item.addEventListener('click', function () {
        const imageSrc = this.querySelector('.payment__img').src;
        openModal(imageSrc);
    });
});

// Add event listener to the close button
document.querySelector('.close').addEventListener('click', closeModal);

// Close modal when clicking outside the image
document.getElementById('imageModal').addEventListener('click', function (event) {
    if (event.target === this) {
        closeModal();
    }
});
});
  
/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
    const scrollDown = window.scrollY

  sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id'),
              sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')
        
        if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
            sectionsClass.classList.add('active-link')
        }else{
            sectionsClass.classList.remove('active-link')
        }                                                    
    })
}
window.addEventListener('scroll', scrollActive)

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
//     reset: true
});

sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text',{}); 
sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img',{delay: 400}); 
sr.reveal('.home__social-icon',{ interval: 200}); 
sr.reveal('.skills__data, .work__img, .contact__input',{interval: 200}); 
