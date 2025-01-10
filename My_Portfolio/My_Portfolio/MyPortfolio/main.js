// Changing Navbar bg color on Scroll

window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 0)
})

// Show/Hide faq Answer

const faqs = document.querySelectorAll('.faq');

faqs.forEach(faq => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('open');

        // Changeing Icon on Click
        const icon = faq.querySelector('.faq_icon i');
        if(icon.className == 'fa-solid fa-plus'){
            icon.className = 'fa-solid fa-minus'
        }
        else{
            icon.className = 'fa-solid fa-plus'
        }
    })
})

// Show Hide Navbar menu
const menu = document.querySelector('.nav_menu');
const menuBtn = document.querySelector('#open-menu-btn');
const closeBtn = document.querySelector('#close-menu-btn');

menuBtn.addEventListener('click', () => {
    menu.style.display = "flex";
    closeBtn.style.display = 'inline-block';
    menuBtn.style.display = "none";
})

closeBtn.addEventListener('click', () => {
    menu.style.display = "none";
    menuBtn.style.display = "inline-block";
    closeBtn.style.display = 'none';
})