import DetailClassStudy from './DetailClassStudy';

export default function ContentClass({
	contents,
	section,
	totalStudy,
	duration,
}) {
	return (
		<div className='content-class'>
			<div className='content-class-header p-3 py-4'>
				<h4>Konten pelajaran</h4>
				<p className='card-text'>
					{`${section} bagian • ${totalStudy} pelajaran • ${duration} total durasi`}
				</p>
			</div>
			<DetailClassStudy content={contents} />
		</div>
	);
}
