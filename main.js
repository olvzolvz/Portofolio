function toggleDetail(e) {
    const target=$(e.target)
    
    console.log($(target).parents(".about-exp-item"))
    const detail = $(item).children(".about-exp-item-detail")

    $(detail).slideToggle()
   
    console.log($(item).children(".about-exp-item-detail"))

}