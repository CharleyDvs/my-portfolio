import React, { useState } from 'react'

const ContactForm = () => {
  return (
    <form
      action="https://formsubmit.io/send/ing.carlosjaime@outlook.com"
      method="POST"
    >
      <div className="input-container">
        <input type="text" name="name" required />
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
        <input type="text" name="phone" required />
        <label htmlFor="phone">Phone</label>
      </div>
      <div className="input-container">
        <textarea name="message" required />
        <label htmlFor="message">Message</label>
      </div>
      <input
        name="_formsubmit_id"
        type="text"
        style={{ display: 'none' }}
      ></input>
      <button type="submit">Send</button>
    </form>
  )
}

export default ContactForm
