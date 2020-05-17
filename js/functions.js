// DISPLAY ANIMATIONS
// show animation
function show(what, time) {
    what.style.opacity = '0';
    what.style.visibility = 'visible';

    TweenMax.to(what, time, {
        opacity: 1,
    });
}

// hide animation
function hide(what, time) {
    TweenMax.to(what, time, {
        opacity: 0,
    });

    setTimeout(function () {
        what.style.visibility = 'hidden';
    }, time * 100 + 300);
}