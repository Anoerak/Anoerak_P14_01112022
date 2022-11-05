export class Employee {
	constructor(data) {
		this.data = data;
		this.employee = {};
	}

	addEmployee() {
		if (this.data) {
			this.employee = {
				firstName: this.data.firstName,
				lastName: this.data.lastName,
				startDate: this.data.startDate,
				birthDate: this.data.dateOfBirth,
				address: {
					street: this.data.street,
					city: this.data.city,
					state: this.data.state,
					zip: this.data.zip,
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
