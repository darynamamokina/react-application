import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './style.css'

export default function Contact() {
  return (
    <div className={s.contact}>
        <div className={s.contact_card}>   
          <h2>Get in touch</h2>
          <p>Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Nulla vitae elit libero, a pharetra augue. Nulla vitae elit libero, a pharetra augue. Sed posuere consectetur est at lobortis. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
          <p>Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Etiam porta sem malesuada magna mollis euismod. Etiam porta sem malesuada magna mollis euismod. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.</p>
          <div className={s.form}>
            <div className={s.form_el}>
              <p className={s.form_name}>Name</p>
              <input type="text" placeholder='Enter your name' />
            </div>
            <div className={s.form_el}>
              <p className={s.form_name}>Email Address</p>
              <input type="text" placeholder='Enter your email address'/>
            </div>
            <div className={s.form_el}>
              <p className={s.form_name}>Message</p>
              <textarea placeholder='Enter your message'></textarea>
            </div>

          </div>
          <button>Submit</button>
        </div>
      
    </div>
  )
}
