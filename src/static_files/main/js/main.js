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

    console.log($.width)

    if ($.screenSizes.sm - 150 > $.width) {
        setStepSize(stepHeight / 100 * 90)
        console.log(1)
    } 
    else if ($.screenSizes.md > $.width) {
        setStepSize(stepHeight / 100 * 60)
        console.log(2)
    }
    else if ($.screenSizes.lg > $.width) {
        setStepSize(stepHeight / 100 * 40)
        console.log(3)
    }
    else if ($.screenSizes.lg < $.width) {
        setStepSize(stepHeight)
        console.log(4)
    }  
}  

$.addOnLoad(detectStepSize)
$.addOnResize(detectStepSize)