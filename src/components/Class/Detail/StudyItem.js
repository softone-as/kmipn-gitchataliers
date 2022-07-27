const StudyItem = ({ title, id }) => {
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
				<div className='accordion-body'>
					<p>Keterangan tiap section study</p>
				</div>
			</div>
		</div>
	);
};

export default StudyItem;
