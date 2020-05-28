// Pay modal consts
const payModal = document.querySelector("section.pay_modal");
const payModalOn = document.querySelectorAll("button.offer-btn");
const payModalOff = document.querySelector("button.close_pay");
const payButton = document.querySelector("button.payAccept");

// Turning pay modal on
payModalOn.forEach((button) => {
  button.addEventListener("click", function () {
    // icon, name, value
    icon = this.dataset.icon;
    name = this.dataset.name;
    value = this.dataset.value;

    // Giving params to function
    showPayModal(icon, name, value);
  });
});

// Turning pay modal off
payModalOff.addEventListener("click", function () {
  hide(payModal, 0.5);
});
