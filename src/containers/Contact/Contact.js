import React from 'react';
import './Contact.css';

function Contact ({onRouteChange}) {
	return (
	    <div>
	        <h1 style={{ textDecoration:'underline overline 6px solid rgb(210, 200, 150)'}} className='Contact tc f2 b mt5'>CONTACT</h1>
	        <p className='blue tc'>Have a question or want to work together?</p>
	    	<form action="https://formsubmit.co/stephrex602@gmail.com" method="POST" style={{ backgroundColor:'rgba(0,20,50,0.9)'}} className="br3 ba dark-gray b--white-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
				<main className="pa4 white-80">
				  <div className="measure">
				    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
				      <div className="mt3">
				        <label className="db fw6 lh-copy f6" htmlFor="name">Name</label>
				        <input 
				           placeholder = 'YOUR NAME'
				           className="white pa2 input-reset ba b--white bg-transparent hover-bg-black w-100" 
				           type="name"
				           name="name"  
				           id="name"
				           required
				        />
				      </div>
				       <div className="mt3">
				        <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
				        <input 
				           placeholder = 'ENTER EMAIL'
				           className="white pa2 input-reset ba b--white bg-transparent hover-bg-black  w-100" 
				           type="email" 
				           name="email-address"  
				           id="email-address"
				           required
				        />
				       </div>
				      <div className="mv3">
				        <label className="db fw6 lh-copy f6" htmlFor="password">Message</label>
				        <textarea 
				           placeholder = 'YOUR MESSAGE'
				           className="white pa2 input-reset ba b--white bg-transparent hover-bg-black w-100" 
				           type="message" 
				           name="message"  
				           id="message"
				           required
				        />
				      </div>
				    </fieldset>
				    <div className="tc">
				      <input
				        className=" white b ph3 pv2 input-reset ba b--white bg-transparent grow pointer f6 dib" 
				        type="submit" 
				        value="Submit"
				      />
				    </div>
				  </div>
				</main>
			</form>
	    </div>
	)
}

export default Contact;