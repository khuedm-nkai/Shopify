let slideIndex = 0;

  function showSlides() {
      let i;
      let slides = document.getElementsByClassName("slides");
      let dots = document.getElementsByClassName("index");
      for (i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";
      }
      slideIndex++;
      if (slideIndex > slides.length) { slideIndex = 1 }
      for (i = 0; i < dots.length; i++) {
          dots[i].className = dots[i].className.replace(" active", "");
      }
      slides[slideIndex - 1].style.display = "block";
      dots[slideIndex - 1].className += " active";
      setTimeout(showSlides, 5000);
  }

  function currentSlide(n) {
      slideIndex = n;
      showSlides();
  }

  showSlides();