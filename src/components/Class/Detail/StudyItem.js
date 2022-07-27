const StudyItem = ({ title, video, id }) => {
	return (
		<div className='accordion-item'>
			<h2 className='accordion-header' id={`heading${id}`}>
				<button
					className='accordion-button collapsed'
					type='button'
					data-bs-toggle='collapse'
					data-bs-target={`collapse${id}`}
					aria-expanded='false'
					aria-controls='collapseOne'
				>
					{title}
				</button>
			</h2>
			<div
				id={`collapse${id}`}
				className='accordion-collapse collapse'
				aria-labelledby={`heading${id}`}
				data-bs-parent='#accordionStudy'
			>
				<div className='accordion-body'>{video}</div>
			</div>
		</div>
	);
};

export default StudyItem;
