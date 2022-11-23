const thumbnails = document.querySelector('.product-thumbnails');
const thumbnailsChildren = thumbnails.children
const image = document.querySelector('.product-image');

getThumbnails('black');

function getThumbnails(color) {
    for (let i = 0; i < 4; i++) {
        let img = 
            `<img 
                onclick="changeImage(${i + 1}, '${color}')" 
                src="./assets/products/${color}/thumbnails/thumb-${color}-${i + 1}.png" 
                width="50px" 
                alt="${color}-${i + 1}" 
                image-number="${i + 1}"
            >`;
        thumbnails.insertAdjacentHTML('beforeend', img)
    }
}

function changeImage(imageNumber, color) {
    image.children[0].src = `./assets/products/${color}/${color}-${imageNumber}.png`;
}

function changeColor(color) {
    thumbnails.innerHTML = '';
    image.children[0].src = `./assets/products/${color}/${color}-1.png`;
    image.children[0].alt = color;
    getThumbnails(color);
}