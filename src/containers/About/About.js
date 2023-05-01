import React from 'react';
import enoughSearch from './enough-searching.png';
import './About.css';
import ProgressBar from '../.././components/ProgressBar/ProgressBar';
// import IremidePic from '../Home/Iremide.jpg';


const About = ({onRouteChange}) => {
	const onContactButtonClick = () => {
        onRouteChange('contact');
	}
	return (
		 <div>
	        {/*<Navigation onRouteChange={this.onRouteChange}/>*/}
	    	<h1 
	    	className='b f3 mt4'
	    	style ={{display:'flex', justifyContent: 'center', fontFamily: 'Cordova'}}>
			    A
			    <span 
			    style={{display:'flex', justifyContent: 'center', textDecoration: 'underline solid 4px blue', textUnderlineOffset:'0.1em', fontFamily: 'Cordova' }}>
				    BOU
			    </span>
			    T
		    </h1>
		    <h1 className='b f2 tc mt5'>Designer, Fullstack Developer, <br/> Data Scientist</h1>
		    <p className='f3 tc'>I code nicely simple and cool things, <br/> and I love what i do.</p>
		    <p className='tc f3 b' style={{display:'flex', justifyContent:'center', position:'relative', top:'60px'}}>
		    	YOUR SEARCH IS OVER!!
		    </p>
		    <p className='tc mb4 b' style={{display:'flex', justifyContent:'center', position:'relative', top:'40px', fontSize:'21px'}}>
		        cause, I am that guy you've been looking for.<br/>
                I am a tool you can use to bring out the creativity in you, through code!!
		    </p>
		    <div className='stickerImg mb6'>
			    <img className='tc' alt='The search is over' src={enoughSearch}/>	
		    </div>
		    <div className='thisGuy'>
		    	<h3 className='white tc mt5 mb3 b' style={{fontFamily:'Georgia', fontSize:'30px'}}>Who's this guy?</h3>
		    	<div className='white tc' style={{fontFamily:'Sitka Banner Semibold Italic', fontSize:'24px'}}>
		    	   Hi, Nice to meet you. I'm Stephen Oloyede, <br/>a full stack web developer, based in Lagos, Nigeria.
		    	   I work has a freelancer,<br/> and have also created websites for startup businesses,
		    	   companies, and lots more.<br/>
                   I have serious passion for Programming,UI effects, animations and creating intuitive, dynamic
                   user experience. <br/> My work as a freelancer over the years, has given me the ability to
                   understand customers, <br/> and produce a better product than they expect.<br/>
                   <p className='yellow f4 link dim underline pointer' onClick={onContactButtonClick}>Don't hesitate, Let's make something special</p>
		    	</div>
		    </div>
		    <div>
		    	<div className='quote1'>
		    		<h6 className='quote'>"I believe in Loyality"</h6>
		    	</div>
	    	</div>
		    <div style={{width:'78%'}} className='br4 pa4 ba dark-gray b--black-10 mv4 shadow-2 center'>
		    	<h3 style={{fontFamily:'Georgia'}} className='mt5 mb3 b tc'>Education & Experience</h3>
		    	<p style={{fontFamily:'Sitka Banner Semibold Italic', fontSize:'20px'}} className='tc'> 
		    	  I have completed defferent online courses, and also live ones on web development,<br/>
		    	  from beginners stage upto advance level. Some are the <a href='jjj'>The Complete Web developer ZtM</a>,<br/>
		    	  alongside <a href='lll'>Web Development Masterclass-Online Certification Course</a>, both, which are on udemy,<br/> and some others.
		    	  I also learnt from Freecodecamp's Youtube Videos on Web Development, also attended live bootcamps.
		    	</p>
		    	<br/>
		    	<br/>
		    	<div>
		            <div  id = 'progress-2'> <div className='l'>HTML</div> <div id='progress'><ProgressBar number={95}/></div></div><br/>
		           	<div  id = 'progress-2'> <div className='l'>CSS</div> <div id='progress'> <ProgressBar number={95}/></div></div><br/>
		           	<div id = 'progress-2'> <div className='l'>JAVASCRIPT</div> <div id='progress'> <ProgressBar number={85}/></div> </div><br/>
		            <div id = 'progress-2'> <div className='l'>REACT</div> <div id='progress'>  <ProgressBar number={80}/></div> </div><br/>
		           	<div id = 'progress-2'> <div className='l'>NODEJS</div> <div id='progress'> <ProgressBar number={85}/></div> </div><br/>
		           	<div id = 'progress-2'> <div className='l'>EXPRESS</div> <div id='progress'> <ProgressBar number={85}/></div></div> <br/>
		           	<div id = 'progress-2'> <div className='l'>JQUERY</div> <div id='progress'> <ProgressBar number={70}/></div> </div><br/>
		           	<div id = 'progress-2'> <div className='l'>PHP</div> <div id='progress'> <ProgressBar number={70}/></div> </div><br/>
		           	<div id = 'progress-2'> <div className='l'>SQL</div> <div id='progress'> <ProgressBar number={80}/></div> </div><br/>
		           	<div id = 'progress-2'> <div className='l'>POSTGRESQL</div> <div id='progress'> <ProgressBar number={80}/></div> </div><br/>
		    	</div>
		    </div>
		    	<div className='quote2'>
		    		<h6 className='quote'>"I believe in being Humble"</h6>
		    	</div>
	    </div>
	)
}

export default About;