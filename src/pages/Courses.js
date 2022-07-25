import ClassList from '../components/Class/ClassList';
import NavTabClass from '../components/Class/NavTabClass';

import { data } from './../data/index.js';

const Courses = () => {
	const { classes } = data;
	return (
		<div className='col-12'>
			<NavTabClass />
			<ClassList classes={classes} />
		</div>
	);
};

export default Courses;