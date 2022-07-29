const NavTabClassItem = ({ category, setCategory }) => {
	return (
		<li className='nav-item' role='presentation'>
			<button
				className='nav-link'
				id='sd-tab'
				data-bs-toggle='tab'
				data-bs-target='#sd'
				type='button'
				role='tab'
				aria-controls='sd'
				aria-selected='true'
				onClick={() => setCategory(category)}
			>
				{category}
			</button>
		</li>
	);
};

export default NavTabClassItem;
