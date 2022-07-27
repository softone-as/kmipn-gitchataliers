import { useParams } from 'react-router-dom';
import DetailClass from '../components/Class/Detail/DetailClass';

const CourseDetail = () => {
	const { id } = useParams();

	return (
		<>
			<DetailClass id={id} />
		</>
	);
};

export default CourseDetail;
