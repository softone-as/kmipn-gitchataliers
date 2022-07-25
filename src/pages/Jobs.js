import JobList from '../components/Job/JobList';
import NavTabClass from '../components/Class/NavTabClass';

import { data } from './../data/index.js';

const Jobs = () => {
	const { jobs } = data;
	return (
		<div className='col-12'>
			<NavTabClass />
			<JobList jobs={jobs} />
		</div>
	);
};

export default Jobs;
