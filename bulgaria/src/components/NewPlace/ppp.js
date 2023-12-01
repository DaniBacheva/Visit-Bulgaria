const imageValidate = () => {
    if (values.imageUrl.length === 0) {
      setErrors(state => ({
        ...state,
        image: "Image is required",
      }))
    } else {
      if (errors.image) {
        setErrors(state => ({ ...state, image: '' }))
      }
    }
  }

  const nameValidate = () => {
    if (values.name.length === 0) {
      setErrors(state => ({
        ...state,
        name: "Name is required",
      }))
    } else {
      if (errors.name) {
        setErrors(state => ({ ...state, name: '' }))
      }
    }
  }

  const locationValidate = () => {
    if (values.location.length === 0) {
      setErrors(state => ({
        ...state,
        location: "Location is required",
      }))
    } else {
      if (errors.location) {
        setErrors(state => ({ ...state, location: '' }))
      }
    }
  }

  const descriptionValidate = () => {
    if (values.description.length === 0) {
      setErrors(state => ({
        ...state,
        description: "Description is required",
      }))
    } else {
      if (errors.description) {
        setErrors(state => ({ ...state, description: '' }))
      }
    }
  }

  const additionalInfoValidate = () => {
    if (values.additionalInfo.length === 0) {
      setErrors(state => ({
        ...state,
        additionalInfo: "Additional information is required",
      }))
    } else {
      if (errors.additionalInfo) {
        setErrors(state => ({ ...state, additionalInfo: '' }))
      }
    }
  }



  const emailValidate = () => {
    if (values.email.length == 0) {
      setErrors(state => ({
        ...state,
        email: "Email is required",
      }))
    }

    else {
      if (errors.email) {
        setErrors(state => ({ ...state, email: '' }))
      }
    }
  }

  const passwordValidate = () => {
    if (values.password.length == 0) {
      setErrors(state => ({
        ...state,
        password: "Password is required",
      }))
    }

    else {
      if (errors.password) {
        setErrors(state => ({ ...state, password: '' }))
      }
    }
  }


  if (values.comment.length === 0) {
    setError(state => ({
        ...state,
        comment: "Text is required",
    }))
    console.log({error});
     }
if (Object.values(error).length>0) {
    setNotValidate(true);
  }