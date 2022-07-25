import JobItem from './JobItem';

const JobList = ({ jobs }) => {
	return (
		<div className='tab-content' id='tableTabContent'>
			<div
				className='tab-pane fade show active'
				id='sd'
				role='tabpanel'
				aria-labelledby='sd-tab'
			>
				<div className='row row-cols-1 row-cols-md-3 g-4'>
					{jobs.map((job) => (
						<JobItem key={job.id} {...job} />
					))}
				</div>
			</div>
		</div>
	);
};

export default JobList;
