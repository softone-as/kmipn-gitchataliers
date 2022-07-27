import NavTabClassItem from './NavTabClassItem';

const NavTabClass = ({ categories }) => {
	return (
		<ul
			className='nav nav-tabs d-flex justify-content-start align-items-center'
			id='tableTab'
			role='tablist'
		>
			{categories.map((category, index) => (
				<NavTabClassItem key={index} category={category} />
			))}
		</ul>
	);
};

export default NavTabClass;
