import { data } from '../../../data/dummy';
import RecommendJobHeader from './RecommendJobHeader';
import RecommendJobItem from './RecommendJobItem';

const RecommendJob = ({ id, header }) => {
	const { jobs } = data;
	const currentJob = jobs?.find((item) => item.id === Number(id));
	const recommendJobs = jobs?.filter(
		(item) => item.location === currentJob.location
	);

	return (
		<div className='col-5 d-flex flex-column'>
			<div className='recommend-job'>
				<RecommendJobHeader
					header={`Rekomendasi pekerjaan di ${currentJob.location}`}
					result={recommendJobs.length}
				/>
			</div>
			<div className='job-list'>
				{recommendJobs?.map((item) => (
					<RecommendJobItem key={item.id} id={item.id} {...item} />
				))}
			</div>
		</div>
	);
};

export default RecommendJob;
