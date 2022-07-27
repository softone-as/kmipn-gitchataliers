import ClassItem from './ClassItem';

const ClassList = ({ classes }) => {
	return (
		<div className='tab-content' id='tableTabContent'>
			<div
				className='tab-pane fade show active'
				id='sd'
				role='tabpanel'
				aria-labelledby='sd-tab'
			>
				<div className='row row-cols-1 row-cols-md-3 g-4'>
					{classes.map((course) => (
						<ClassItem key={course.id} id={course.id} {...course} />
					))}
				</div>
			</div>
		</div>
	);
};

export default ClassList;
