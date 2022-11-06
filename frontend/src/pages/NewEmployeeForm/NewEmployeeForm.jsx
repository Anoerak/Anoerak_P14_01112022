import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import axios from 'axios';

import Header from '../../components/Header/Header';

import './NewEmployeeForm.css';
import useFetch from '../../utils/hook/useFetch';

/**
 * @returns {JSX.Element}
 * @constructor
 * @description NewEmployeeForm component
 * @description This component is the form to add a new employee
 * @description It displays the header with the title and the path
 * @description It displays the form to add a new employee
 */

const NewEmployeeForm = () => {
	// Variables for the Header component
	const navigate = useNavigate();
	const headerTitle = 'Create Employees';
	const path = 'HRNet - Add Employee';

	// Fetching the states & department from the JSON-Server and store them in the redux store
	useFetch('http://localhost:8080/', 'states');
	useFetch('http://localhost:8080/', 'departments');
	const statesArray = useSelector((state) => state.employees.statesArray);
	const departmentsArray = useSelector((state) => state.employees.departmentsArray);

	// Function to handle the submit event of the form and send the datas to the JSON-Server
	function createEmployee() {
		let newEmployee = {
			id: document.getElementById('startDate').value + document.getElementById('zip').value,
			firstName: document.getElementById('firstName').value,
			lastName: document.getElementById('lastName').value,
			birthDate: document.getElementById('birthDate').value,
			startDate: document.getElementById('startDate').value,
			department: document.getElementById('department').value,
			address: {
				street: document.getElementById('street').value,
				city: document.getElementById('city').value,
				state: document.getElementById('state').value,
				zip: document.getElementById('zip').value,
			},
		};
		axios
			.post('http://localhost:8080/employees', newEmployee)
			.then((response) => {
				console.log(response);
				navigate('/');
			})
			.catch((error) => {
				console.log(error);
			});
	}

	return (
		<div className="createEmployee_container">
			<Header title={headerTitle} path={path} />
			<nav className="createEmployee__nav"></nav>
			<section className="createEmployee__formContainer">
				<form
					onSubmit={(e) => {
						e.preventDefault();
						createEmployee();
					}}
				>
					<div className="form-group">
						<label htmlFor="firstName">First Name</label>
						<input type="text" name="firstName" id="firstName" />
					</div>
					<div className="form-group">
						<label htmlFor="lastName">Last Name</label>
						<input type="text" name="lastName" id="lastName" />
					</div>
					<div className="form-group">
						<label htmlFor="birthDate">Date of Birth</label>
						<input type="date" name="birthDate" id="birthDate" />
					</div>
					<div className="form-group">
						<label htmlFor="startDate">Start Date</label>
						<input type="date" name="startDate" id="startDate" />
					</div>
					<fieldset>
						<legend>
							<h2>Address</h2>
						</legend>
						<div className="form-group">
							<label htmlFor="street">Street</label>
							<input type="text" name="street" id="street" />
						</div>
						<div className="form-group">
							<label htmlFor="city">City</label>
							<input type="text" name="city" id="city" />
						</div>
						<div className="form-group">
							<label htmlFor="state">State</label>
							<select name="state" id="state">
								{statesArray.map((state) => (
									<option key={state.value + state.state_id} value={state.value}>
										{state.label}
									</option>
								))}
							</select>
						</div>
						<div className="form-group">
							<label htmlFor="zip">Zip</label>
							<input type="number" name="zip" id="zip" />
						</div>
					</fieldset>
					<div className="form-group">
						<label htmlFor="department">Department</label>
						<select name="department" id="department">
							{departmentsArray.map((department) => (
								<option
									key={department.department_id + department.department_id}
									value={department.department_name}
								>
									{department.department_name}
								</option>
							))}
						</select>
					</div>
					<button className="validate-button" type="submit">
						Valider
					</button>
				</form>
			</section>
		</div>
	);
};

export default NewEmployeeForm;
