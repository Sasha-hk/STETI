// base class
class Base {
    constructor(optoins) {
        this.width = window.innerWidth;
        this.height = window.innerHeight;
        this.body = document.body
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

        this.isListen = false

        this.formatRecognition()
    }

    formatRecognition() {
        if (this.screenSizes.md > this.width) {
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
} 


let $ = new Base(),
    n = new Navigation()