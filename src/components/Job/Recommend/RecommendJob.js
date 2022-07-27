import { data } from '../../../data/dummy';
import RecommendJobHeader from './RecommendJobHeader';
import RecommendJobItem from './RecommendJobItem';

const RecommendJob = ({ header, result, location }) => {
	const { jobDetail } = data;
	const recommendJobs = jobDetail?.filter(
		(item) => item.location === location
	);

	return (
		<div className='col-5 d-flex flex-column'>
			<div className='recommend-job'>
				<RecommendJobHeader header={header} result={result} />
			</div>
			<div className='job-list'>
				{recommendJobs?.map((item) => (
					<RecommendJobItem id={item.id} {...item} />
				))}
			</div>
		</div>
	);
};

export default RecommendJob;
