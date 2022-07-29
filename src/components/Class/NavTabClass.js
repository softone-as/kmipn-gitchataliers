import NavTabClassItem from './NavTabClassItem';

const NavTabClass = ({ categories, setCategory }) => {
	return (
		<ul
			className='nav nav-tabs d-flex justify-content-start align-items-center'
			id='tableTab'
			role='tablist'
		>
			{categories.map((category, index) => (
				<NavTabClassItem
					key={index}
					category={category}
					setCategory={setCategory}
				/>
			))}
		</ul>
	);
};

export default NavTabClass;
