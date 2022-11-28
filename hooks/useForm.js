import React, { useState } from 'react'

export const useForm = () => {

  const [email, setEmail] = useState('');
  const [formConfirmation, setFormConfirmation] = useState(false);
  
  const handleSubmit = (e) => {
    e.preventDefault()
    //nueva peticion
    let xhr = new XMLHttpRequest()
    //url de la peticion
    const url =
      'https://api.hsforms.com/submissions/v3/integration/submit/21377785/621ba3ab-d2ad-4b94-be76-5cf6d397ed5f'
    // data que se manda que toma el valor del formulario
    //el onChange agarra el valor del inputo y lo pone de estado con setName y setEmail
    let data = {
      fields: [
        {
          name: 'email',
          value: email,
        },
      ],
      context: {
        pageUri: 'https://www.communityelectricity.io/',
        pageName: 'Community',
      },
    }
    //pasamos el dato a JSON para enviar
    let final_data = JSON.stringify(data)
    //metodo de postear  a la url de hubspot
    xhr.open('POST', url)
    //mandar peticion de typo application/json
    xhr.setRequestHeader('Content-Type', 'application/json')
    //funcion que sirce para verificar que se haya mandado el form
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
        console.log(xhr.responseText);
        //Activar el mensaje de agradecimiento
        setFormConfirmation(true)
      } else if (xhr.readyState === 4 && xhr.status === 403) {
        console.log(xhr.responseText);
      }
    }
    //mandar la request final a la api de hubspot
    xhr.send(final_data);
    //dejar vacio el estado que manda el form
    setEmail('');
  }

  return  {email, setEmail, formConfirmation, setFormConfirmation, handleSubmit}
}
