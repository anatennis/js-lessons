(function (global) {
    'use strict';
    //function's body

    let slider = {
        init: function (id) {
            console.log(this);
            this.elem = document.getElementById(id);
            this.elem.classList.add('slider');
            this.slides = [];
            this.currentIndex = 0;// = 0;
        },
        add: function (imgPath, text) {
            let img = document.createElement('img'); //<img>
            img.setAttribute('src', imgPath); //<img src='path'>
            img.setAttribute('alt', text);
            this.elem.appendChild(img);
            //<div id='slider'></div>
               //<img src = 'path' alt = 'text'>
            //div
            this.slides.push(img);

        },

        run: function () {
            //отображение следующего слайда
            this.nextSlide();
            setInterval(this.nextSlide.bind(this), 1500)
        },

        nextSlide:function () {
            if (this.currentIndex || this.currentIndex === 0) {
                this.slides[this.currentIndex].classList.remove('active');
                this.currentIndex+=1;
            }

            this.currentIndex = this.currentIndex<this.slides.length ? this.currentIndex : 0;

            this.slides[this.currentIndex].classList.add('active');
        }


    }


    global.sliderInit = slider.init.bind(slider);
    global.sliderAdd = slider.add.bind(slider);
    global.sliderRun = slider.run.bind(slider);

}(window))