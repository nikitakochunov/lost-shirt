(function() {

    const texts = document.querySelectorAll('.fade-slider__text');
    let index = 0;
    const activeClass = 'fade-slider__text--visible'

    setInterval(function(){
        texts[index].classList.remove(activeClass);
        index = index + 1;

        if (index + 1 > 2){
            index = 0;
        }
        
        texts[index].classList.add(activeClass);
    },5000)

}())