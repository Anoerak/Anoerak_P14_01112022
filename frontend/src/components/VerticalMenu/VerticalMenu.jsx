import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro';

import Logo from '../../assets/img/logo.jpg';

import './VerticalMenu.css';

const VerticalMenu = () => {
	return (
		<div className="vertical-menu">
			<div className="logo">
				<img src={Logo} alt="Logo" />
			</div>
			<div className="menu">
				<ul>
					<li>
						<Link to="/error">
							<FontAwesomeIcon className="icons" icon={solid('chart-pie')} />
							Dashboard
						</Link>
					</li>
					<li>
						<Link to="/">
							<FontAwesomeIcon className="icons" icon={regular('user')} />
							Employees List
						</Link>
					</li>
					<li>
						<Link to="/createEmployee">
							<FontAwesomeIcon className="icons" icon={solid('user-plus')} />
							Add Employee
						</Link>
					</li>
					<li>
						<Link to="/error">
							<FontAwesomeIcon className="icons" icon={solid('sliders')} />
							Settings
						</Link>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default VerticalMenu;
