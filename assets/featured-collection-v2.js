function checkScreenSize() {
    var width = window.innerWidth;

    var mobileElements = document.querySelectorAll('.max-product-mobile');
    var otherElements = document.querySelectorAll('.max-product-other');
    var tabletElements = document.querySelectorAll('.max-product-tablet');

    if (width < 576) {
      mobileElements.forEach(function (element) {
        element.style.display = 'block';
      });
      otherElements.forEach(function (element) {
        element.style.display = 'none';
      });
      tabletElements.forEach(function (element) {
        element.style.display = 'none';
      });
    } else if (width >= 576 && width < 768) {
      mobileElements.forEach(function (element) {
        element.style.display = 'block';
      });
      otherElements.forEach(function (element) {
        element.style.display = 'none';
      });
      tabletElements.forEach(function (element) {
        element.style.display = 'none';
      });
    } else if (width >= 768 && width < 1020) {
      tabletElements.forEach(function (element) {
        element.style.display = 'block';
      });
      mobileElements.forEach(function (element) {
        element.style.display = 'none';
      });
      otherElements.forEach(function (element) {
        element.style.display = 'none';
      });
    } else if (width >= 1020 && width < 1200) {
      otherElements.forEach(function (element) {
        element.style.display = 'block';
      });
      mobileElements.forEach(function (element) {
        element.style.display = 'none';
      });
      tabletElements.forEach(function (element) {
        element.style.display = 'none';
      });
    } else {
      otherElements.forEach(function (element) {
        element.style.display = 'block';
      });
      mobileElements.forEach(function (element) {
        element.style.display = 'none';
      });
      tabletElements.forEach(function (element) {
        element.style.display = 'none';
      });
    }
  }

  window.onload = checkScreenSize;
  window.onresize = checkScreenSize;