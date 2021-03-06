const btnMenu = document.querySelector('.btn-rond-menu');
const nav = document.querySelector('.nav-gauche');
const allItemNav = document.querySelectorAll('.nav-menu-item');
const ligne = document.querySelector('.cont-ligne');

// Reading progress bar

const scrollIndicator = document.querySelector(".scroll-indicator");
const content = document.querySelector(".content");

const observer = new IntersectionObserver(handleIntersect).observe(content)

function handleIntersect(entries){
  const el = entries[0];
  if(el.isIntersecting){
    window.addEventListener("scroll", indicatorAnimation)
  }else if(!el.isIntersecting){
    window.removeEventListener("scroll", indicatorAnimation)
  }
}

function indicatorAnimation() {

  if(window.scrollY > content.offsetTop) {
    const percentage = ((window.scrollY - content.offsetTop) / content.scrollHeight * 100).toFixed(2);
    console.log(percentage/100);
    scrollIndicator.style.transform = `scaleX(${(percentage / 100)})`
  } else {
    scrollIndicator.style.transform = `scaleX(0)`
  }
}

// Menu burger

btnMenu.addEventListener('click', () => {

    ligne.classList.toggle('active')
    nav.classList.toggle('menu-visible')

})

if(window.matchMedia('(max-width: 1300px)')) {

    allItemNav.forEach(item => {
        item.addEventListener('click', () => {
            nav.classList.toggle('menu-visible')
            ligne.classList.toggle('active')        
        })
    })
}

// Animation écriture - https://github.com/tameemsafi/typewriterjs

const txtAnim1 = document.querySelector('.txt-animation1');

let typewriter1 = new Typewriter(txtAnim1, {
    cursor: null,
    loop: false,
    deleteSpeed: 20
})

typewriter1
.pauseFor(1800)
.changeDelay(20)
.typeString('Bonjour à tous, je suis Franck Cario, <br>')
.pauseFor(300)
.typeString(' <strong>Développeur web</strong>')
.start()

const txtAnim2 = document.querySelector('.txt-animation2');

let typewriter2 = new Typewriter(txtAnim2, {
    cursor: null,
    loop: true,
    deleteSpeed: 20
})

typewriter2
.pauseFor(2800)
.deleteChars(5)
.typeString('<span style="color: blue;">Full-Stack</span> !')
.pauseFor(1000)
.deleteChars(12)
.typeString('<span style="color: #27ae60;">HTML / CSS</span> !')
.pauseFor(1000)
.deleteChars(12)
.typeString('<span style="color: #ea39ff;">JavaScript</span> !')
.pauseFor(1000)
.deleteChars(12)
.typeString('<span style="color: #27ae60;">WordPress</span> !')
.pauseFor(1000)
.deleteChars(11)
.typeString('<span style="color: #ff6910;">ExpressJS</span> !')
.pauseFor(1000)
.deleteChars(11)
.typeString('<span style="color: #midnightblue;">ReactJS</span> !')
.pauseFor(1000)
.start()

// Animation Contact

const input_fields = document.querySelectorAll('input');

for(let i = 0; i < input_fields.length; i++) {

    let field = input_fields[i];

    field.addEventListener('input', (e) => {
        if(e.target.value !== ''){
            e.target.parentNode.classList.add('animation')
        } else if (e.target.value == ''){
            e.target.parentNode.classList.remove('animation')
        }
    })
}

// Animation Accueil GreenSock-GSAP + ScrollMagic

const navbar = document.querySelector('.nav-gauche');
const titre = document.querySelector('h1');
const btn = document.querySelectorAll('.btn-acc')
const btnMedias = document.querySelectorAll('.media')
const btnRondAccueil = document.querySelector('.btn-rond')


const TL1 = gsap.timeline({paused: true});

TL1 
.to(navbar, {left: '0px', ease: Power3.easeOut, duration: 0.6})
.from(titre, {y: -50, opacity: 0, ease: Power3.easeOut, duration: 0.4})
.staggerFrom(btn, 1, {opacity: 0}, 0.2, '-=0.30')
.staggerFrom(btnMedias, 1, {opacity: 0}, 0.2, '-=0.75')
.from(btnRondAccueil, {y: -50, opacity:0, ease: Power3.easeOut, duration: 0.4}, '-=1')

window.addEventListener('load', () => {
    TL1.play();
})

// Animation Présentation GSAP + ScrollMagic

const presentationContainer = document.querySelector('.presentation');
const titrePres = document.querySelector('.titre-pres');
const presGauche = document.querySelector('.pres-gauche');
const listePres = document.querySelectorAll('.item-liste');

const tlpres = new TimelineMax();

tlpres
.from(titrePres, {y: -200, opacity: 0, duration: 0.6})
.from(presGauche, {y: -20, opacity: 0, duration: 0.6}, '-=0.5')
.staggerFrom(listePres, 1, {opacity: 0}, 0.2, '-=0.5')

const controller = new ScrollMagic.Controller();

const scene = new ScrollMagic.Scene({
    triggerElement: presentationContainer,
    triggerHook: 0.5,
    reverse: false
})
.setTween(tlpres)
// .addIndicators()
.addTo(controller)

// Animation Portfolio GSAP + ScrollMagic

const portfolioContainer = document.querySelector('.portfolio')
const titrePortfolio = document.querySelector('.titre-port')
const itemPortfolio = document.querySelectorAll('.vague1')

const tlPortfolio = new TimelineMax();

tlPortfolio
.from(titrePortfolio, {y: -50, opacity: 0, duration: 0.5})
.staggerFrom(itemPortfolio, 1, {opacity: 0}, 0.2, '-=0.5')

const scene2 = new ScrollMagic.Scene({
    triggerElement: portfolioContainer,
    triggerHook: 0.5,
    reverse: false
})
.setTween(tlPortfolio)
.addTo(controller)

// Vague 2

const itemPortfolio2 = document.querySelectorAll('.vague2')

const tlPortfolio2 = new TimelineMax();

tlPortfolio2
.staggerFrom(itemPortfolio2, 1, {opacity: 0}, 0.2, '-=0.5')

const scene3 = new ScrollMagic.Scene({
    triggerElement: itemPortfolio,
    triggerHook: 0.2,
    reverse: false
})
.setTween(tlPortfolio2)
.addTo(controller)

// Vague 3

const itemPortfolio3 = document.querySelectorAll('.vague3')

const tlPortfolio3 = new TimelineMax();

tlPortfolio3
.staggerFrom(itemPortfolio3, 1, {opacity: 0}, 0.2, '-=0.5')

const scene4 = new ScrollMagic.Scene({
    triggerElement: itemPortfolio2,
    triggerHook: 0.2,
    reverse: false
})
.setTween(tlPortfolio3)
.addTo(controller)

// Animation Competences GSAP + ScrollMagic

const sectionComp = document.querySelector('.section-range')
const titreComp = document.querySelector('.titre-exp')
const allLabel = document.querySelector('.label-skill')
const allPourcent = document.querySelectorAll('.number-skill')
const allBarres = document.querySelectorAll('.barre-skill')
const allShadowBarres = document.querySelectorAll('.barre-grises')

const tlCompetences = new TimelineMax();

tlCompetences
.from(titreComp, {opacity: 0, duration: 0.6})
.staggerFrom(allLabel, 0.5, {y: -50, opacity: 0}, 0.1, '-=0.5')
.staggerFrom(allPourcent, 0.5, {y: -10, opacity: 0}, 0.1, '-=1')
.staggerFrom(allShadowBarres, 0.5, {y: -10, opacity: 0}, 0.1, '-=1')
.staggerFrom(allBarres, 0.5, {y: -10, opacity: 0}, 0.1, '-=1')

const scene5 = new ScrollMagic.Scene({
    triggerElement: sectionComp,
    reverse: false
})
.setTween(tlCompetences)
.addTo(controller);

// Effet au clic

window.addEventListener('click', (e) => {
    //console.log(e);
    const rond = document.createElement('div');
    rond.className = 'clickAnim';
    rond.style.top = `${e.pageY - 50}px`;
    rond.style.left = `${e.pageX - 50}px`;
    document.body.appendChild(rond);

    setTimeout(() => {
        rond.remove();
    }, 1500)
})
