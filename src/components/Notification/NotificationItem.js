import { NavLink } from 'react-router-dom';

export default function NotificationItem({
	status,
	company,
	content,
	handleRead,
	id,
}) {
	const greeting = ['applied', 'connected'].some((item) => item === status)
		? 'Good News'
		: 'Bad News';

	return (
		<NavLink to={`/email/${id}`}>
			<div
				className='notif-item d-flex align-items-center text-dark'
				onClick={() => handleRead(id)}
			>
				<span className='ic-notif'></span>
				<div className='notif-content'>
					<strong>
						{greeting}! {company}
					</strong>
					<p>{content}</p>
				</div>
			</div>
		</NavLink>
	);
}
