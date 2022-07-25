const NavTabClassItem = ({ category }) => {
	return (
		<li className='nav-item' role='presentation'>
			<button
				className='nav-link active'
				id='sd-tab'
				data-bs-toggle='tab'
				data-bs-target='#sd'
				type='button'
				role='tab'
				aria-controls='sd'
				aria-selected='true'
			>
				category
			</button>
		</li>
	);
};

export default NavTabClassItem;
