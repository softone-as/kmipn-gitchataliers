export default function ListItem({ title, listItem }) {
	return (
		<div className='job-desc mt-4'>
			<h4>{title}</h4>
			<ul>
				{listItem.map((item, index) => (
					<li key={index}>{item}</li>
				))}
			</ul>
		</div>
	);
}
