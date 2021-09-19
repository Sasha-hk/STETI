// set steps size
let steps      = document.querySelectorAll('.steps-to-success div')
    stepHeight = steps[0].getBoundingClientRect().width

function setStepSize(size) {
    for (let i = 0; i < steps.length; i++) { 
        steps[i].style.height = size + 'px'
    }
}

if (sm > Width) {
    setStepSize(stepHeight)
}
else if (md > Width) {
    setStepSize(stepHeight / 100 * 70)
}
else if (lg > Width) { 
    setStepSize(stepHeight / 100 * 50)
}
