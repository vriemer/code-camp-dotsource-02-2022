// 1. Select button (selector)
var scrollTopBtn = document.querySelector('.scroll-to-top');

window.onload = function() {
    // 3. Add function to button
    scrollTopBtn.addEventListener('click', scrollToTop);
}

// 4. Execute event when scrolling
window.onscroll = function () {
    // 5. Show/hide button
    // 5.1. Btn should be displayed as soon as the user scrolls the window (window.scrollY > 0)
    // (Condition: Show btn when scrolling starts - if y-coordinate of window > 0)
    if (window.scrollY == 0) {
        // 5.1.1 hide btn
        scrollTopBtn.classList.remove('d-block');
        scrollTopBtn.classList.add('d-none');
    } else {
        // 5.1.2 show btn
        scrollTopBtn.classList.add('d-block');
        scrollTopBtn.classList.remove('d-none');
    }

    // Check if Language-Container is visibile with helper function isElementVisible
    if (isElementVisible('div.language')) {
        document.querySelectorAll('.language__percentage-value')[0].classList.add('animation-100');
        document.querySelectorAll('.language__percentage-value')[1].classList.add('animation-100');
        document.querySelectorAll('.language__percentage-value')[2].classList.add('animation-75');
    }
}

/**
 * 2. Add function - What should Btn do?
 * Function scrolls page content to top
 */
function scrollToTop() {
    // 2.1 Scroll content of page to top 
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

/**
 * Function checks if any element is visible in dom.
 * 
 * @param {string} element 
 * 
 * @param {string} evalType
 * @default visible
 *  
 * @returns {true|false}
 */
 function isElementVisible(element, evalType) {
    // 1. set default value
    // (if function call only has 1 param, it would cause an error)
    evalType = evalType || "visible";

    var viewportHeight = $(window).height(),
        scrollTop      = $(window).scrollTop(),
        y              = $(element).offset().top,
        elementHeight  = $(element).height();

    if (evalType === "visible") {
        return (y < (viewportHeight + scrollTop)) && (y > (scrollTop - elementHeight));
    }
}
