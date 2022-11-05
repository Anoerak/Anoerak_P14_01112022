import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro';

import Logo from '../../assets/img/logo.jpg';

import './VerticalMenu.css';

const VerticalMenu = () => {
	/* Initiate the State for the toggle which will provided API datas or Mocked datas */
	const [toggle, setToggle] = useState(false);

	/* Define and create/modify the value of the toggle into the local storage */
	let datasOrigin = () => {
		!document.getElementById('switch').checked ? setToggle(false) : setToggle(true);
		localStorage.getItem('mockedDatas') === 'true'
			? localStorage.setItem('mockedDatas', false)
			: localStorage.setItem('mockedDatas', true);
		window.location.reload();
		return toggle;
	};

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
			<div className="datas__origin">
				<input
					type="checkbox"
					id="switch"
					className="checkbox"
					defaultChecked={localStorage.getItem('mockedDatas') === 'true' ? true : false}
					onClick={() => datasOrigin()}
				/>
				<label htmlFor="switch" className="toggle"></label>
				<h3> Redux / Mocked Datas</h3>
			</div>
		</div>
	);
};

export default VerticalMenu;
