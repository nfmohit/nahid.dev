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
            className="navbar navbar-light navbar-expand-lg">

            <div
                className="container">

                <Link
                    to="/"
                    className="navbar-brand"
                >
                    { siteTitle }
                </Link>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#mobileNavCollapse"
                    aria-expanded="false"
                    aria-label="Toggle navigation">
                        <span class="mdi"></span>
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
                                            Home
                                        </Link>
                                </li>
                                <li
                                    className="nav-item">
                                        <Link
                                            to="/blog"
                                            className="nav-link"
                                        >
                                            Blog
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
