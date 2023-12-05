export default function formValidate(e) {
    const value = e.target.value;

    const errors = {};

    if (e.target.name === 'name' && (value.length === 0)) {
        errors.name = 'Name is required';
    }
    if (e.target.name === 'location' && (value.length === 0)) {
        errors.location = 'Location is required';
    }

    if (e.target.name === 'imageUrl' && (value.length === 0)) {
        errors.imageUrl = 'Image is required';
    }

    if (e.target.name === 'description' && (value.length === 0)) {
        errors.description = 'Description is required';
    }

    if (e.target.name === 'additionalInfo' && (value.length === 0)) {
        errors.additionalInfo = 'Additional information is required';
    }

    if (e.target.name === 'email' && (value.length === 0)) {
        errors.email = 'Email is required';
    }

    if (e.target.name === 'password' && value.length === 0) {
        errors.password = 'Password is required';
    }

    if (e.target.name === 'comment' && (value.length === 0)) {
        errors.comment = 'Text is required';
    }

    return errors;
}

