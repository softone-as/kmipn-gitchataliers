import { data } from '../../../data/dummy';
import UpcomingClassHeader from './UpcomingClassHeader';
import UpcomingClassItem from './UpcomingClassItem';

const UpcomingClass = () => {
	const { upcomingClass } = data;

	return (
		<div className='col-5 d-flex flex-column'>
			<div className='recommend-job'>
				<UpcomingClassHeader header={`Kelas yang akan datang`} />
			</div>
			<div className='upcoming-class-list'>
				{upcomingClass?.map((item) => (
					<UpcomingClassItem key={item.id} id={item.id} {...item} />
				))}
			</div>
		</div>
	);
};

export default UpcomingClass;
