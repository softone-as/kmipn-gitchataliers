import ContentClass from './ContentClass';
import DetailClassOverview from './DetailClassOverview';

const DetailClassBody = ({ contents, section, totalStudy, duration }) => {
	return (
		<div className='card'>
			<div className='card-body'>
				<DetailClassOverview contents={contents} />
				<ContentClass
					contents={contents}
					section={section}
					totalStudy={totalStudy}
					duration={duration}
				/>
			</div>
		</div>
	);
};

export default DetailClassBody;
