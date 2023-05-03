const Validation = (values) => {
    let errors = {}

    if (!values.email) {
        errors.email = 'Email Required'
    }
    
    if (!values.password) {
        errors.password = 'Password Required'
    } else if (values.password.length < 8) {
        errors.password = 'Password must be 8 or more char'
    }

    return errors
}

export default Validation