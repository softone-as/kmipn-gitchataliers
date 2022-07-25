import HeaderTitle from '../../components/HeaderTitle';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';

const Layout = ({ children }) => {
	return (
		<div className='row'>
			<Sidebar />
			<div className='col-12 col-xl-9'>
				<Navbar />
				<div className='content'>
					<div className='row'>
						<HeaderTitle title={'Test Aja'} />
						{children}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Layout;
