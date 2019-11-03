/**
* Internal dependencies
*/
import React from 'react'
import Helmet from 'react-helmet'
import { Link } from 'gatsby'

/**
 * Project dependencies
 */
import Layout from '../components/layout'
import SEO from '../components/seo'

/**
 * Images
 */
import avatar from './../images/avatar.jpg'

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
					<img src={ avatar } alt="Nahid Ferdous Mohit" />
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
						<a href="https://www.linkedin.com/in/nfmohit/" target="_blank" rel="noopener noreferrer">
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

		<div className="row about-content">
			<div className="col-md-3">
				<ul className="about-index">
					<li>
						About Nahid
						<ul>
							<li>&#8627; <a href="#biography">Biography</a></li>
							<li>&#8627; <a href="#education">Education</a></li>
							<li>&#8627; <a href="#work">Work</a></li>
							<li>&#8627; <a href="#oss">Open Source Software</a></li>
							<li>&#8627; <a href="#community">Community</a></li>
							<li>&#8627; <a href="#travel">Travel</a></li>
						</ul>
					</li>
				</ul>
			</div>
			<div className="col-md-9 biography">
				<h2>About Nahid</h2>
				<p>Nahid is a 20 year old, self-taught software developer, currently working as a tech support engineer at <a href="https://premium.wpmudev.org/" className="inline-link" target="_blank" rel="noopener noreferrer">WPMU DEV</a>, one of the leading WordPress development companies. Besides his awesome day job, he spends the rest of his leisure time in open source development. <strong>Spoiler alert:</strong> He has a special place in his heart for <sup>*</sup>modern<sup>*</sup> javascript.</p>
				<h4 id="biography">Biography</h4>
				<p>Nahid was born on 28<sup>th</sup> April of 1999 in the beautiful city of <a href="https://en.wikipedia.org/wiki/Gazipur_District" className="inline-link" target="_blank" rel="noopener noreferrer">Gazipur</a> in <a href="https://en.wikipedia.org/wiki/Bangladesh" className="inline-link" target="_blank" rel="noopener noreferrer">Bangladesh</a>, where he currently lives with his family. His father got him his first computer at the age of 10. It was mostly used for playing video games, thanks to the widespread "unavailability" of the Internet. What used to make him thrill more than the fun playing games was their mechanism, e.g. how it was working, how a tap in the keyboard could get so many "physically untouchable" things done. When he got an Internet connection, he would research day and night in order to find the answers of his questions, gradually turning himself into a clog of the machines. Over a couple failed pet projects in school, he came to know about <a href="https://en.wikipedia.org/wiki/WordPress" className="inline-link" target="_blank" rel="noopener noreferrer">WordPress</a> and fell in love with it, followed by <a href="https://en.wikipedia.org/wiki/PHP" className="inline-link" target="_blank" rel="noopener noreferrer">php</a> and modern <a href="https://en.wikipedia.org/wiki/JavaScript" className="inline-link" target="_blank" rel="noopener noreferrer">javascript</a>.</p>
				<h4 id="education">Education</h4>
				<p>At the age of 4, Nahid started junior school at <a href="https://en.wikipedia.org/wiki/Milestone_College" className="inline-link" target="_blank" rel="noopener noreferrer">Milestone School and College</a>, from which he graduated the <a href="https://en.wikipedia.org/wiki/Primary_School_Certificate" className="inline-link" target="_blank" rel="noopener noreferrer">Primary School Certificate examination</a> on 2010 and the <a href="https://en.wikipedia.org/wiki/Junior_School_Certificate" className="inline-link" target="_blank" rel="noopener noreferrer">Junior School Certificate examination</a> on 2013. He then got himself admitted in <a href="https://en.wikipedia.org/wiki/RAJUK_Uttara_Model_College" className="inline-link" target="_blank" rel="noopener noreferrer">Rajuk Uttara Model College</a>, where he graduated the <a href="https://en.wikipedia.org/wiki/Secondary_School_Certificate" className="inline-link" target="_blank" rel="noopener noreferrer">Secondary School Certificate examination</a> on 2016. He continued high-school (a.k.a college locally) in the same institution and (surprisingly!) <sup>*</sup>dropped out<sup>*</sup> from the 11<sup>th</sup> class on 2017. Though, he plans to reboot his studies abroad when he gets enough time out of work.</p>
				<h4 id="work">Work</h4>
				<p>Nahid started his career when he was at the age of 15 as a freelance web developer. At initiation, he used to build websites for clients and small businesses, using WordPress. Alongside, he started learning how to develop custom WordPress themes himself, making him learn <a href="https://en.wikipedia.org/wiki/PHP" className="inline-link" target="_blank" rel="noopener noreferrer">php</a> and <a href="https://en.wikipedia.org/wiki/JavaScript" className="inline-link" target="_blank" rel="noopener noreferrer">javascript</a> gradually. Besides client work, he used to spend leisure time in learning new technologies and applying them. On 21st May 2017, he started working as a <i>"Tech Support Engineer"</i> at <a href="https://premium.wpmudev.org/" className="inline-link" target="_blank" rel="noopener noreferrer">WPMU DEV</a>, one of the largest WordPress development companies and he's working there till date.</p>
				<h4 id="oss">Open Source Software</h4>
				<p>At his time out of work, Nahid develops and contributes to open source software. His major works include multiple <a href="https://make.wordpress.org/core/" className="inline-link" target="_blank" rel="noopener noreferrer">WordPress core contributions</a> and mainly, contributions to the <a href="https://reactjs.org/" className="inline-link" target="_blank" rel="noopener noreferrer">reactjs</a> built <a href="https://wordpress.org/gutenberg/" className="inline-link" target="_blank" rel="noopener noreferrer">WordPress Gutenberg project</a>. He is a <a href="https://github.com/orgs/WordPress/people?utf8=%E2%9C%93&query=Nahid+F.+Mohit" className="inline-link" target="_blank" rel="noopener noreferrer">member of the core WordPress Gutenberg project development team</a>, working alongside world-famous developers building software used by millions. Besides, he develops small WordPress plugins as pet projects which are free and open source.</p>
				<h4 id="community">Community</h4>
				<p>Nahid is an active member of the <a href="https://www.meetup.com/Dhaka-WordPress-Meetup/" className="inline-link" target="_blank" rel="noopener noreferrer">Dhaka WordPress Community</a>. He loves <a href="https://central.wordcamp.org/about/" className="inline-link" target="_blank" rel="noopener noreferrer">WordCamp</a>s. So far, he has attended <a href="https://2018.bangkok.wordcamp.org/" className="inline-link" target="_blank" rel="noopener noreferrer">WordCamp Bangkok (2018)</a>, <a href="https://2018.manchester.wordcamp.org/" className="inline-link" target="_blank" rel="noopener noreferrer">WordCamp Manchester (2018)</a> and <a href="https://2019.europe.wordcamp.org/" className="inline-link" target="_blank" rel="noopener noreferrer">WordCamp Europe (2019)</a>. Nahid was also a member of the <a href="https://2019.dhaka.wordcamp.org/organizers/" className="inline-link" target="_blank" rel="noopener noreferrer">organizing team</a> for <a href="https://2019.dhaka.wordcamp.org/" className="inline-link" target="_blank" rel="noopener noreferrer">WordCamp Dhaka 2019</a>.</p>
				<h4 id="travel">Travel</h4>
				<p>Nahid considers himself a globetrotter. Whenever he gets a chance, he travels to different parts of the world. So far, he has visited:
					<ol className="country-list">
						<li>Berlin, Germany</li>
						<li>Zürich, Switzerland</li>
						<li>Sargans, St. Gallen, Switzerland</li>
						<li>Conisbrough, Doncaster, South Yorkshire, United Kingdom</li>
						<li>Leeds, United Kingdom</li>
						<li>London, United Kingdom</li>
						<li>Manchester, United Kingdom</li>
						<li>Vaduz, Liechtenstein</li>
						<li>Feldkirch, Voralberg, Austria</li>
						<li>Amsterdam, Netherlands</li>
						<li>Lublin, Poland</li>
						<li>Warsaw, Poland</li>
						<li>Prague, Czech Republic</li>
						<li>Bangkok, Thailand</li>
						<li>Phuket, Thailand</li>
						<li>Kuala Lumpur, Malaysia</li>
						<li>Genting Highlands, Pahang, Malaysia</li>
						<li>Putrajaya, Malaysia</li>
						<li>Beijing, China</li>
						<li>Yiwu, China</li>
						<li>Guangzhou, China</li>
						<li>Darjeeling, India</li>
						<li>Kolkata, India</li>
				</ol>
				He writes about his travel experiences in his <Link to="/blog" className="inline-link">blog</Link>.</p>
			</div>
		</div>		

	</Layout>

)

export default AboutPage;
