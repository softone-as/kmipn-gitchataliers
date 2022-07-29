import NotificationItem from './NotificationItem';

export default function Notification({
	notifications,
	handleRead,
	isHidden,
	isRead,
}) {
	return (
		<div className='notif-container' hidden={isHidden}>
			{notifications.map((notification) => (
				<NotificationItem
					key={notification.id}
					{...notification}
					handleRead={handleRead}
					isRead={isRead}
				/>
			))}
		</div>
	);
}
