window.onscroll = function(){
    scrollFunction();
}
function scrollFunction(){
    if(document.body.scrollTop >50 || document.documentElement.scrollTop > 50){
        document.getElementById('logo_navbar').style.width = '62px';
        document.querySelector('.header__navbar').style.backgroundColor = '#FFFFFF';
    }else{
        document.querySelector('#logo_navbar').style = 'none';
        document.querySelector('.header__navbar').style = 'none';
    }
}
