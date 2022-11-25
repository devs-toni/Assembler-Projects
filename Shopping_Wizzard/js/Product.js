class Product {
    constructor() {
        this.productName = '';
        this.price = '';
        this.color = '';
        this.batteryCapacity = '';
        this.image = '';
    }

    submitProductForm (e) {
        e.preventDefault();

        // Create product
        this.color = e.target.color.value;
        this.batteryCapacity = e.target.battery.value;
        this.image = `./assets/products/${e.target.color.value}/${e.target.color.value}-1.png`;

        switch (e.target.color.value) {
            case 'black':
                this.productName = 'Scooter MQT45BK';
                break;
            case 'white':
                this.productName = 'Scooter MQT45W';
                break;
            case 'blue':
                this.productName = 'Scooter MQT45BE';
                break;
            case 'red':
                this.productName = 'Scooter MQT45R';
                break;
        }

        switch (e.target.battery.value) {
            case '10000mAh':
                this.price = 695;
                break;
            case '20000mAh':
                this.price = 795;
                break;
            case '30000mAh':
                this.price = 895;
        }

        changeDomToNextForm('product', 'profile');
    }

    changeBatteryModel(e) {
        switch (e.target.value) {
            case '10000mAh':
                changeProductPrice('695 €');
                break;
            case '20000mAh':
                changeProductPrice('795 €');
                break;
            case '30000mAh':
                changeProductPrice('895 €');
                break;
        }
    }

    getThumbnails(color) {
        for (let i = 0; i < 4; i++) {
            let img =
                `<img 
                    onclick="product.changeImage(${i + 1}, '${color}')" 
                    src="./assets/products/${color}/thumbnails/thumb-${color}-${i + 1}.png" 
                    width="80px" 
                    alt="${color}-${i + 1}" 
                    image-number="${i + 1}"
                >`;
            insertImageThumbnails(img);
        }
    }

    changeColor(color) {
        resetThumbnails();
        changeImageColor(color);
        this.getThumbnails(color);

        switch (color) {
            case 'black':
                changeProductTitle('Scooter MQT45BK');
                break;
            case 'white':
                changeProductTitle('Scooter MQT45W');
                break;
            case 'blue':
                changeProductTitle('Scooter MQT45BE');
                break;
            case 'red':
                changeProductTitle('Scooter MQT45R');
                break;
        }

    }

    changeImage(imageNumber, color) {
        image.children[0].src = `./assets/products/${color}/${color}-${imageNumber}.png`;
    }

    resetProduct() {
        this.productName = '';
        this.price = '';
        this.color = '';
        this.batteryCapacity = '';
        this.image = '';
    }
}