import React, { useState } from "react"
import contact1 from "./contact1.png"
import "./Contact.css"

const Contact = () => {
  const [data, setData] = useState({
    fullname: "",
    phone: "",
    email: "",
    subject: "",
    message: "",})

  const InputEvent = (event) => {
    const { name, value } = event.target

    setData((preVal) => {
      return {
        ...preVal,
        [name]: value,
      }
    })
  }

  const formSubmit = (event) => {
    event.preventDefault()
    alert(
      `My name is ${data.fullname}. 
	My phone number is ${data.phone}. 
	My email address is ${data.email}. 
	My Subject on  ${data.subject}. 
	Here is my message I want to say : ${data.message}. 
	`
    )
  }
  return (
    <>
      <section className='Contact' id='contact'>
        <div className='container top'>
          <div className='heading text-center'>
            <h1>Contact  Me</h1>
          </div>

          <div className='content d_flex'>
            <div className='left'>
              <div className='box box_shodow'>
                <div className='img'>
                  <img className="image" src={contact1} alt='' />
                </div>
                <div className='details'>
                  <p>Phone: +918978310119</p>
                  <p>Email: rusha4333@gmail.com</p> <br />
                 
                <div className="button">
                  <a
                    href="https://www.instagram.com/g_usharani_/?igsh=YmJ5ZGF3b3Nob2Zz"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="btn_shadow">
                      <i className="fab fa-instagram"></i>
                    </button>
                  </a>
                  <a
                    href="http://surl.li/qctkb"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="btn_shadow">
                      <i className="fab fa-linkedin-in"></i>
                    </button>
                  </a>
                  <a
                    href="https://github.com/G-usharani"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="btn_shadow">
                      <i className="fab fa-github"></i>
                    </button>
                  </a>
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
