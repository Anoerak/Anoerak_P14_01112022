import React, { useState, useEffect } from 'react';
import DataTable from 'react-data-table-component';
import { useSelector } from 'react-redux';

import useFetch from '../../utils/hook/useFetch';
import datas from '../../assets/datas.json';

import Header from '../../components/Header/Header';
import SearchBar from '../../components/SearchBar/SearchBar';
import Loader from '../../components/Loader/Loader';

import './EmployeeList.css';

/**
 *
 * @returns {JSX.Element}
 * @constructor
 * @description EmployeeList component
 * @description This component is the main component of the application
 * @description It displays the list of employees
 * @description It displays the header with the title and the path
 * @description It displays the search bar
 * @description It displays the list of employees
 * @description It displays the loader
 * @description It displays the error message
 * @description It displays the empty message
 * @description It displays the pagination
 */

const EmployeeList = () => {
	// Props for the Header component
	const headerTitle = 'Current Employees';
	const path = 'HRNet - Employees List';

	// Variables to manage the loading, error and load the datas from redux store
	const baseUrl = useSelector((state) => state.employees.baseUrl);
	const [displayedDatas, setDisplayedDatas] = useState([]);
	const { loading, isError, errorMessage } = useFetch(baseUrl, 'employees');
	const reduxDatas = useSelector((state) => state.employees.employeesArray);

	// Get the search value from the SearchBar component stored in the redux store
	const searchValue = useSelector((state) => state.employees.searchValue);

	// Function to define the origin of the datas
	const selectTypeOfDatas = () => {
		setDisplayedDatas(localStorage.getItem('mockedDatas') === 'true' ? reduxDatas : datas);
	};

	// Function to filter the datas with the search value
	const filteredEmployees = (searchValue) => {
		if (searchValue === '') {
			return displayedDatas;
		}
		const filteredEmployees = displayedDatas.filter((item) => {
			return (
				item.firstName.toLowerCase().includes(searchValue.toLowerCase()) ||
				item.lastName.toLowerCase().includes(searchValue.toLowerCase()) ||
				item.birthDate.toLowerCase().includes(searchValue.toLowerCase()) ||
				item.startDate.toLowerCase().includes(searchValue.toLowerCase()) ||
				item.department.toLowerCase().includes(searchValue.toLowerCase()) ||
				item.address.street.toLowerCase().includes(searchValue.toLowerCase()) ||
				item.address.city.toLowerCase().includes(searchValue.toLowerCase()) ||
				item.address.state.toLowerCase().includes(searchValue.toLowerCase()) ||
				item.address.zip.toLowerCase().includes(searchValue.toLowerCase())
			);
		});
		setDisplayedDatas(filteredEmployees);
	};

	useEffect(() => {
		selectTypeOfDatas();
		filteredEmployees(searchValue);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [searchValue, reduxDatas]);

	// Columns for the DataTable component
	const columns = [
		{
			name: 'First Name',
			selector: (row) => row.firstName,
			sortable: true,
		},
		{
			name: 'Last Name',
			selector: (row) => row.lastName,
			sortable: true,
		},
		{
			name: 'Start Date',
			selector: (row) => row.startDate,
			sortable: true,
		},
		{
			name: 'Department',
			selector: (row) => row.department,
			sortable: true,
		},
		{
			name: 'Date of Birth',
			selector: (row) => row.birthDate,
			sortable: true,
		},
		{
			name: 'Street',
			selector: (row) => row.address.street,
			sortable: true,
		},
		{
			name: 'City',
			selector: (row) => row.address.city,
			sortable: true,
		},
		{
			name: 'State',
			selector: (row) => row.address.state,
			sortable: true,
		},
		{
			name: 'Zip Code',
			selector: (row) => row.address.zip,
			sortable: true,
		},
	];

	return (
		<div className="employeeList_container">
			<Header title={headerTitle} path={path} />
			<nav className="employeeList__nav">
				<SearchBar />
			</nav>
			<section className="employeeList__tableContainer">
				{loading ? (
					<Loader />
				) : isError ? (
					<div className="employeeList__error">{errorMessage}</div>
				) : (
					<DataTable
						title="Employee List"
						columns={columns}
						data={displayedDatas}
						pagination
						paginationRowsPerPageOptions={[5, 10, 15, 20, 25, 30]}
						paginationPerPage={5}
						paginationComponentOptions={{
							rowsPerPageText: 'Rows per page:',
							rangeSeparatorText: 'of',
							noRowsPerPage: false,
							selectAllRowsItem: true,
							selectAllRowsItemText: 'All',
						}}
					/>
				)}
			</section>
		</div>
	);
};

export default EmployeeList;
