const cars = document.querySelector('.cars');

document.addEventListener('DOMContentLoaded', function() {
  // nav menu
  const menus = document.querySelectorAll('.side-menu');
  M.Sidenav.init(menus, {edge: 'right'});
  // add car form
  const forms = document.querySelectorAll('.side-form');
  M.Sidenav.init(forms, {edge: 'left'});
});

// render car data
const renderCar = (data, id) => {
  let htmlContainer = document.createElement("div");
  const html = `
    <div class="card-panel car grey darken-4 white-text row" data-id="${id}">
      <img src='${data.imgUrl}' alt="car thumb">
      <div class="car-details">
        <div class="car-brand">${data.brand}</div>
        <div class="car-model">${data.model}</div>
        <div class="car-price">${data.price} <span>EGP</span></div>
      </div>
      <div class="car-delete">
        <i class="material-icons" data-id="${id}">delete_outline</i>
      </div>
    </div>
  `;
  htmlContainer.innerHTML = html;
  cars.insertBefore(htmlContainer, cars.childNodes[0]);
};

// remove car
const removeCar = (id) => {
  const car = document.querySelector(`.car[data-id=${id}]`);
  car.remove();
};