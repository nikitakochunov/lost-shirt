(function() {
    const sizes = document.querySelectorAll('.size__link');
    const activeClass = 'size--active'

    /*проверка наличия размера — если размера нет, 
    то с него снимается клик и его нельзя выбрать*/
    sizes.forEach(function(size){
        const filterName = size.closest('.size').getAttribute("class");
        if (filterName == 'size size--not-available') {
            size.classList.add('disabled');
        }
    })

    sizes.forEach(function(size){
        size.addEventListener("click", function(e){
            e.preventDefault();
            sizes.forEach(function(link){
                link.closest('.size').classList.remove(activeClass);
            })
            const filterName = size.getAttribute("class");
        

        if (filterName != 'size size--not-available'){
            size.closest('.size').classList.add(activeClass);
        }
            
        })
    })
}())