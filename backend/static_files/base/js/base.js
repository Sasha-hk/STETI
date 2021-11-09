// base class
class Base {
    constructor(optoins) {
        this.width = window.innerWidth;
        this.height = window.innerHeight;
        this.body = document.body
        this.onLoadLoop = []; 
        this.onResizeLoop = [];
        this.screenSizes = {
            sm: 540,
            md: 720,
            lg: 960,
            xl: 1140,
            xxl: 1320
        }
        this.that = this

        window.addEventListener('resize', this.onResize.bind(this))
        window.addEventListener('load', this.onLoad.bind(this))
        window.addEventListener('resize', this.setVariables)
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
        this.burger = document.querySelector('.burger')
        this.nav    = document.querySelector('.nav')
        this.multi  = document.querySelectorAll('.nav-multi')
        this.head   = document.querySelector('.head')

        this.isListen = false

        this.formatRecognition()
    }

    handleLaptop() {
        window.addEventListener('scroll', handle => {
            if (window.pageYOffset != 0) {
                this.head.classList.add('head-hide')
            }
            else {
                this.head.classList.remove('head-hide')
            }
        })
        
        window.addEventListener('scroll', handle => {
            for (let i = 0; i < this.multi.length; i++) {
                this.multi[i].classList.remove('open')
            }
        })
        
        document.addEventListener('click', (event) => {
            let hide_dropdown = true

            for (let i = 0; i < event.path.length; i++) {
                for (let j = 0; j < event.path.length; j++) {
                    if (event.path[j] == this.multi[i]) {
                        hide_dropdown = false
                    }
                }
            }

            if (hide_dropdown) {
                for (let i = 0; i < this.multi.length; i++) {
                    this.multi[i].classList.remove('open')
                }
            }
        })
    }

    formatRecognition() {
        if (this.screenSizes.lg < this.width) {
            this.handleLaptop()
        }
        
        // handle burger
        this.burger.addEventListener('click', handle => {
            this.nav.classList.toggle('open')
            this.body.classList.toggle('lock-scroll')
        })
        
        // handle multi nav item
        for (let i = 0; i < this.multi.length; i++) {
            this.multi[i].addEventListener('click', handle => {
                for (let j = 0; j < this.multi.length; j++) {
                    if (i != j) {
                        this.multi[j].classList.remove('open')
                    }
                }
                this.multi[i].classList.toggle('open')
            })   
        }
    }
}


let $ = new Base(),
    n = new Navigation()