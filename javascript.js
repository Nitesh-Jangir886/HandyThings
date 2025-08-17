
document.querySelector('.hamburger').addEventListener('click', () => {
    document.querySelector('.home').style.top = '0'
})

document.querySelector('.close').addEventListener('click', () => {
    document.querySelector('.home').style.top = '-150vh'
})

document.querySelector('.shopping-cart').addEventListener('click', () => {
    document.querySelector('.cart').style.top = '7%';
})

document.querySelector('.shopping-cart').addEventListener('dblclick', () => {
    document.querySelector('.cart').style.top = '-50%';
})

document.querySelector('.shopping-cart-800').addEventListener('click', () => {
    document.querySelector('.cart').style.top = '7%';
    document.querySelector('.cart').style.right = '5%';
})

document.querySelector('.shopping-cart-800').addEventListener('dblclick', () => {
    document.querySelector('.cart').style.top = '-50%';
})

document.querySelector('.shopping-cart-hamburger').addEventListener('click', () => {
    document.querySelector('.cart').style.top = '7%';
    document.querySelector('.cart').style.right = '5%';
})

document.querySelector('.shopping-cart-hamburger').addEventListener('dblclick', () => {
    document.querySelector('.cart').style.top = '-50%';
})

document.querySelector('.shop').addEventListener('click', () => {
    document.querySelector('.navbar-shop-items').style.top = '7vh';
})

document.querySelector('.shop').addEventListener('dblclick', () => {
    document.querySelector('.navbar-shop-items').style.top = '-80vh';
})

document.querySelector('header').addEventListener('click', () => {
    document.querySelector('.navbar-shop-items').style.top = '-80vh';
})

document.querySelector('.shop').addEventListener('click', () => {
    document.querySelector('.humburger-shop-items').style.display = 'block'
})

document.querySelector('.shop').addEventListener('dblclick', () => {
    document.querySelector('.humburger-shop-items').style.display = 'none'
})



document.addEventListener('DOMContentLoaded', () => {
    const slideContainer = document.querySelector('.container6-review-slide');
    const reviewBoxes = document.querySelectorAll('.container6-box');
    const prevBtn = document.querySelector('.slide-move span:first-child');
    const nextBtn = document.querySelector('.slide-move span:last-child');

    let currentIndex = 0;
    const visibleCount = 2;
    const boxWidth = reviewBoxes[0].offsetWidth + parseInt(getComputedStyle(reviewBoxes[0]).marginRight) + parseInt(getComputedStyle(reviewBoxes[0]).marginLeft);

    function scrollToIndex(index) {
        const scrollAmount = boxWidth * index;
        slideContainer.scrollTo({
            left: scrollAmount,
            behavior: 'smooth'
        });
    }

    nextBtn.addEventListener('click', () => {
        if (currentIndex < reviewBoxes.length - visibleCount) {
            currentIndex++;
            scrollToIndex(currentIndex);
        }
    });

    prevBtn.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            scrollToIndex(currentIndex);
        }
    });
});


