(function() {
    const colors = document.querySelectorAll('.color__link');
    const pics = document.querySelectorAll('.pic__item')
    const activeClass = 'color--active'
    const activePicClass = 'pic__item--active'

    colors.forEach(function(color){
        color.addEventListener("click", function(e){
            
            e.preventDefault();
            const filterName = color.closest('.color').getAttribute('data-filter');

            colors.forEach(function(link){
                link.closest('.color').classList.remove(activeClass);
            })

            color.closest('.color').classList.add(activeClass);

            pics.forEach(function(pic){
        
                if (pic.classList.contains(filterName)) {
                    
                    pics.forEach(function(picture){
                        picture.classList.remove(activePicClass);
                    })
                    
                    pic.classList.add(activePicClass);
                }
            })
        })
        

    })

    

}())