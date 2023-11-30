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