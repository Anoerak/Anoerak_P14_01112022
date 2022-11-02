import React from 'react';

import Header from '../../components/Header/Header';

import './NewEmployeeForm.css';

const NewEmployeeForm = () => {
	const headerTitle = 'Create Employees';
	const path = 'HRNet - Add Employee';

	return (
		<div className="createEmployee_container">
			<Header title={headerTitle} path={path} />
			<nav className="createEmployee__nav"></nav>
			<section className="createEmployee__formContainer">
				<form action="">
					<div className="form-group">
						<label htmlFor="firstName">First Name</label>
						<input type="text" name="firstName" id="firstName" />
					</div>
					<div className="form-group">
						<label htmlFor="lastName">Last Name</label>
						<input type="text" name="lastName" id="lastName" />
					</div>
					<div className="form-group">
						<label htmlFor="birthdate">Date of Birth</label>
						<input type="date" name="birthdate" id="birthdate" />
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
								<option value="AL">Alabama</option>
								<option value="AK">Alaska</option>
								<option value="AZ">Arizona</option>
								<option value="AR">Arkansas</option>
								<option value="CA">California</option>
								<option value="CO">Colorado</option>
								<option value="CT">Connecticut</option>
								<option value="DE">Delaware</option>
								<option value="DC">District Of Columbia</option>
								<option value="FL">Florida</option>
								<option value="GA">Georgia</option>
								<option value="HI">Hawaii</option>
								<option value="ID">Idaho</option>
								<option value="IL">Illinois</option>
								<option value="IN">Indiana</option>
								<option value="IA">Iowa</option>
								<option value="KS">Kansas</option>
								<option value="KY">Kentucky</option>
								<option value="LA">Louisiana</option>
								<option value="ME">Maine</option>
								<option value="MD">Maryland</option>
								<option value="MA">Massachusetts</option>
								<option value="MI">Michigan</option>
								<option value="MN">Minnesota</option>
								<option value="MS">Mississippi</option>
								<option value="MO">Missouri</option>
								<option value="MT">Montana</option>
								<option value="NE">Nebraska</option>
								<option value="NV">Nevada</option>
								<option value="NH">New Hampshire</option>
								<option value="NJ">New Jersey</option>
								<option value="NM">New Mexico</option>
								<option value="NY">New York</option>
								<option value="NC">North Carolina</option>
								<option value="ND">North Dakota</option>
								<option value="OH">Ohio</option>
								<option value="OK">Oklahoma</option>
								<option value="OR">Oregon</option>
								<option value="PA">Pennsylvania</option>
								<option value="RI">Rhode Island</option>
								<option value="SC">South Carolina</option>
								<option value="SD">South Dakota</option>
								<option value="TN">Tennessee</option>
								<option value="TX">Texas</option>
								<option value="UT">Utah</option>
								<option value="VT">Vermont</option>
								<option value="VA">Virginia</option>
								<option value="WA">Washington</option>
								<option value="WV">West Virginia</option>
								<option value="WI">Wisconsin</option>
								<option value="WY">Wyoming</option>
							</select>
						</div>
						<div className="form-group">
							<label htmlFor="zip">Zip</label>
							<input type="text" name="zip" id="zip" />
						</div>
					</fieldset>
					<div className="form-group">
						<label htmlFor="department">Department</label>
						<select name="department" id="department">
							<option value="sales">Sales</option>
							<option value="marketing">Marketing</option>
							<option value="engineering">Engineering</option>
							<option value="Human Ressource">Human Ressources</option>
							<option value="legal">Legal</option>
						</select>
					</div>
				</form>
				<button>Valider</button>
			</section>
		</div>
	);
};

export default NewEmployeeForm;
