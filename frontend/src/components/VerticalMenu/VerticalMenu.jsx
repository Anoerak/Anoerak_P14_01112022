import React, { useCallback, useEffect, useState, lazy } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid, regular } from '@fortawesome/fontawesome-svg-core/import.macro';

import './VerticalMenu.css';

import Logo from '../../assets/img/logo.webp';

// const Logo = lazy(() => import('../../assets/img/logo.jpg'));

/**
 *
 * @returns VerticalMenu component
 */

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

	// On click on .menu-button, we display the menu
	const menuToggle = useCallback(() => {
		const verticalMenu = document.querySelector('.vertical-menu');
		const menuToggle = document.querySelector('.menu-button');
		const menu = document.querySelector('.menu');
		const logo = document.querySelector('.logo');
		const datasOrigin = document.querySelector('.datas__origin');
		menuToggle.addEventListener('click', () => {
			if (verticalMenu.style.left === '0px') {
				verticalMenu.style.left = '-12rem';
				menu.style.display = 'none';
				logo.style.display = 'none';
				datasOrigin.style.display = 'none';
			} else {
				verticalMenu.style.left = '0px';
				menu.style.display = 'block';
				logo.style.display = 'block';
				datasOrigin.style.display = 'block';
			}
		});
	}, []);

	// When innerWidth > 992px, we switch the menu, logo and datasOrigin to display: block
	window.addEventListener('resize', () => {
		const menu = document.querySelector('.menu');
		const logo = document.querySelector('.logo');
		const datasOrigin = document.querySelector('.datas__origin');
		if (window.innerWidth > 992) {
			menu.style.display = 'block';
			logo.style.display = 'block';
			datasOrigin.style.display = 'block';
		} else {
			menu.style.display = 'none';
			logo.style.display = 'none';
			datasOrigin.style.display = 'none';
		}
	});

	useEffect(() => {
		menuToggle();
	}, [menuToggle]);

	return (
		<div className='vertical-menu'>
			<div className='menu-button'>Menu</div>
			<div className='logo'>
				<img src={Logo} width={160} height={147.2} alt='Logo' />
			</div>
			<div className='menu'>
				<ul>
					<li>
						<Link to='/error'>
							<FontAwesomeIcon className='icons' icon={solid('chart-pie')} />
							Dashboard
						</Link>
					</li>
					<li>
						<Link to='/'>
							<FontAwesomeIcon className='icons' icon={regular('user')} />
							Employees List
						</Link>
					</li>
					<li>
						<Link to='/createEmployee'>
							<FontAwesomeIcon className='icons' icon={solid('user-plus')} />
							Add Employee
						</Link>
					</li>
					<li>
						<Link to='/error'>
							<FontAwesomeIcon className='icons' icon={solid('sliders')} />
							Settings
						</Link>
					</li>
				</ul>
			</div>
			<div className='datas__origin'>
				<input
					type='checkbox'
					id='switch'
					className='checkbox'
					defaultChecked={localStorage.getItem('mockedDatas') === 'true' ? true : false}
					onClick={() => datasOrigin()}
				/>
				<label htmlFor='switch' className='toggle'></label>
				<h3> Mocked Datas / Redux</h3>
			</div>
		</div>
	);
};

export default VerticalMenu;
