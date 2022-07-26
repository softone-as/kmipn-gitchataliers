import HeaderTitle from '../../components/HeaderTitle';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';

const Layout = ({ children, title }) => {
	return (
		<div className='row'>
			<Sidebar />
			<div className='col-12 col-xl-9'>
				<Navbar />
				<div className='content'>
					<div className='row'>
						{title ? <HeaderTitle title={title} /> : null}
						{children}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Layout;
