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



// PAY MODAL SHOW AND CHANGE VALUES
function showPayModal(icon, name, value) {
    let packageIconContainer = document.querySelector('.pay_tile i'),
        packageNameContainer = document.querySelector('.pay_tile h3.offer'),
        packageValueContainer = document.querySelector('.pay_tile h2.offer');

    let nickInput = document.querySelector('.pay_form input.pay_nick'),
        emailInput = document.querySelector('.pay_form input.pay_email'),
        infoValueContainer = document.querySelector('.pay_informations span.toPay'),
        infoNickContainer = document.querySelector('.pay_informations span.toNick');

    // Tile values changing
    packageIconContainer.classList = `fas ${icon}`;
    packageNameContainer.textContent = name;
    packageValueContainer.textContent = value;

    // Value in info section changing
    infoValueContainer.textContent = value;

    // changing nick
    nickInput.addEventListener('change', function () {
        infoNickContainer.textContent = nickInput.value;
    });

    // Show modal function
    show(payModal, 0.5);
}




// PAYING FUNCTION AND VALIDATION
function validation() {
    
}