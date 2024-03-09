const userNameText = document.querySelector('.userName')
const userAgeText = document.querySelector('.userAge')
const saveNameButton = document.querySelector('.saveName')
const saveAgeButton = document.querySelector('.saveAgeButton')

saveNameButton.addEventListener('click', () => {
    const userNameText = document.querySelector('.userName').value
    userNameText.textContent = userName
    localStorage.setItem('userName', userNameText)
})


function displayUserName (){

const nameFromLocalStorage = localStorage.getItem('userName')

if (nameFromLocalStorage) {

    userNameText.textContent = nameFromLocalStorage 

} else {

    userNameText.textContent = 'No name data in local storage'

}}

displayUserName()



saveAgeButton.addEventListener('click', () => {
const userAgeText = document.querySelector('.userAge').value
userAgeText.textContent = userAge
localStorage.setItem('.userAge', userAgeText)
})


function diplayUserAge (){

    const ageFromSessionStorage = sessionStorage.getItem('userAge')

if (ageFromSessionStorage) {

        userAgeText.textContent = ageFromSessionStorage

} else {
    
    userAgeText.textContent = 'No age data in local storage'

}}

diplayUserAge()