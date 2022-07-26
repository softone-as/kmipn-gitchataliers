import { useParams } from 'react-router-dom';
import JobDetail from '../components/Job/Detail/JobDetail';

const JobsDetail = () => {
	const { id } = useParams();

	return (
		<div className='col-7'>
			<JobDetail id={id} />
		</div>
	);
};

export default JobsDetail;
