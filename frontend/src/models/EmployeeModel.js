export class Employee {
	/**
	 *
	 * @param {*} data
	 * @param {*} id
	 * @description Method to create an employee
	 * @returns {object} - Updated employee
	 * @memberof Employee
	 *
	 */
	constructor(data) {
		this.data = data;
		this.employee = {};
		this.response = {};
	}

	// Method to add a new employee to the array
	addEmployee() {
		if (this.data) {
			this.employee = {
				firstName: this.data.firstName,
				lastName: this.data.lastName,
				startDate: this.data.startDate,
				birthDate: this.data.birthDate,
				address: {
					street: this.data.address.street,
					city: this.data.address.city,
					state: this.data.address.state,
					zip: this.data.address.zip,
				},
				department: this.data.department,
			};
			return this.employee;
		} else {
			this.employee = {
				firstName: '',
				lastName: '',
				startDate: '',
				birthDate: '',
				address: {
					street: '',
					city: '',
					state: '',
					zip: '',
				},
				department: '',
			};
			return this.employee;
		}
	}
}
