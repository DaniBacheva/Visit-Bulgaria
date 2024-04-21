export default function formValidate(e) {
    const value = e.target.value;

    const errors = {};

    if (e.target.name === 'name') {

        if (value.length === 0) {
            errors.name = 'Name is required';
        }
        if (value.length < 5) {
            errors.name = 'Name should be at least 5 charachters';
        }
    }
    if (e.target.name === 'location') {
        if (value.length === 0) {
            errors.location = 'Location is required';
        }
        if (value.length < 5) {
            errors.location = 'Location should be at least 5 charachters';
        }
    }

    if (e.target.name === 'imageUrl') {
        if (value.length === 0) {
            errors.imageUrl = 'Image is required';
        }
        if (value.length < 5) {
            errors.imageUrl = 'Image URL should be at least 5 charachters';
        }
    }

    if (e.target.name === 'description') {
        if (value.length === 0) {
            errors.description = 'Description is required';
        }
        if (value.length < 5) {
            errors.description = 'Description should be at least 5 charachters';
        }
    }

    if (e.target.name === 'additionalInfo') {
        if (value.length === 0) {
            errors.additionalInfo = 'Additional information is required';
        }
        if (value.length < 5) {
            errors.additionalInfo = 'Additional information should be at least 5 charachters';
        }
    }


    if (e.target.name === 'email') {
        if (value.length === 0) {
            errors.email = 'Email is required';
        }
        if (value.length < 5) {
            errors.email = 'Email should be at least 5 charachters';
        }
    }

    if (e.target.name === 'password') {
        if (value.length === 0) {
            errors.password = 'Password is required';
        }
        if (value.length < 5) {
            errors.password = 'Password should be at least 5 charachters';
        }
    }

    if (e.target.name === 'comment') {
        if (value.length === 0) {
            errors.comment = 'Text is required';
        }
        if (value.length < 5) {
            errors.comment = 'Comment should be at least 5 charachters';
        }
    }


    return errors;
}

