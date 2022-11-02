import React from 'react';
import PropTypes from 'prop-types';

import './Header.css';

const Header = (props) => {
	return (
		<header className="employeeList__header">
			<div className="employeeList__path">{props.path}</div>
			<h1 className="employeeList__title">{props.title}</h1>
		</header>
	);
};

Header.propTypes = {
	title: PropTypes.string.isRequired,
};

export default Header;
