import React from 'react';
import { Routes, Route } from 'react-router-dom';

import EmployeeList from './pages/EmployeeList/EmployeeList';
import NewEmployeeForm from './pages/NewEmployeeForm/NewEmployeeForm';
import VerticalMenu from './components/VerticalMenu/VerticalMenu';

import Error from './components/Error/Error';

import './utils/styles/App.css';

/**
 *
 * Return a component with the routes of the application
 * @returns {JSX.Element}
 */
function App() {
	return (
		<div className='App'>
			<VerticalMenu />
			<Routes>
				<Route path='/' element={<EmployeeList />} />
				<Route path='/createEmployee' element={<NewEmployeeForm />} />
				<Route path='*' element={<Error />} />
			</Routes>
		</div>
	);
}

export default App;
