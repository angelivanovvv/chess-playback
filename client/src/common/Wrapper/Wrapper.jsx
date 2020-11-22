import React from 'react';
import PropTypes from 'prop-types';

const Wrapper = ({ id, className, dataTest, children, onClick }) => (
	<div id={id} className={className} onClick={onClick} data-test={dataTest}>
		{children}
	</div>
);

Wrapper.propTypes = {
	id: PropTypes.string,
	className: PropTypes.string,
	dataTest: PropTypes.string,
	children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
	onClick: PropTypes.func,
};
Wrapper.defaultTypes = {
	id: '',
	className: '',
	dataTest: '',
	children: null,
	onClick: () => {},
};

export default Wrapper;
