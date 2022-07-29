import ClassItem from './ClassItem';

const ClassList = ({ classes, category }) => {
	const filteredClass =
		category === 'Semua'
			? classes
			: classes.filter((course) => course.category === category);

	return (
		<div className='tab-content' id='tableTabContent'>
			<div
				className='tab-pane fade show active'
				id='sd'
				role='tabpanel'
				aria-labelledby='sd-tab'
			>
				<div className='row row-cols-1 row-cols-md-3 g-4'>
					{filteredClass.map((course) => (
						<ClassItem key={course.id} id={course.id} {...course} />
					))}
				</div>
			</div>
		</div>
	);
};

export default ClassList;
