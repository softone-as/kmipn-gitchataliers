import ListItem from '../../ListItem';
import JobDetailInfo from './JobDetailInfo';
import JobDetailTypical from './JobDetailTypical';

export default function JobDetailBody({
	title,
	location,
	company,
	salary,
	type,
	jobDesc,
	minQualification,
	requirements,
}) {
	return (
		<div className='card-body'>
			<JobDetailInfo title={title} location={location} />
			<JobDetailTypical company={company} salary={salary} type={type} />
			<ListItem title={'Deskripsi Kerja'} listItem={jobDesc} />
			<ListItem
				title={'Kualifikasi Minimum'}
				listItem={minQualification}
			/>
			<ListItem
				title={'Keahlian yang Diperlukan'}
				listItem={requirements}
			/>
		</div>
	);
}
