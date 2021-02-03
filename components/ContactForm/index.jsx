import React, { useState } from 'react'
import axios from 'axios'

const ContactForm = () => {
  const [formData, setFormData] = useState({})
  const handleInput = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    axios({
      method: 'post',
      url: 'htttps://localhost:3000/api/sendData',
      data: formData,
    })
  }
  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <div className="input-container">
        <input
          type="text"
          name="name"
          onChange={(e) => {
            handleInput(e)
          }}
          required
        />
        <label htmlFor="name">Name</label>
      </div>
      <div className="input-container">
        <input
          type="text"
          name="email"
          onChange={(e) => {
            handleInput(e)
          }}
          required
        />
        <label htmlFor="email">Email</label>
      </div>
      <div className="input-container">
        <input
          type="text"
          name="phone"
          onChange={(e) => {
            handleInput(e)
          }}
          required
        />
        <label htmlFor="phone">Phone</label>
      </div>
      <div className="input-container">
        <textarea
          name="message"
          onChange={(e) => {
            handleInput(e)
          }}
          required
        />
        <label htmlFor="message">Message</label>
      </div>
      <button type="submit">Send</button>
    </form>
  )
}

export default ContactForm
