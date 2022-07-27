import { data } from '../../../data/dummy';
import JobDetailBody from './JobDetailBody';
import JobDetailImage from './JobDetailImage';

const JobDetail = ({ id }) => {
	const { jobs } = data;
	const detail = jobs.find((job) => job.id === Number(id));

	return (
		<div className='col-7'>
			<div className='card job-item-detail'>
				<JobDetailImage image={detail?.image} />
				<JobDetailBody {...detail} />
			</div>
		</div>
	);
};

export default JobDetail;
