function validateEmail(email) {
    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(String(email).toLowerCase());
}

const isLogin = () => {
    return localStorage.getItem('logged_in') === "true"
}

const emailFieldValidation = (values, errors) => {
    if (!values) {
        errors.email = "Please enter email";
    } else if (!validateEmail(values)) {
        errors.email = "Please enter valid email";
    } else {
        errors.email = "";
    }
    return errors
}

const passwordFieldValidation = (values, errors) => {
    if (!values) {
        errors.password = "Please enter password";
    } else {
        errors.password = "";
    }
    return errors
}

export { isLogin, emailFieldValidation, passwordFieldValidation }