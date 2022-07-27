import { Link } from 'react-router-dom';

const RecommendJobItem = ({ id, image, location, title, company }) => {
	return (
		<div className='card job-recommend-item'>
			<Link to={`/job/${id}`}>
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
							<p className='card-text'>{company}</p>
							<p className='card-text'>
								<small className='text-muted'>{location}</small>
							</p>
						</div>
					</div>
				</div>
			</Link>
		</div>
	);
};

export default RecommendJobItem;
