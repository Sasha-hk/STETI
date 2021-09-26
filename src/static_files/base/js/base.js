// base class
class Base {
    constructor(optoins) {
        this.width = window.innerWidth;
        this.height = window.innerHeight;
        this.onLoadLoop = [];
        this.onResizeLoop = [];

        

        window.addEventListener('resize', this.onResize.bind(this))
        window.onload = this.onLoad;
        
        console.log(1)
    }

    addOnLoad(onLoads) {
        this.onLoadLoop.push(onLoads);
        console.log(2)
    }

    addOnResize(onResize) {
        this.onResizeLoop.push(onResize);
    }

    onLoad() {
        console.log(111111112)
        this.onLoadLoop.forEach(element => {
            element()
        })
    }

    onResize() {
        this.onResizeLoop.forEach(element => {
            element()
        }) 
    }
}

let x = new Base()

function lll() {
    console.log(1123)
}
x.addOnResize(lll)
x.addOnLoad(lll)




// screen sizing
let sm  = 540,
    md  = 720,
    lg  = 960,
    xl  = 1140,
    xxl = 1320,

    Width = window.innerWidth,
    Height = window.innerHeight;

// current screen size


// navigation 
let node = {}
class Navigation {
    constructor() {
        this.burger     = document.querySelector('.burger')
        this.body       = document.querySelector('body')
        this.multi_nav  = document.querySelectorAll('.multi-nav')
        this.navigation = document.querySelector('.navigation')

        this.that = this
        this.isListen = false

        this.formatRecognition()
    }

    handleMobile() {
        for (let i = 0; i < this.multi_nav.length; i++) {
            this.multi_nav[i].children[0].addEventListener('click', click => {
                for (let j = 0; j < this.multi_nav.length; j++) {
                    if (i != j) {
                        this.multi_nav[j].classList.remove('active')
                    }
                }
                this.multi_nav[i].classList.toggle('active')
            })
        } 
    }

    handleTable() {

    }

    handlePC() {

    }
    
    formatRecognition() { 
        if (window.innerWidth <= lg) {
            this.handleMobile()   
            if (!this.isListen) {  
                this.isListen = true   
                this.burger.addEventListener('click', this.burgerHandler.bind(null, this.that), false)  
            }
        }
        else { 
            this.burger.removeEventListener('click', this.burgerHandler, false)  
        }
    }

    burgerHandler(that) {
        that.navigation.classList.toggle('navigation-active')
        that.body.classList.toggle('lock-scroll')
    }
    
} 

function main() {
    node['navigation'] = new Navigation();
}

function onResize() {
    node['navigation'].formatRecognition()
    
    Width = window.innerWidth,
    Height = window.innerHeight; 
}

window.onload = main 
 
window.addEventListener('resize', onResize)