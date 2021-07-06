const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
const symbols = ['.','!','?','<','>',',',':',';','/','[','\\',']','}','{','=','-','+','_',')','(','*','&','^','%','$','#','@']
const numbers = ['0','1','2','3','4','5','6','7','8','9']
const allChars = [...alphabet,...symbols,...numbers]

async function randomWrite(str) {
    // split string into array
    // for length of array, loop through and spin the letters
    const strArr = str.split('')
    const len = strArr.length
    let myName = document.getElementById('profile-name')
    let tmpName = ''

    for ( let x = 0; x < len; x++ ) {
        for( let i = 0 ; i < 10 ; i++ ) {
            let rand = Math.floor(Math.random() * allChars.length)
            myName.innerHTML = tmpName + allChars[rand]
            await sleeper(30);
            if( i === 9 ) {
                tmpName = tmpName + strArr[x]
            }
        }
        myName.innerHTML = tmpName
        await(sleeper(150))
    }
    rollingCaps(myName)
}

const myName = document.getElementById('profile-name')

const randomWrite = str => {
    let strArr = str.split('')
    strArr.forEach(delayLoop(display, 1000));
}

const display = s => myName.innerText = s;

const delayLoop = (fn, delay) => {
    return (name, i) => {
      setTimeout(() => {
        display(name);
      }, i * delay);
    }
  };


/*
const output = document.querySelector("#profile-name");
const display = s => output.innerText = s;
const strArr = str => str.split('')

const delayLoop = (fn, delay) => {
    return (name, i) => {
      setTimeout(() => {
        display(name);
      }, i * delay);
    }
  };

names.forEach(delayLoop(display, 1000));


const isLowerCase = char => char.toLowerCase() === char

async function rollingCaps(el) {
    tmpStr = el.innerHTML
    let tmpArr = tmpStr.split('')

    tmpArr.map(async (char,i) => {
        tmpArr[i] = isLowerCase(char) ? char.toUpperCase() : char.toLowerCase()
        el.innerHTML = tmpArr.join('')
        await sleeper(50)
    })

    // tmpArr.map((char,i) => {
    //     tmpArr[i] = isLowerCase(char) ? char.toUpperCase() : char.toLowerCase()
    //     el.innerHTML = tmpArr.join('')
    // })

/*
    for( let i = 0; i < tmpArr.length ; i++ ) {
        let tmpChar = tmpArr[i]
        tmpArr[i] = isLowerCase(tmpChar) ? tmpChar.toUpperCase() : tmpChar.toLowerCase()
        el.innerHTML = tmpArr.join('')
        await(sleeper(150))
    }
    */
    // for( let i = 0; i < tmpArr.length ; i++ ) {
    //     let tmpChar = tmpArr[i]
    //     tmpArr[i] = isLowerCase(tmpChar) ? tmpChar.toUpperCase() : tmpChar.toLowerCase()
    //     el.innerHTML = tmpArr.join('')
    //     await(sleeper(100))
    // }
//}

function sleeper(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}