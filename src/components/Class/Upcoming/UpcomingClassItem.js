import { Link } from 'react-router-dom';

const UpcomingClassItem = ({ id, duration, title, image, category }) => {
	return (
		<div className='card upcoming-class-item'>
			<Link to={{ pathname: `/class/${id}`, isUpcomingClass: true }}>
				<div className='row g-0'>
					<div className='col-md-4'>
						<img
							src={image}
							className='img-fluid rounded-start'
							alt='...'
						/>
					</div>
					<div className='col-md-8'>
						<div className='card-body'>
							<h5 className='card-title'>{title}</h5>
							<p className='card-text'>
								<small className='text-muted'>{duration}</small>
							</p>
							<p className='card-text'>{category}</p>
						</div>
					</div>
				</div>
			</Link>
		</div>
	);
};

export default UpcomingClassItem;
