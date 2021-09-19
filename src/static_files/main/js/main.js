// set steps size
let steps      = document.querySelectorAll('.steps-to-success div')
    stepHeight = steps[0].getBoundingClientRect().width

function setStepSize(size) {
    for (let i = 0; i < steps.length; i++) { 
        steps[i].style.height = size + 'px'
    } 
}

function detectStepSize() {
    steps      = document.querySelectorAll('.steps-to-success div')
    stepHeight = steps[0].getBoundingClientRect().width
     
    if (sm - 150 > Width) {
        setStepSize(stepHeight / 100 * 90)
    } 
    else if (md > Width) {
        setStepSize(stepHeight / 100 * 60)
    }
    else if (lg > Width) { 
        setStepSize(stepHeight)
    }
    else if (lg < Width) { 
        setStepSize(stepHeight)
    }  
}  

detectStepSize()

window.addEventListener('resize', detectStepSize)