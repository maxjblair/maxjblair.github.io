const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
const symbols = ['.','!','?','<','>',',',':',';','/','[','\\',']','}','{','=','-','+','_',')','(','*','&','^','%','$','#','@']
const numbers = ['0','1','2','3','4','5','6','7','8','9']
const allChars = [...alphabet,...symbols,...numbers]

async function slowWriter(str) {
    // split string into array
    // for length of array, loop through and spin the letters
    const myName = document.getElementById('profile-name')
    const strArr = str.split('')
    let tmpName = ''

    for ( x = 0; x < strArr.length; x++ ) {
        for ( i = 0; i < 10 ; i++ ) {
            let rand = Math.floor(Math.random() * allChars.length)
            myName.innerText = tmpName + allChars[rand]
            if( i === 9 ) {
                tmpName = tmpName + strArr[x]
            }
            strArr[x] !== ' ' ? await sleeper(50) : ''
        }
        myName.innerText = tmpName
    }
    document.getElementById('profile-title').classList.remove('opacity-0')
    document.getElementById('profile-title').classList.add('fade-in-text')
}

const isLowerCase = char => char.toLowerCase() === char

async function rollingCaps(el) {
    let tmpStr = el.innerText
    let tmpArr = tmpStr.split('')

    for( let i = 0; i < tmpArr.length ; i++ ) {
        let tmpChar = tmpArr[i]
        tmpArr[i] = isLowerCase(tmpChar) ? tmpChar.toUpperCase() : tmpChar.toLowerCase()
        el.innerHTML = tmpArr.join('')
        await(sleeper(150))
    }

    for( let i = 0; i < tmpArr.length ; i++ ) {
        let tmpChar = tmpArr[i]
        tmpArr[i] = isLowerCase(tmpChar) ? tmpChar.toUpperCase() : tmpChar.toLowerCase()
        el.innerHTML = tmpArr.join('')
        await(sleeper(100))
    }
}

function sleeper(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}

function typeCode() {
    
}