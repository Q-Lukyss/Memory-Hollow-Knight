let listeCartes = ['Hollow Knight', 'Sly', , 'Dung', 'Cornifer', 'Hornet', 'Iselda', 'Little-Fool', 'Zote', 'Hollow Knight', 'Sly', 'Dung', 'Cornifer', 'Hornet',  'Iselda', 'Little-Fool', 'Zote']
let newListeCartes = undefined
let count = 0;
const ALLOWED_ClIC = 2;
let currentCliclNb = 0;

const startGame = () => {
    count = 0;
    document.querySelector('.count').textContent = count;
    document.querySelector('main').innerHTML = ''
    newListeCartes = listeCartes.sort((a, b) => 0.5 - Math.random());
    newListeCartes.forEach(name => {
        switch(name){
            case 'Hollow Knight':
                document.querySelector('main').innerHTML += '<div class="image-container" onclick="handleClique(this)"><img class="hidden" src="./img/HollowVessel.webp" alt="" /></div>'
                break;
            case 'Sly':
                document.querySelector('main').innerHTML += '<div class="image-container" onclick="handleClique(this)"><img class="hidden" src="./img/Sly.webp" alt="" /></div>'
                break;
            case 'Dung':
                document.querySelector('main').innerHTML += '<div class="image-container" onclick="handleClique(this)"><img class="hidden" src="./img/B_Dung_Defender.webp" alt="" /></div>'
                break;
            case 'Cornifer':
                document.querySelector('main').innerHTML += '<div class="image-container" onclick="handleClique(this)"><img class="hidden" src="./img/Cornifer.webp" alt="" /></div>'
                break;
            case 'Iselda':
                document.querySelector('main').innerHTML += '<div class="image-container" onclick="handleClique(this)"><img class="hidden" src="./img/Iselda.webp" alt="" /></div>'
                break;
            case 'Little-Fool':
                document.querySelector('main').innerHTML += '<div class="image-container" onclick="handleClique(this)"><img class="hidden" src="./img/Little-Fool.webp" alt="" /></div>'
                break;
            case 'Zote':
                document.querySelector('main').innerHTML += '<div class="image-container" onclick="handleClique(this)"><img class="hidden" src="./img/Zote.webp" alt="" /></div>'
                break;
            case 'Hornet':
                document.querySelector('main').innerHTML += '<div class="image-container" onclick="handleClique(this)"><img class="hidden" src="./img/Hornet.webp" alt="" /></div>'
                break;
        }
    })
}
const handleClique = (lui) => {
    currentCliclNb += 1;
    console.log(currentCliclNb);
    if (currentCliclNb < 3) {
        console.log(lui.childNodes[0]);
        lui.style.animation = 'flip .5s linear 0s forwards' 
        setTimeout(() => {
            lui.childNodes[0].className = 'visible'
            verifyPaire()
        }, 500);
    }
}
const clear = () => {
    console.log('clear')
    currentCliclNb = 0;
    setTimeout(() => {
        document.querySelectorAll('.visible').forEach((el) => el.parentElement.style.animation = 'flip2 .5s linear 0s forwards');
        document.querySelectorAll('.visible').forEach((el) => el.className = 'hidden');
        document.querySelectorAll('.hidden').forEach((el) => el.parentElement.setAttribute('onclick', 'handleClique(this)'));
    }, 1000)
   
    
}
const verifyPaire = () => {
    console.log('verify paire');
    console.log(document.getElementsByClassName('visible').length);
    if(document.getElementsByClassName('visible').length == 2){
        console.log('2 visible')
        document.querySelectorAll('.hidden').forEach((el) => el.parentElement.removeAttribute('onclick'));
        count += 1
        document.querySelector('.count').textContent = count; 
        if(document.getElementsByClassName('visible')[0].src == document.getElementsByClassName('visible')[1].src ){
            currentCliclNb = 0;
            console.log('deux meme')
            document.querySelectorAll('.visible').forEach((el) => el.className = 'found')
            document.querySelectorAll('.hidden').forEach((el) => el.parentElement.setAttribute('onclick', 'handleClique(this)'));
            document.querySelectorAll('.found').forEach((element) => {
                element.parentElement.style.animation = 'none';
                element.style.transform = 'rotateY(-180deg)';
                element.parentElement.style.background = 'none';
                element.parentElement.style.backgroundColor = 'lightgreen';
                element.parentElement.removeAttribute('onclick');
            })
        }else clear()
    }
}

const reveal = () => {
    currentCliclNb = 0;
    document.querySelectorAll('.hidden').forEach((el) => el.className = 'found')
    document.querySelectorAll('.found').forEach((element) => {
        element.parentElement.style.animation = 'none';
        element.style.transform = 'rotateY(-180deg)';
        element.parentElement.style.background = 'none';
        element.parentElement.style.backgroundColor = 'lightgreen';
        element.parentElement.removeAttribute('onclick');
    })
}

startGame();