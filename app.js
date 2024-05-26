let items= document.querySelectorAll('.slider .list .item');
let next = document.getElementById('next');
let previous = document.getElementById('prev');
let thumbnails = document.querySelectorAll('.thumbnail .item');

// config param
let countItem = items.length;
let itemActive = 0;

// event click on next button
next.onclick = function(){
    itemActive = itemActive + 1;
    if(itemActive >= countItem){
        itemActive = 0;
    }
    showSlider();
}

// event click on previous button
previous.onclick = function(){
    itemActive = itemActive - 1;
    if(itemActive < 0){
        itemActive = countItem - 1;
    }
    showSlider();
}                       

// run auto slider
let refreshInterval=setInterval(() => {
    next.click();
}, 3000);
// function slider
function showSlider(){
    // remove the active class from the old item
    let activeOld = document.querySelector('.slider .list   .item.active');
    let thumbnailActiveOld = document.querySelector('.thumbnail .item.active');
    activeOld.classList.remove('active');
    thumbnailActiveOld.classList.remove('active');
    // add the active class to the new item
    items[itemActive].classList.add('active');
    thumbnails[itemActive].classList.add('active');

    // clear interval
    clearInterval(refreshInterval);
    refreshInterval = setInterval(() => {
        next.click();
    }, 4000);
    
    
}

// click on thumbnail event

thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener('click', () => {
        itemActive = index;
        showSlider();
    })
})          