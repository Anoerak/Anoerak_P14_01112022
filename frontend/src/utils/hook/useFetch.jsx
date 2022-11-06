import axios from 'axios';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
	addEmployee,
	emptyEmployeesArray,
	setStatesArray,
	setDepartmentsArray,
} from '../../features/Employees/employees.slice';

const useFetch = (url, option) => {
	// Get the dispatch function from the redux store
	const dispatch = useDispatch();

	// Set the state of the data
	const [loading, setLoading] = useState(true);
	const [{ isError, errorMessage }, setError] = useState({ isError: false, errorMessage: '' });

	useEffect(() => {
		if (!url) return;

		if (option === 'employees') {
			setLoading(true);

			// Fetch the datas from the JSON-Server
			const fetchEmployees = async (url, option) => {
				try {
					const response = await axios.get(url + option);
					const datas = response.data;
					dispatch(emptyEmployeesArray());
					datas.forEach((employee) => dispatch(addEmployee(employee)));
					setLoading(false);
				} catch (error) {
					setError({ isError: true, errorMessage: error.message });
					setLoading(false);
				}
			};
			fetchEmployees(url, option);
		} else if (option === 'states') {
			setLoading(true);

			// Fetch the datas from the JSON-Server
			const fetchStates = async (url, option) => {
				try {
					const response = await axios.get(url + option);
					const states = response.data;
					dispatch(setStatesArray(states));
					setLoading(false);
				} catch (error) {
					setError({ isError: true, errorMessage: error.message });
					setLoading(false);
				}
			};
			fetchStates(url, option);
		} else if (option === 'departments') {
			setLoading(true);

			// Fetch the datas from the JSON-Server
			const fetchDepartments = async (url, option) => {
				try {
					const response = await axios.get(url + option);
					const departments = response.data;
					dispatch(setDepartmentsArray(departments));
					setLoading(false);
				} catch (error) {
					setError({ isError: true, errorMessage: error.message });
					setLoading(false);
				}
			};
			fetchDepartments(url, option);
		}
	}, [url, dispatch, option]);

	return { loading, isError, errorMessage };
};

export default useFetch;
