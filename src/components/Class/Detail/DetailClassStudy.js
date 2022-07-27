import StudyItem from './StudyItem';

const DetailClassStudy = ({ content }) => {
	return (
		<div className='study-class'>
			<div className='accordion' id='accordionStudy'>
				{content.map((item, index) => (
					<StudyItem key={index} id={index} title={item} />
				))}
			</div>
		</div>
	);
};

export default DetailClassStudy;
