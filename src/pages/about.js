/**
* Internal dependencies
*/
import React from "react"
import Helmet from 'react-helmet';

/**
 * Project dependencies
 */
import Layout from "../components/layout"
import SEO from "../components/seo"

/**
 * Images
 */
import avatar from "./../images/avatar.jpg"

const AboutPage = () => (

	<Layout>

		<Helmet
			bodyAttributes={{
		        class: 'about'
		    }}
		/>

		<SEO title="About" keywords={ [ `gatsby`, `application`, `react` ] } />

		<div className="vcard">
			<div className="row">
				<div className="col-md-3 avatar">
					<img src={ avatar } alt="Avatar" />
				</div>
				<div className="col-md-5 identity">
					<h1>Nahid Ferdous Mohit</h1>
					<div className="social-links">
						<a href="https://github.com/nfmohit-wpmudev" target="_blank" rel="noopener noreferrer">
							<i className="fab fa-github"></i>
						</a>
						<a href="https://profiles.wordpress.org/nfmohit/" target="_blank" rel="noopener noreferrer">
							<i className="fab fa-wordpress"></i>
						</a>
						<a href="https://linked.com/in/nfmohit/" target="_blank" rel="noopener noreferrer">
							<i className="fab fa-linkedin-in"></i>
						</a>
						<a href="https://twitter.com/nfmohit/" target="_blank" rel="noopener noreferrer">
							<i className="fab fa-twitter"></i>
						</a>
						<a href="https://www.instagram.com/nfmohit/" target="_blank" rel="noopener noreferrer">
							<i className="fab fa-instagram"></i>
						</a>
						<a href="https://facebook.com/nfmohit/" target="_blank" rel="noopener noreferrer">
							<i className="fab fa-facebook-f"></i>
						</a>
						<a href="mailto:hello@nahid.dev" target="_blank" rel="noopener noreferrer">
							<i className="far fa-envelope"></i>
						</a>
					</div>
				</div>
				<div className="col-md-4 info">
					<span>born</span>
					<p>28<sup>th</sup> April, 1999</p>
					<span>education</span>
					<p>high school (2017) <sup>*</sup>dropout<sup>*</sup></p>
					<span>work</span>
					<p>tech support engineer @ <a href="https://premium.wpmudev.org" target="_blank" rel="noopener noreferrer" className="inline-link">WPMU DEV</a></p>
					<span>location</span>
					<p>Gazipur, Bangladesh</p>
				</div>
			</div>
		</div>

		<div className="biography">
			<h2>About Nahid</h2>
			<p>Nahid is a 20 years old, self-learned software developer, currently working as a tech support engineer at <a href="https://premium.wpmudev.org/" className="inline-link" target="_blank" rel="noopener noreferrer">WPMU DEV</a>, one of the leading WordPress development companies. Besides his awesome day job, he spends the rest of his leisure time in open source development. <strong>Spoiler alert:</strong> He has a special place in his heart for <sup>*</sup>modern<sup>*</sup> javascript.</p>
			<h4>Biography</h4>
			<p>Nahid was born on 28<sup>th</sup> April of 1999 in the beautiful city of <a href="https://en.wikipedia.org/wiki/Gazipur_District" className="inline-link" target="_blank" rel="noopener noreferrer">Gazipur</a> in <a href="https://en.wikipedia.org/wiki/Bangladesh" className="inline-link" target="_blank" rel="noopener noreferrer">Bangladesh</a>, where he currently lives with his family. His father got him his first computer at the age of 10. It was mostly used for playing video games, thanks to the widespread "unavailablity" of the Internet. What used to make him thrill more than the fun playing games was their mechanism, e.g. how it was working, how a tap in the keyboard could get so many "physically untouchable" things done. When he got an Internet connection, he would research day and night in order to find the answers of his questions, gradually turning himself into a clog of the machines. Over a couple failed pet projects in school, he came to know about <a href="https://en.wikipedia.org/wiki/WordPress" className="inline-link" target="_blank" rel="noopener noreferrer">WordPress</a> and fell in love with it, followed by <a href="https://en.wikipedia.org/wiki/PHP" className="inline-link" target="_blank" rel="noopener noreferrer">php</a> and modern <a href="https://en.wikipedia.org/wiki/JavaScript" className="inline-link" target="_blank" rel="noopener noreferrer">javascript</a>.</p>
			<h4>Education</h4>
			<p>At the age of 4, Nahid started junior school at <a href="https://en.wikipedia.org/wiki/Milestone_College" className="inline-link" target="_blank" rel="noopener noreferrer">Milestone School and College</a>, from which he graduated the <a href="https://en.wikipedia.org/wiki/Primary_School_Certificate" className="inline-link" target="_blank" rel="noopener noreferrer">Primary School Certificate examination</a> on 2010 and the <a href="https://en.wikipedia.org/wiki/Junior_School_Certificate" className="inline-link" target="_blank" rel="noopener noreferrer">Junior School Certificate examination</a> on 2013. He then got himself admitted in <a href="https://en.wikipedia.org/wiki/RAJUK_Uttara_Model_College" className="inline-link" target="_blank" rel="noopener noreferrer">Rajuk Uttara Model College</a>, where he graduated the <a href="https://en.wikipedia.org/wiki/Secondary_School_Certificate" className="inline-link" target="_blank" rel="noopener noreferrer">Secondary School Certificate examination</a> on 2016. He continued high-school (a.k.a college locally) in the same institution and (surprisingly!) <sup>*</sup>dropped out<sup>*</sup> from the 11<sup>th</sup> class on 2017.</p>
			<h4>Work</h4>
			<p>Nahid started his career when he was at the age of 15 as a freelance web developer. At initiation, he used to build websites for clients and small businesses, using WordPress. Besides, he started learning how to develop custom WordPress themes himself.</p>
		</div>

	</Layout>

)

export default AboutPage;
