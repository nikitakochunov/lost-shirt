(function() {

    const tabs = document.querySelectorAll(".tab__link");
    const activeClass = "tab__item--active";
    const contents = document.querySelectorAll(".content");
    const activeContentClass = "content--visible";

    tabs.forEach(function(tab){
        tab.addEventListener("click", function(e){
            e.preventDefault();
            tabs.forEach(function(link){
                link.closest('.tab__item').classList.remove(activeClass);
            })
            tab.closest('.tab__item').classList.add(activeClass);
            const filterName = tab.closest('.tab__item').getAttribute("data-filter");

            contents.forEach(function(content){
                if (content.classList.contains(filterName)){
                    contents.forEach(function(cnt){
                        cnt.classList.remove(activeContentClass);
                    })
                    content.classList.add(activeContentClass);
                }
            })

        })
    })

}())