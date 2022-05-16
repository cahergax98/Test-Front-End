import React, { useState } from 'react';
import './NewsLetter.css';

const NewsLetter = () => {
  const [errorsState, setErrorsState] = useState({
    name: "",
    email: ""
  });

  const [response, setResponse] = useState({
    msg: "",
    success: false
  });

  const [formValues, setFormValues] = useState({
    name: '',
    email: ''
  });

  const {name, email} = formValues;

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (!validForm(formValues)) {
      return false;
    }
    if (errorsState.name === "" && errorsState.email === "") {
      subscribeNewsLetter();
    }
  };

  const subscribeNewsLetter = () => {
    console.log("subscribeNewsLetter");
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    let raw = JSON.stringify({
      "email": email,
      "name": name
    });

    let requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch("https://corebiz-test.herokuapp.com/api/v1/newsletter", requestOptions)
      .then(res => res.json())
      .then(result => {
        console.log(result)
        setResponse({
          msg: result.message,
          success: true
        });
      })
      .catch(error => {
        console.log('error', error)
        setResponse({
          msg: error,
          success: false
        });
      })
      .finally(() => {
        setFormValues({
          name: "",
          email: ""
        });
      });
  }

  const handleInputChange = ({ target }) => {
    setFormValues({
      ...formValues,
      [ target.name ]: target.value
    });
  }

  const validForm = (form) => {
    let errors = {
      name: "",
      email: ""
    };
    let isValid = true;
    if (form.email.trim() === "") {
      errors.email = "El campo 'Email' es requerido";
      isValid = false;
    } else {
      let isValidEmail = validateEmail(form.email.trim());
      if (!isValidEmail) {
        errors.email = "El campo 'Email' no es valido";
        isValid = false;
      } else {
        errors.email = "";
      }
    }
    if (form.name.trim() === "") {
      isValid = false;
      errors.name = "El campo 'Nombre' es requerido";
    }
    setErrorsState(errors);
    return isValid;
  }

  const validateEmail = (emailToValidate) => {
    return String(emailToValidate)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const onBlurEmailHandler = ({target}) => {
    if (!validateEmail(target.value)) {
      setErrorsState({
        ...errorsState,
        [target.name]: "El campo 'Email' es invalido"
      });
      return false;
    } else {
      setErrorsState({
        ...errorsState,
        [target.name]: ""
      });
    }
    return true
  }

  return (
    <>
      <section className="news-letter-container">
        <div className="news-letter">
          <h2 className="news-letter-title">¡Únete a nuestras novedades y promociones!</h2>
          <div className="news-letter-form-container">
            <form id="news-letter-form" onSubmit={onSubmitHandler}>
              <div className={"news-letter-form-group" + (errorsState.name !== ""? " error": "")}>
                <input type="text" id="name" name="name" 
                  className="news-letter-input" placeholder='Ingresa tu nombre' 
                  value={ name } autoComplete="off" onChange={ handleInputChange }
                />
                {
                  errorsState.name !== "" &&
                  <p className='error-msg'>{ errorsState.name }</p>
                }
              </div>
              <div className={"news-letter-form-group" +  (errorsState.email !== ""? " error": "")}>
                <input type="text" id="email" name="email" 
                  className="news-letter-input" placeholder='Ingresa tu email' 
                  value={ email } autoComplete="off" onChange={ handleInputChange }
                  onBlur={ onBlurEmailHandler }
                />
                {
                  errorsState.email !== "" &&
                  <p className='error-msg'>{ errorsState.email }</p>
                }
              </div>
              <div className="news-letter-form-group">
                <button type="submit" className='news-letter-button'>Suscribirme</button>
              </div>
            </form>
          </div>
          {response.success === true && <p className='news-letter-response'>{ response.msg }</p>}
        </div>
      </section>
    </>
  );
}

export default NewsLetter