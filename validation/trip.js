const Validator = require('validator');
const isEmpty = require('./is-empty'); // equivalent to import isEmpty from './is-empty'

module.exports = function validateTripInput(data) {
    let errors = {};

    data.handle = !isEmpty(data.handle) ? data.handle : ''; //transport undefined or empty to empty stirng

    // Handle validation
    if(!Validator.isLength(data.handle, { min: 2, max: 40})) {
        errors.handle = 'Handle needs to be between 2 and 40 characters';
    }

    if(Validator.isEmpty(data.handle)) {
        errors.handle = 'Trip handle is required';
    }

    //website Validation
    if(!isEmpty(data.website)) {
        if(!Validator.isURL(data.website)) { //we make the validation only if website field is not empty
            errors.website = 'Not a valid URL';
        }
    }

    //social links Validation
    if(!isEmpty(data.youtube)) {
        if(!Validator.isURL(data.youtube)) { //we make the validation only if youtube field is not empty
            errors.youtube = 'Not a valid URL';
        }
    }

    if(!isEmpty(data.twitter)) {
        if(!Validator.isURL(data.twitter)) { //we make the validation only if twitter field is not empty
            errors.twitter = 'Not a valid URL';
        }
    }

    if(!isEmpty(data.facebook)) {
        if(!Validator.isURL(data.facebook)) { //we make the validation only if facebook field is not empty
            errors.facebook = 'Not a valid URL';
        }
    }

    if(!isEmpty(data.linkedin)) {
        if(!Validator.isURL(data.linkedin)) { //we make the validation only if linkedin field is not empty
            errors.linkedin = 'Not a valid URL';
        }
    }

    if(!isEmpty(data.instagram)) {
        if(!Validator.isURL(data.instagram)) { //we make the validation only if instagram field is not empty
            errors.instagram = 'Not a valid URL';
        }
    }


    return {
        errors: errors,
        isValid: isEmpty(errors)
    }
};
