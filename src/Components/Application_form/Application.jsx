import React from 'react'
import './Application.css'

function Application() {
  return (
    <div className='Application_container'>
      <form action="">
        <fieldset>
          <legend>Job</legend>
          <label htmlFor="">Application for *
          <select name="Application for" id="" required>
            <option value="">Job A</option>
            <option value="">Job B</option>
            </select>
          </label>
        </fieldset>

        <fieldset>
          <legend>Personal data</legend>

          <div className="two_cols">
            <label htmlFor="">First Name * </label>
            <input className='application_text'  type="text" name='first name' required/>
            
            <label htmlFor="">Last Name * </label>
            <input className='application_text'  type="text" name='last name' required />
            
          </div>

        <div class="two_cols">
        <label>
        Email address *  </label>
        <input className='application_text'  type="email" name="Email" required/>
      
        
         <label>
         Date of birth </label>
         <input className='application_text'  type="date" name="Date of birth"/>
        
       </div>

       <div className="two_cols">
            <label htmlFor="">Address  </label>
            <input className='application_text'  type="text" name='Address' required/>
           
            <label htmlFor="">Zip</label>
            <input className='application_text'  type="text" name='zip' required />
            
          </div>

          <div className="two_cols">
            <label htmlFor=""> Phone No. </label>
            <input className='application_text'  type="text" name='phone' required/>
           
            <label htmlFor=""> City</label>
            <input className='application_text'  type="text" name='city' required />
            
          </div>

     <div class="two_cols">
      <label>Citizenship </label>
      <input className='application_text'  type="text" name="Citizenship"/>
     

     </div>

      </fieldset>
     
      <fieldset>
    <legend>Application documents</legend>
    <input className='application_text'  type="hidden" name="MAX_FILE_SIZE" value="10485760"/>
    <div class="two-cols">
      <label>
        Goverment ID*
        <input className='application_doc'  type="file" name="Application letter" accept=".doc,.docx,.pdf" required/>
      </label>
      <label>
        Other documents
        <input className='application_doc'  type="file" name="Curriculum vitae" accept=".doc,.docx,.pdf"/>
      </label>
    </div>
    <p>Possible file types: DOC, PDF. Maximum file size: 10 MB.</p>
  </fieldset>

  <div className="btns">
    <input   type="text" name='_gotcha'  style={{display:'none'
    }} />
    <input className='application_submit' type="submit"  />
  </div>
  
      
    
   </form>
       
</div>
  )
}

export default Application