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

const IndexPage = () => (

	<Layout>

		<Helmet
			bodyAttributes={{
		        class: 'home'
		    }}
		/>

		<SEO title="Home" keywords={ [ `gatsby`, `application`, `react` ] } />

		<section id="intro">

			<div className="name">
				<span>{'//'} Hi, my name is</span>
				<h1>Nahid Ferdous Mohit</h1>
			</div>
			<div className="tldr">
				<span>$tl_dr <span className="equals">=</span> {'{'}</span>
				<ul>
					<li>[<span className="key">0</span>] <span className="equals">=></span> <span className="value">'software developer'</span>,</li>
					<li>[<span className="key">1</span>] <span className="equals">=></span> <span className="value">'WordPress sorcerer'</span>,</li>
					<li>[<span className="key">2</span>] <span className="equals">=></span> <span className="value">'a proud WPMUDEVian'</span>,</li>
					<li>[<span className="key">3</span>] <span className="equals">=></span> <span className="value">'WordPress contributor'</span>,</li>
					<li>[<span className="key">4</span>] <span className="equals">=></span> <span className="value">'foss enthusiast'</span>,</li>
					<li>[<span className="key">5</span>] <span className="equals">=></span> <span className="value">'javascript evangelist'</span>,</li>
					<li>[<span className="key">6</span>] <span className="equals">=></span> <span className="value">'react fanatic'</span>,</li>
					<li>[<span className="key">7</span>] <span className="equals">=></span> <span className="value">'php warrior'</span>,</li>
					<li>[<span className="key">8</span>] <span className="equals">=></span> <span className="value">'globetrotter'</span>,</li>
				</ul>
				<span>}</span>
			</div>

    		<Link to="/about" className="btn btn-primary">More about me</Link>

		</section>
	</Layout>

)

export default IndexPage;
