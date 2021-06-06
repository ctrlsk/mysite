import { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

library.add(faEnvelope)

export const ContactForm = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Sending')

    let data = {
        name,
        email,
        message
    }

    fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then((res) => {
        console.log('Response received')
        if (res.status === 200) {
            console.log('Response succeeded!')
            setSubmitted(true) 
            setName('')
            setEmail('')
            setMessage('')
        }
    })
  }

  return (
    <div className="col-md-8 text-dark">
    <div className="row">
    
      <div class="col-md-12"> 
      <form>

      <div className="row">
        <formGroup className="col-md-6" >
        <div class="form">
          < label htmlFor='name'>Name</label>
          < input type='text' onChange={(e)=>{setName(e.target.value)}} name='name' className="form-control" />
        </div>
        </formGroup>

        <formGroup className="col-md-6" >
        <div class="form">
          < label htmlFor='email'>Email</label>
          < input type='email' onChange={(e)=>{setEmail(e.target.value)}} name='email' className="form-control" />
        </div>
        </formGroup>
      </div>

      <div className="row pt-4">
        < formGroup className="col-md-12">
          <div className="form">
          < label htmlFor='message'>Message</label>
          < textarea onChange={(e)=>{setMessage(e.target.value)}} name='message' className="form-control" rows="3" />
          </div>
        </formGroup>
      </div>

      <div className="text-center text-md-left pt-5">
        < input className="btn btn-lg btn-danger" type='submit' onClick={(e)=>{handleSubmit(e)}}/>
      </div>
      </form >
    </div>

    
    </div>
    </div>
  );
}