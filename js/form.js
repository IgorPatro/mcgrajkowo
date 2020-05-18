window.addEventListener("DOMContentLoaded", function () {

    // get the form elements defined in your form HTML above
    let form = document.querySelector("form#contact_form");
    let button = document.querySelector("button.submit-form");
    let formInputs = document.querySelectorAll('.formInput');

    // Success and Error functions for after the form is submitted
    function success() {
        form.reset();
        button.style = "display: none ";
        formInputs.forEach(input => {
            input.classList.add('formSucces');
        });
    }

    function error() {
        formInputs.forEach(input => {
            input.classList.add('formError');
        });
    }

    // handle the form submission event
    form.addEventListener("submit", function (ev) {
        ev.preventDefault();
        let data = new FormData(form);
        ajax(form.method, form.action, data, success, error);
    });
});

// helper function for sending an AJAX request
function ajax(method, url, data, success, error) {
    var xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = function () {
        if (xhr.readyState !== XMLHttpRequest.DONE) return;
        if (xhr.status === 200) {
            success(xhr.response, xhr.responseType);
        } else {
            error(xhr.status, xhr.response, xhr.responseType);
        }
    };
    xhr.send(data);
}