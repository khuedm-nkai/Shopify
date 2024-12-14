document.addEventListener("DOMContentLoaded", () => {
  const fixedLivePreview = () => {
    const galleryWrapperSelector = ".grid__item.product__media-wrapper";
    const $gallery = document.querySelector(galleryWrapperSelector);

    if (!$gallery) {
      return;
    }

    const style = document.createElement("style");
    style.innerHTML = `
      .gallery--sticky:not(.gallery--sticky--hide) ${galleryWrapperSelector} .tee-gallery-content {
        background: #fff;
        box-shadow: 0 2px 5px 3px rgba(0, 0, 0, .15);
        display: flex;
        justify-content: center;
        left: 0;
        position: fixed;
        top: 0;
        width: calc(100vw);
        z-index: 99;
      }
      .gallery--sticky:not(.gallery--sticky--hide) ${galleryWrapperSelector} .tee-gallery {
        width: auto;
        zoom: .7;
      }
      .gallery--sticky:not(.gallery--sticky--hide) ${galleryWrapperSelector} .tee-thumbnails,
      .gallery--sticky:not(.gallery--sticky--hide) ${galleryWrapperSelector} .tee-slider__dots {
        display: none;
      }
      .gallery--sticky:not(.gallery--sticky--hide) .gallery--close-button {
        display: block;
      }
      .gallery--sticky.gallery--sticky--hide .sticky-gallery-button {
        display: block;
      }
      .sticky-gallery-button {
        background-color: #fff;
        background-image: url('data:image/svg+xml;utf8,<svg version="1.1" id="Layer_2_1_" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve"><g><path d="M114.5,79.1C95,79.1,79.1,95,79.1,114.5v283c0,19.5,15.8,35.4,35.4,35.4h283c19.5,0,35.4-15.8,35.4-35.4v-283 c0-19.5-15.8-35.4-35.4-35.4H114.5z M114.5,409.3c-6.5,0-11.8-5.3-11.8-11.8V308l94.3-94.3l195.6,195.6H114.5z M409.3,392.7 L331.6,315l30.5-30.5l47.2,47.2V392.7z M409.3,114.5v183.8l-38.8-38.9c-4.6-4.6-12.1-4.7-16.7-0.1c0,0,0,0-0.1,0.1L315,298.3 L205.4,188.7c-4.6-4.6-12.1-4.7-16.7-0.1c0,0,0,0-0.1,0.1l-86,86.1V114.5c0-6.5,5.3-11.8,11.8-11.8h283 C404,102.7,409.3,108,409.3,114.5z"/><path d="M326.7,138.1c-26,0-47.2,21.1-47.2,47.2s21.1,47.2,47.2,47.2s47.2-21.1,47.2-47.2S352.8,138.1,326.7,138.1z M326.7,208.8 c-13,0-23.6-10.6-23.6-23.6s10.6-23.6,23.6-23.6s23.6,10.6,23.6,23.6S339.8,208.8,326.7,208.8z"/><path d="M23.7,35c0,0,0.1-4.9,3.3-7.9c3.5-3.4,8.1-3.5,8.1-3.5l89.6,0c0-19.2,0-23.6,0-23.6L34.9,0C15.6,0,0,15.6,0,34.9l0,89.8 l23.7,0V35z"/><path d="M484.9,26.9c3.4,3.5,3.5,8.1,3.5,8.1l0,89.6c19.2,0,23.6,0,23.6,0l0-89.8C512,15.6,496.4,0,477.1,0l-89.8,0l0,23.7H477 C477,23.7,482,23.8,484.9,26.9z"/><path d="M488.3,477c0,0-0.1,4.9-3.3,7.9c-3.5,3.4-8.1,3.5-8.1,3.5l-89.6,0c0,19.2,0,23.6,0,23.6l89.8,0c19.2,0,34.8-15.6,34.8-34.8 l0-89.8l-23.7,0V477z"/><path d="M27.1,485.1c-3.4-3.5-3.5-8.1-3.5-8.1l0-89.6c-19.2,0-23.6,0-23.6,0l0,89.8C0,496.4,15.6,512,34.9,512l89.8,0l0-23.7H35 C35,488.3,30,488.2,27.1,485.1z"/></g></svg>');
        background-position: center;
        background-repeat: no-repeat;
        background-size: 20px 20px;
        border-radius: 50%;
        box-shadow: 0px 0px 5px;
        display: none;
        height: 40px;
        position: fixed;
        right: 20px;
        top: 100px;
        width: 40px;
        z-index: 999;
      }
      .gallery--close-button {
        background-image: url('data:image/svg+xml;utf8,<svg height="329pt" viewBox="0 0 329.26933 329" width="329pt" xmlns="http://www.w3.org/2000/svg"><path d="m194.800781 164.769531 128.210938-128.214843c8.34375-8.339844 8.34375-21.824219 0-30.164063-8.339844-8.339844-21.824219-8.339844-30.164063 0l-128.214844 128.214844-128.210937-128.214844c-8.34375-8.339844-21.824219-8.339844-30.164063 0-8.34375 8.339844-8.34375 21.824219 0 30.164063l128.210938 128.214843-128.210938 128.214844c-8.34375 8.339844-8.34375 21.824219 0 30.164063 4.15625 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921875-2.089844 15.082031-6.25l128.210937-128.214844 128.214844 128.214844c4.160156 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921874-2.089844 15.082031-6.25 8.34375-8.339844 8.34375-21.824219 0-30.164063zm0 0"/></svg>');
        background-position: center;
        background-repeat: no-repeat;
        background-size: 16px 16px;
        height: 16px;
        opacity: 0.5;
        position: absolute;
        right: 20px;
        top: 20px;
        width: 16px;
      }
    `;
    document.head.appendChild(style);

    let hasStickyButton = false;
    let hasCloseButton = false;

    const onScroll = () => {
      const $teeGallery = document.querySelector(
        `${galleryWrapperSelector} #tee-gallery`
      );
      if ($teeGallery) {
        if (!hasStickyButton) {
          const stickyButton = document.createElement("div");
          stickyButton.className = "sticky-gallery-button";
          stickyButton.addEventListener("click", (e) => {
            e.stopPropagation();
            e.preventDefault();
            document.body.classList.remove("gallery--sticky--hide");
            const galleryContentHeight = document.querySelector(
              ".tee-gallery-content"
            ).offsetHeight;
            $gallery.style.height = `${galleryContentHeight + 10}px`;
          });
          document.body.appendChild(stickyButton);
          hasStickyButton = true;
        }
        if (!hasCloseButton) {
          const closeButton = document.createElement("div");
          closeButton.className = "gallery--close-button";
          closeButton.addEventListener("click", (e) => {
            e.stopPropagation();
            e.preventDefault();
            document.body.classList.add("gallery--sticky--hide");
            $gallery.style.removeProperty("height");
          });
          $teeGallery.appendChild(closeButton);
          hasCloseButton = true;
        }

        const galleryTop = $gallery.getBoundingClientRect().top;
        const tFormBottom = document
          .getElementById("tee-artwork-form")
          .getBoundingClientRect().bottom;
        const galleryContentHeight = document.querySelector(
          ".tee-gallery-content"
        ).offsetHeight;

        if (galleryTop < -10 && tFormBottom > galleryContentHeight) {
          document.body.classList.add("gallery--sticky");
          $gallery.style.height = `${galleryContentHeight + 10}px`;
        } else {
          document.body.classList.remove("gallery--sticky");
          $gallery.style.removeProperty("height");
        }
      }
    };

    const $window = window;
    $window.addEventListener("scroll", onScroll);
    $window.addEventListener("DOMMouseScroll", onScroll); // For older browsers
  };

  const w = window.innerWidth;
  const h = window.innerHeight;
  // Only for portrait screen
  if (h / w > 1.5 && w < 768) {
    setTimeout(function () {
      fixedLivePreview();
    }, 2000);
  }
});