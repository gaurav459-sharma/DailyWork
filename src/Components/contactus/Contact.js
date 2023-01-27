import React from 'react'
import './contact.css'
const Contact = () => {
  return (
    <div class="contact_container">

    <div class="contact_content">

      <div class="contact_leftside">

        <div class="contact_details">
          <i class="fas fa-map-marker-alt"></i>
          <div class="topic">Address</div>
          <div class="text_one">Surkhet, NP12</div>
        </div>

        <div class="contact_details">
          <i class="fas fa-phone-alt"></i>
          <div class="topic">Phone</div>
          <div class="text_one">+0098 9893 5647</div>
        </div>

        <div class="contact_details">
          <i class="fas fa-envelope"></i>
          <div class="topic">Email</div>
          <div class="text_one">codinglab@gmail.com</div>
        </div>
      </div>

      <div class="contact_rightside">
        <div class="topic_text">Send us a message</div>
        <p>If you have any work from me or any types of quries related to my tutorial, you can send me message from here. It's my pleasure to help you.</p>
      <form action="#">
        <div class="input_box">
          <input type="text" placeholder="Enter your name"/>
        </div>
        <div class="input_box">
          <input type="text" placeholder="Enter your email"/>
        </div>
        <div class="input_box message_box">
        <textarea name="subject" placeholder="Write something.."></textarea>
        </div>
        <div class="button">
          <input type="button" value="Send Now"/ >
        </div>
      </form>
    </div>
    </div>
  </div>
  )
}

export default Contact