import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './style.css'
import photo from './1.png'

export default function About() {
  return (
    <div className={s.about}>
        <div className={s.about_card}>
        <div className={s.img} style={{
          backgroundImage: `url(${photo})`}}></div>
      <h2>About me</h2>
      <p>The rich text element allows you to create and format headings, paragraphs, blockquotes, images, and video all in one place instead of having to add and format them individually. Just double-click and easily create content.</p>
      <p className={s.sub_title}>Static and dynamic content editing</p>
      <p>A rich text element can be used with static or dynamic content. For static content, just drop it into any page and begin editing. For dynamic content, add a rich text field to any collection and then connect a rich text element to that field in the settings panel. Voila!</p>
      <NavLink to={'/contact'}><button>Get in touch</button></NavLink>
        </div>
      
    </div>
  )
}
