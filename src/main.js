import * as bootstrap from 'bootstrap'


//--------*--------sidebar--------*--------
const sidebarToggle = document.getElementById('sidebar-toggle')
const sidebarCloseBtn = document.getElementById('sidebar-close-btn')
const sidebarOffcanvas = document.getElementById("sidebar-offcanvas")





sidebarToggle.addEventListener('click', ()=>{           //ensures that the sidebar is visible
    if (!sidebarOffcanvas.classList.contains('show')){ 
        sidebarOffcanvas.classList.add('show')
    }
    sidebarOffcanvas.classList.remove('hiding')   
})



sidebarCloseBtn.addEventListener('click', () => {          //closes the entire side-menu
    if (sidebarOffcanvas.classList.contains('active')){
        sidebarOffcanvas.classList.remove('active')
    }
    sidebarOffcanvas.classList.add('hiding')
    shopOffcanvas.classList.add('hiding')
    aboutOffcanvas.classList.add('hiding')
})
//--------*--------sidebar--------*--------







//--------*--------shop--------*--------
const shopToggle = document.getElementById("shop-toggle")
// 
const shopOffcanvas = document.getElementById("shop-offcanvas")



shopToggle.addEventListener('click', ()=>{
    if (!sidebarOffcanvas.classList.contains('active')){
        sidebarOffcanvas.classList.add('active')
    }
    sidebarOffcanvas.classList.add('active')


    // if (!shopOffcanvas.classList.contains('hidding')){
    //     shopOffcanvas.classList.remove('hiding')
    // }else{
    //     shopOffcanvas.classList.add('hiding')

    // }
    shopOffcanvas.classList.remove('hiding')




})
//--------*--------shop--------*--------







//--------*--------about--------*--------
const aboutToggle = document.getElementById("about-toggle")
//
const aboutOffcanvas = document.getElementById("about-offcanvas")




aboutToggle.addEventListener('click', ()=>{
    if (!sidebarOffcanvas.classList.contains('active')){
        sidebarOffcanvas.classList.add('active')
    }
    aboutOffcanvas.classList.remove('hiding')
})
//--------*--------about--------*--------






