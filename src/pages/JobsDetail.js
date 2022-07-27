import { useParams } from 'react-router-dom';
import JobDetail from '../components/Job/Detail/JobDetail';
import RecommendJob from '../components/Job/Recommend/RecommendJob';

const JobsDetail = () => {
	const { id } = useParams();

	return (
		<>
			<JobDetail id={id} />
			<RecommendJob id={id} />
		</>
	);
};

export default JobsDetail;
