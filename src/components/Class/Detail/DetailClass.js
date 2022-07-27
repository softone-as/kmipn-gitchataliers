import { data } from '../../../data/dummy';
import DetailClassBody from './DetailClassBody';
import DetailClassHeader from './DetailClassHeader';

const DetailClass = ({ id, isUpcomingClass }) => {
	const { classes, upcomingClass } = data;
	const detail = isUpcomingClass
		? upcomingClass.find((course) => course.id === Number(id))
		: classes.find((course) => course.id === Number(id));

	const contentStudy = detail.contents.map((item) => {
		let [a] = Object.keys(item);
		return a;
	});

	const totalSection = detail.contents.map(
		(item) => item[Object.keys(item)].length
	);
	const totalStudy = totalSection.reduce(
		(accumulator, currentValue) => accumulator + currentValue
	);

	return (
		<div className='col-7'>
			<DetailClassHeader
				image={detail?.image}
				imgAuthor={detail?.imgAuthor}
				title={detail?.title}
				description={detail?.description}
				author={detail?.author}
			/>
			<DetailClassBody
				totalStudy={totalStudy}
				contents={contentStudy}
				section={detail?.contents?.length}
				duration={detail?.duration}
			/>
		</div>
	);
};

export default DetailClass;
