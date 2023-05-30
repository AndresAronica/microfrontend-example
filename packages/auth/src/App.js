import React from 'react';
import { Switch, Route, Router } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';

import Signin from './components/Signin';
import Signup from './components/Signup';

// cuando buildea para prod, en vez de nombrar el css como jss1,2,3
// los va a nombrar ma1,2,3
// para evitar la colision de clases con los otros proyectos
const generateClassName = createGenerateClassName({
	productionPrefix: 'ma',
});

export default ({ history, onSignIn }) => {
	return <div>
		<Router history={ history }>
			<StylesProvider generateClassName={generateClassName}>
				<Switch>
					<Route exact path="/auth/signin">
						<Signin onSignIn={onSignIn} />
					</Route>
					<Route exact path="/auth/signup">
						<Signup onSignIn={onSignIn} />
					</Route>

				</Switch>
			</StylesProvider>
		</Router>
	</div>
}