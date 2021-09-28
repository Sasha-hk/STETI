// base class
class Base {
    constructor(optoins) {
        this.width = window.innerWidth;
        this.height = window.innerHeight;
        this.onLoadLoop = [[this.setVariables, null]]; 
        this.onResizeLoop = [[this.setVariables, null]];
        this.screenSizes = {
            sm: 540,
            md: 720,
            lg: 960,
            xl: 1140,
            xxl: 1320
        }
        this.that = this


        window.addEventListener('resize', this.onResize.bind(this))
        // window.onload = this.onLoad; 
        window.addEventListener('load', this.onLoad.bind(this))
    }

    // set variables
    setVariables() {
        this.width = window.innerWidth;
        this.height = window.innerHeight;
    }

    // on Load / Resize
    addOnLoad(functionName, args = null) { 
        if (args) {
            this.onLoadLoop.push([functionName, args]);
        }
        else { 
            this.onLoadLoop.push([functionName, null]); 
        }
    }
    addOnResize(functionName, args = null) { 
        if (args) {
            this.onResizeLoop.push([functionName, args]);
        }
        else {
            this.onResizeLoop.push([functionName, null]);
        }
    }


    onLoad() { 
        this.onLoadLoop.forEach(element => {
            if (element[1]) {
                element[0](element[1])
            }
            else {
                element[0]()
            }
        })
    }
    onResize() { 
        console.log(this.onResizeLoop)
        this.onResizeLoop.forEach(element => {
            if (element[1]) {
                element[0](element[1])
            }
            else {
                element[0]()
            }
        })
    }
}
  
class Navigation extends Base {
    constructor() {
        super();
        this.burger     = document.querySelector('.burger')
        this.body       = document.querySelector('body')
        this.multi_nav  = document.querySelectorAll('.multi-nav')
        this.navigation = document.querySelector('.navigation')

        this.isListen = false

        this.formatRecognition()
        this.addOnResize(this.formatRecognition.bind(this))
    }

    handleTable() {

    }

    handlePC() {

    }
    
    formatRecognition() {   
        if (window.innerWidth <= this.screenSizes.lg) {
            if (!this.isListen) {  
                this.isListen = true   
                
                // multi navigation
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

                // burger
                this.burger.addEventListener('click', this.burgerHandler.bind(this), false)  
            }
        }
        else { 
            this.navigationRemoveActive() 
        }
    }

    // handlers 
    burgerHandler() {
        this.navigation.classList.toggle('navigation-active')
        this.body.classList.toggle('lock-scroll')
    }
    navigationRemoveActive() {
        this.navigation.classList.remove('navigation-active')
        this.body.classList.remove('lock-scroll')
        
        for (let i = 0; i < this.multi_nav.length; i++) {
            this.multi_nav[i].classList.remove('active')
        } 
    }
} 


let $ = new Base(),
    n = new Navigation()