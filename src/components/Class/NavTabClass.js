import NavTabClassItem from './NavTabClassItem';

const NavTabClass = ({ categories }) => {
	return (
		<ul
			className='nav nav-tabs d-flex justify-content-start align-items-center'
			id='tableTab'
			role='tablist'
		>
			{/* {categories.map((category) => (
				<NavTabClassItem key={category.id} {...category} />
				))} */}
			<NavTabClassItem />
		</ul>
	);
};

export default NavTabClass;
