import { useParams } from 'react-router-dom';
import Email from '../components/Email';

const EmailPage = () => {
	const { id } = useParams();

	return <Email id={id} />;
};

export default EmailPage;
