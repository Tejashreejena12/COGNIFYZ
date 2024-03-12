let isOpen = true;
document.querySelector('.navbar-toggle').addEventListener('click', function(){
    let icon = document.getElementsByClassName('navbar-icon');
    let nav = document.getElementsByClassName('content');
    if(isOpen){
        for (let i = 0; i < icon.length; i++) {
            icon[i].style.display = 'block';
        }
        isOpen = false;
    }
    else{
        for (let i = 0; i < icon.length; i++) {
            icon[i].style.display = 'none';
        }
        isOpen = true;
    }
});
