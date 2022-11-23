class User {
    constructor() {
        this.email = '';
        this.password = '';
        this.firstname = '';
        this.lastname = '';
        this.birthday = '';
        this.addressOne = '';
        this.addressTwo = '';
        this.postalCode = '';
        this.country = '';
        this.phone = '';
        this.isRegularAdress = false;
    }

    showUser = () => {
        console.log(this);;
    }

    submitAddress = (e) => {
        e.preventDefault();

        if (firstname.value.length > 20) {
            alert('El campo "First name" no puede contener más de 20 caracteres.');
            return;
        }
        if (lastname.value.length > 20) {
            alert('El campo "Last name" no puede contener más de 20 caracteres.');
            return;
        }
        if (addressOne.value.length > 50) {
            alert('El campo "Address 1" no puede contener más de 20 caracteres.');
            return;
        }
        if (addressTwo.value.length > 50) {
            alert('El campo "Address 2" no puede contener más de 20 caracteres.');
            return;
        }
        if (!postalCode.value.match(/^\d{5}(-\d{4})?$/)) {
            alert('El campo "Postal Code" no es correcto.');
            return;
        }
        if (country.value) {

        }
        if (!phone.value.match(/^[0-9]{9}$/)) {
            alert('El campo "Phone" no es correcto.');
            return;
        }

        this.assignFormValues();
        this.showUser();
    }

    submitLogin = (e) => {
        e.preventDefault();
    }

    assignFormValues = () => {
        this.firstname = firstname.value;
        this.lastname = lastname.value;
        this.birthday = birthday.value;
        this.addressOne = addressOne.value;
        this.addressTwo = addressTwo.value;
        this.postalCode = postalCode.value;
        this.country = country.value;
        this.phone = phone.value;
        this.isRegularAdress = regularAddress.checked;
    }
}



