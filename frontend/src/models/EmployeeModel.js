export class Employee {
	constructor(data) {
		this.data = data;
	}

	addEmployee() {
		return {
			firstName: this.data.firstName,
			lastName: this.data.lastName,
			dateOfBirth: this.data.dateOfBirth,
			startDate: this.data.startDate,
			department: this.data.department,
			address: {
				street: this.data.street,
				city: this.data.city,
				state: this.data.state,
				zip: this.data.zipCode,
			},
		};
	}
}
