import { useLocation, useParams } from 'react-router-dom';
import DetailClass from '../components/Class/Detail/DetailClass';
import UpcomingClass from '../components/Class/Upcoming/UpcomingClass';

const CourseDetail = () => {
	const { id } = useParams();
	let { isUpcomingClass } = useLocation();

	return (
		<>
			<DetailClass id={id} isUpcomingclassName={isUpcomingClass} />
			<UpcomingClass />
		</>
	);
};

export default CourseDetail;
