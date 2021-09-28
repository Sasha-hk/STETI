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
    stepHeight = steps[0].getBoundingClientRect().width;

    if ($.screenSizes.sm - 150 > $.width) {
        setStepSize(stepHeight / 100 * 90)
    } 
    else if ($.screenSizes.md > $.width) {
        setStepSize(stepHeight / 100 * 60)
    }
    else if ($.screenSizes.lg > $.width) {
        setStepSize(stepHeight / 100 * 40)
    }
    else if ($.screenSizes.lg < $.width) {
        setStepSize(stepHeight)
    }  
}  

$.addOnLoad(detectStepSize)
$.addOnResize(detectStepSize)