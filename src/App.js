import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CourseDetail from './pages/CourseDetail';
import Courses from './pages/Courses';
import Jobs from './pages/Jobs';
import JobsDetail from './pages/JobsDetail';
import Layout from './pages/layout';

function App() {
	return (
		<Router>
			<Switch>
				<Route path='/' exact>
					<Layout children={<Courses />} title={'Pelajaran'} />
				</Route>
				<Route path='/class' exact>
					<Layout children={<Courses />} title={'Pelajaran'} />
				</Route>
				<Route path='/class/:id' exact>
					<Layout children={<CourseDetail />} />
				</Route>
				<Route path='/job' exact>
					<Layout children={<Jobs />} title={'Lowongan Pekerjaan'} />
				</Route>
				<Route path='/job/:id' exact>
					<Layout children={<JobsDetail />} />
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
