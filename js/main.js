const homeActive = document.querySelector('.page_link_home');
const aboutActive = document.querySelector('.page_link_about');
const guildsActive = document.querySelector('.page_link_guilds');
const socialActive = document.querySelector('.page_link_social');

const homePageActive = document.querySelector('.page_content_home')
const aboutPageActive = document.querySelector('.page_content_about')
const guildsPageActive = document.querySelector('.page_content_guilds')
const socialsPageActive = document.querySelector('.page_content_socials')

const modLight = document.querySelector('.mod')

const lightSocial = document.querySelector('.social_light')
const darkSocial = document.querySelector('.social_dark')

/* Dark button */
const activeBalss = document.querySelector('.active_ball')
const buttonPage = document.querySelector('.header_button_page')

/* Enble button light mode */

activeBalss.addEventListener("click", () => { 
    const isDark = activeBalss.classList.toggle('enable')
    modLight.classList.toggle('light')
    lightSocial.classList.toggle('none')
    darkSocial.classList.toggle('none')

    if (isDark) { 
        localStorage.setItem('darkMode', 'enable')
    } else{
        localStorage.setItem('darkMode', 'no')
    }
})

/* Check Local Storage */

if(localStorage.getItem('darkMode') === 'enable') { 
    modLight.classList.add('light')
    activeBalss.classList.add('enable')
    lightSocial.classList.add('none')
    darkSocial.classList.remove('none')


} 




/* Hamburger */
const hamburger = document.querySelector('.hamburger')

hamburger.addEventListener("click", () => { 
    hamburger.classList.toggle('active')

    buttonPage.classList.toggle('none')
    
});





homeActive.onclick = function () { 
    homeActive.classList.add('actives')
    aboutActive.classList.remove('actives')
    guildsActive.classList.remove('actives')
    socialActive.classList.remove('actives')

    homePageActive.classList.remove('none')
    aboutPageActive.classList.add('none')
    guildsPageActive.classList.add('none')
    socialsPageActive.classList.add('none')

}

aboutActive.onclick = function () { 
    aboutActive.classList.add('actives')
    homeActive.classList.remove('actives')
    guildsActive.classList.remove('actives')
    socialActive.classList.remove('actives')

    aboutPageActive.classList.remove('none')
    homePageActive.classList.add('none')
    guildsPageActive.classList.add('none')
    socialsPageActive.classList.add('none')


}
guildsActive.onclick = function () { 
    guildsActive.classList.add('actives')
    aboutActive.classList.remove('actives')
    homeActive.classList.remove('actives')
    socialActive.classList.remove('actives')

    guildsPageActive.classList.remove('none')
    homePageActive.classList.add('none')
    aboutPageActive.classList.add('none')
    socialsPageActive.classList.add('none')


}
socialActive.onclick = function () { 
    socialActive.classList.add('actives')
    aboutActive.classList.remove('actives')
    guildsActive.classList.remove('actives')
    homeActive.classList.remove('actives')

    socialsPageActive.classList.remove('none')
    guildsPageActive.classList.add('none')
    homePageActive.classList.add('none')
    aboutPageActive.classList.add('none')
}
