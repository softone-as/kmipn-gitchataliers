import JobList from '../components/Job/JobList';

import { data } from '../data/dummy.js';

const Jobs = () => {
	const { jobs } = data;
	return (
		<div className='col-12'>
			<JobList jobs={jobs} />
		</div>
	);
};

export default Jobs;
