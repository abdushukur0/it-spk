
window.onload = function () {
  //ibg
  function ibg() {
    let ibg = document.querySelectorAll(".ibg");
    for (var i = 0; i < ibg.length; i++) {
      if (ibg[i].querySelector('img')) {
        ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
      }
    }
  }
  ibg();

  // menu
  let menuIcon = document.querySelector('.icon-menu');
  let menu = document.querySelector('.menu');
  let body = document.querySelector('body');
  menuIcon.onclick = function () {
    menu.classList.toggle('_active');
    menuIcon.classList.toggle("_active");
    body.classList.toggle("_lock");
  }

  //header
  const headerElement = document.querySelector('.header');

  const callback = function (enatries, observer) {
    if (enatries[0].isIntersecting) {
      headerElement.classList.remove('_scroll');
      document.querySelector('#header__logo').setAttribute('src', 'img/Logo.svg');
    } else {
      headerElement.classList.add('_scroll');
      document.querySelector('#header__logo').setAttribute('src', 'img/Logo2.svg');
    }
  }
  const headerObserver = new IntersectionObserver(callback);
  headerObserver.observe(headerElement);

  // input call
  const uppingRegister = document.querySelector('body');
  const formBtn = document.querySelectorAll('._form-btn');
  for (let i = 0; i < formBtn.length; i++) {
    formBtn[i].onclick = function () {
      uppingRegister.classList.toggle('_show');
    }
  }
}

