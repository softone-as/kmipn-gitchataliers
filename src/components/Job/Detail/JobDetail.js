import { data } from '../../../data/dummy';
import JobDetailBody from './JobDetailBody';
import JobDetailImage from './JobDetailImage';

const JobDetail = ({ id }) => {
	const { jobDetail } = data;
	const detail = jobDetail.find((job) => job.id === Number(id));

	return (
		<div className='card job-item-detail'>
			<JobDetailImage image={detail?.image} />
			<JobDetailBody {...detail} />
		</div>
	);
};

export default JobDetail;
