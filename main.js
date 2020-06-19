// Create the Button
let btn = document.createElement('button')
btn.append('Remove Main')

// Create Main
let addMain = document.createElement('main')

// Prepend the elements to top of the body so script is at the bottom
document.body.prepend(btn, addMain)

// Add Image tag to main
let imgElement = document.createElement('img')
addMain.append(imgElement)
imgElement.setAttribute('src','./PL-back.png')
imgElement.setAttribute('alt', 'EPL is Back Pulisic')
imgElement.setAttribute('class', 'image')

// Add URL to main
let eplURL = document.createElement('a')
addMain.append(eplURL)
eplURL.append('English Premier League')
eplURL.setAttribute('href', 'https://www.premierleague.com/')
eplURL.setAttribute('target','_blank')
eplURL.setAttribute('class', 'link')

// Click event to remove main
let removeBtn = document.querySelector('button')

removeBtn.addEventListener('click', function() {
    addMain.remove()
})