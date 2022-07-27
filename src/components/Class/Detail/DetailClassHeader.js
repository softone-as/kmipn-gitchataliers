const DetailClassHeader = ({
	image,
	imgAuthor,
	title,
	description,
	author,
}) => {
	return (
		<div className='card class-item-detail'>
			<img src={image} className='card-img img-class' alt='...' />
			<div className='card-img-overlay text-white d-flex flex-column justify-content-between'>
				<div className='class-description'>
					<h5 className='card-title mt-2'>{title}</h5>
					<p className='card-text fw-light'>{description}</p>
				</div>
				<div className='author d-flex align-items-center'>
					<img src={imgAuthor} alt='' />
					<span>{author}</span>
				</div>
			</div>
		</div>
	);
};

export default DetailClassHeader;
