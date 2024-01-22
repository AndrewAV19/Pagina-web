var imageIndex = 0;
var images = document.getElementById('imageGallery').getElementsByTagName('img');

function changeImage() {
    for (var i = 0; i < images.length; i++) {
        images[i].style.display = 'none';
    }

    imageIndex++;

    if (imageIndex > images.length - 1) {
        imageIndex = 0;
    }

    images[imageIndex].style.display = 'block';

    setTimeout(changeImage, 5000);
}

changeImage();
