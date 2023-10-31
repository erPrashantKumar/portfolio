// for funtioning the navbar buttons
function toHome(e){
    const homeBtn = document.querySelector('body').scrollIntoView(true);    
}

function toContact(e){
    let contactPage = document.getElementById('contact-page');
    contactPage.scrollIntoView(true);
}

function linkedin(e){
    window.location.href="https://www.linkedin.com/in/prashant-kumar-954a97218/";
}

function twitter(e){
    window.location.href="https://twitter.com/Prasshy_";
}

function github(e){
    window.location.href="https://github.com/erPrashantKumar";
}

function instagram(e){
    window.location.href="https://www.instagram.com/prasshy_/";
}