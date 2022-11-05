import React, { useState, useEffect } from 'react';
import DataTable from 'react-data-table-component';
import { useSelector } from 'react-redux';

import datas from '../../assets/datas.json';

import Header from '../../components/Header/Header';
import SearchBar from '../../components/SearchBar/SearchBar';

import './EmployeeList.css';

const EmployeeList = () => {
	const [displayedDatas, setDisplayedDatas] = useState([]);
	const reduxDatas = useSelector((state) => state.employees.employeesArray);
	console.log('reduxDatas: ', reduxDatas);
	const headerTitle = 'Current Employees';
	const path = 'HRNet - Employees List';

	useEffect(() => {
		setDisplayedDatas(localStorage.getItem('mockedDatas') === 'true' ? reduxDatas : datas);
	}, [displayedDatas, reduxDatas]);

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
			</section>
		</div>
	);
};

export default EmployeeList;
