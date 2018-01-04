function loadSliders() {
  var sliders = document.getElementsByClassName('slider');
  for (var i = 0; i < sliders.length; i++) {
    loadSlider(sliders[i]);
  }
}

function loadSlider(slider) {
  var images = slider.getElementsByTagName('img');
  var currentImage = 0;
  loadImage(currentImage++, images);
}

function loadImage(currentImage, images) {
  if (currentImage >= images.length) {
    currentImage = 0; 
  }

  setTimeout(function(){
    for (var i = 0; i < images.length; i++) {
      images[i].setAttribute('class', 'hide');
    }
    images[currentImage].setAttribute('class', '');

    loadImage(currentImage + 1, images);
  }, 4000);
}

Reveal.addEventListener('loadSliders', loadSliders);

