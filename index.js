const yesBtn = document.querySelector('#yesBtn');


yesBtn.addEventListener('click',function () {
    alert('Sabia que ibas a decir que si, -sigue dandole en aceptar')
});

yesBtn.addEventListener('click',function () {
    alert('me dices cuantas veces le diste al no ')
});

yesBtn.addEventListener('click',function () {
    alert('Ahora enserio si no quieres no hay problema  pero piensalo y me dices  por whatsap o en persona como quieras no hay problema')
});

yesBtn.addEventListener('click',function () {
    alert(' mira soy bueno haciendo estas cosas :)')
});

yesBtn.addEventListener('click',function () {
    alert(' bueno mucho texto  :)')
});


const noBtn = document.querySelector('#noBtn');

noBtn.addEventListener('mouseover', function () {
    const randomX = parseInt(Math.random()*100);
    const randomY = parseInt(Math.random()*100);
    noBtn.style.setProperty('top',randomY+'%');
    noBtn.style.setProperty('left',randomX+'%');
    noBtn.style.setProperty('transform',`translate(-${randomX}%,-${randomY}%)`);
})