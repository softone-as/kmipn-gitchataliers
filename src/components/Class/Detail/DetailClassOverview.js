export default function DetailClassOverview({ contents }) {
	return (
		<div className='overview-class border rounded-3'>
			<h4 className='p-3'>Yang akan dipelajari</h4>
			<div className='container'>
				<div className='row'>
					<div className='col'>
						<ul>
							{contents.map((content, index) => (
								<li key={index}>{content}</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
}
