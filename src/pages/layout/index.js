import { useState } from 'react';
import HeaderTitle from '../../components/HeaderTitle';
import Navbar from '../../components/Navbar';
import Notification from '../../components/Notification/Notification';
import Sidebar from '../../components/Sidebar';
import { data } from '../../data/dummy';

const Layout = ({ children, title }) => {
	const { notifications } = data;

	const [isHidden, setIsHidden] = useState(true);

	const handleRead = (id) => {
		const selectedNotifications = notifications.find(
			(notification) => notification.id === id
		);
		selectedNotifications.isRead = true;
		setIsHidden(!isHidden);
	};

	const handleDisplay = () => {
		setIsHidden(!isHidden);
	};

	return (
		<div className='row'>
			<Sidebar />
			<div className='col-12 col-xl-9'>
				<Navbar handleDisplay={handleDisplay} />
				<Notification
					notifications={notifications}
					handleRead={handleRead}
					isHidden={isHidden}
				/>
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
