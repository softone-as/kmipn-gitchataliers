import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Courses from './pages/Courses';
import Jobs from './pages/Jobs';
import Layout from './pages/layout';

function App() {
	return (
		<Router>
			<Switch>
				<Route path='/' exact>
					<Layout children={<Courses />} />
				</Route>
				<Route path='/job' exact>
					<Layout children={<Jobs />} />
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
