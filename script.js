// mau
let mau=document.getElementById('mau')

mau.addEventListener('click', () => {
    document.getElementById('popupmau').style.display='flex'
    document.getElementById('popup').style.display='flex'

})
let tutupmau=document.getElementById('closemau')
tutupmau.addEventListener('click', () => {
    document.getElementById('popupmau').style.display='none'
    document.getElementById('popup').style.display='none'
})


// gamau
let gamau=document.getElementById('gamau')

gamau.addEventListener('click', () => {
    document.getElementById('popupgamau').style.display='flex'
    document.getElementById('popupdua').style.display='flex'

})
let tutupgamau=document.getElementById('closegamau')
tutupgamau.addEventListener('click', () => {
    document.getElementById('popupgamau').style.display='none'
    document.getElementById('popupdua').style.display='none'
})


