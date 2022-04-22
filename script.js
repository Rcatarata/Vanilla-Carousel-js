const imageContainer = document.querySelector('.image--container');
const rightButton = document.querySelector('.righter')
const leftButton = document.querySelector('.lefter')
let count = 0;

function right(){
    if (count >= (imageContainer.children.length-1)){ 
        count = 0
        for (let i = 0; i < imageContainer.children.length; i++){
            imageContainer.children[i].hidden = true;
        }
        imageContainer.children[count].hidden = false;
    } else {
        imageContainer.children[count].hidden = true;
        imageContainer.children[count+1].hidden = false;
        count++
    }
    console.log(count)
}

function left(){
    if (imageContainer.children[0].hidden == false){
        count = imageContainer.children.length-1
        imageContainer.children[0].hidden = true
        imageContainer.children[count].hidden = false    
    } else {
        imageContainer.children[count].hidden = true;
        imageContainer.children[count-1].hidden = false;
        count--
    }
    console.log(count)
}

function keypress(e) {
    if (e.key === 'ArrowRight'){
        right()
    } else if (e.key === 'ArrowLeft') {
       left()
    }
}

document.addEventListener('keydown', keypress)

rightButton.addEventListener('click', right)
leftButton.addEventListener('click', left)

