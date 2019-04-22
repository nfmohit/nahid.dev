/**
* Internal dependencies
*/
import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ( { siteTitle } ) => (

    <header>
        <nav
            id="primary-nav"
            className="navbar navbar-dark navbar-expand-lg">

            <div
                className="container">

                <Link
                    to="/"
                    className="navbar-brand"
                >
                    &lt; nfmohit /&gt;
                </Link>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#mobileNavCollapse"
                    aria-expanded="false"
                    aria-label="Toggle navigation">
                        <span className="mdi"></span>
                </button>

                <div
                    className="collapse navbar-collapse"
                    id="mobileNavCollapse">
                        <ul
                            className="navbar-nav ml-auto text-center">
                                <li
                                    className="nav-item active">
                                        <Link
                                            to="/"
                                            className="nav-link"
                                        >
                                            &lt;Home&gt;
                                        </Link>
                                </li>
                                <li
                                    className="nav-item">
                                        <Link
                                            to="/"
                                            className="nav-link"
                                        >
                                            &lt;Projects&gt;
                                        </Link>
                                </li>
                                <li
                                    className="nav-item">
                                        <Link
                                            to="/blog"
                                            className="nav-link"
                                        >
                                            &lt;Blog&gt;
                                        </Link>
                                </li>
                        </ul>
                </div>

            </div>

        </nav>
    </header>
)

Header.propTypes = {
    siteTitle: PropTypes.string,
}

Header.defaultProps = {
    siteTitle: ``,
}

export default Header;
