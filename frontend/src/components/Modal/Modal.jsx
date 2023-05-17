import React from 'react';
import { useNavigate } from 'react-router';
import { PropTypes } from 'prop-types';

import './Modal.css';

const Modal = (props) => {
	const navigate = useNavigate();

	const { apiResponse, modal__display, redirectPath } = props;

	const modalStyle = {
		modal__display,
		redirectPath,
	};

	const handleClick = () => {
		navigate(redirectPath);
	};

	return (
		<div className="modal__display" style={modalStyle.modal__display}>
			<div className="modal__background">
				Modal
				<div className="modal__container">
					<div className="modal__header">
						<h2 className="modal__title">
							{apiResponse.status === 200 || apiResponse.status === 201
								? 'Congratulations'
								: 'Something went wrong'}
						</h2>
						<button
							className="modal__closeButton"
							onClick={() => {
								handleClick();
							}}
						>
							X
						</button>
					</div>
					<div className="modal__body">
						<p>{apiResponse.statusText}</p>
					</div>
				</div>
			</div>
		</div>
	);
};

Modal.propTypes = {
	apiResponse: PropTypes.object,
	modal__display: PropTypes.object,
	redirectPath: PropTypes.string,
};

Modal.defaultProps = {
	apiResponse: {
		status: 800,
		statusText: 'Default Message',
	},
	modal_display: {
		display: 'none',
	},
	redirectPath: '/',
};

export default Modal;
