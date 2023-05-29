import React from 'react';
import { Switch, Route, Router } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';

import Landing from './components/Landing';
import Pricing from './components/Pricing';

// cuando buildea para prod, en vez de nombrar el css como jss1,2,3
// los va a nombrar ma1,2,3
// para evitar la colision de clases con los otros proyectos
const generateClassName = createGenerateClassName({
	productionPrefix: 'ma',
});

export default ({ history }) => {
	return <div>
		<Router history={ history }>
			<StylesProvider generateClassName={generateClassName}>
				<Switch>
					<Route exact path="/pricing" component={Pricing} />
					<Route path="/" component={Landing} />
				</Switch>
			</StylesProvider>
		</Router>
	</div>
}