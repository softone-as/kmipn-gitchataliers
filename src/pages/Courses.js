import { useState } from 'react';
import ClassList from '../components/Class/ClassList';
import NavTabClass from '../components/Class/NavTabClass';

import { data } from '../data/dummy.js';

const Courses = () => {
	const { classes } = data;
	const [category, setCategory] = useState(null);

	return (
		<div className='col-12'>
			<NavTabClass
				categories={['Semua', 'SD', 'SMP', 'SMA', 'Umum']}
				setCategory={setCategory}
			/>
			<ClassList classes={classes} category={category ?? 'Semua'} />
		</div>
	);
};

export default Courses;
