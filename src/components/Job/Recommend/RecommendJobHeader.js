const RecommendJobHeader = ({ header, result }) => {
	return (
		<div className='recommend-job'>
			<h6>{header}</h6>
			<small>{result} ditemukan</small>
		</div>
	);
};

export default RecommendJobHeader;
