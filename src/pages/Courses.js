import ClassList from '../components/Class/ClassList';
import NavTabClass from '../components/Class/NavTabClass';

import { data } from '../data/dummy.js';

const Courses = () => {
	const { classes } = data;

	return (
		<div className='col-12'>
			<NavTabClass categories={['SD', 'SMP', 'SMA', 'Kerja']} />
			<ClassList classes={classes} />
		</div>
	);
};

export default Courses;
