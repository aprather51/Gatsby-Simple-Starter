import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

/* Styled - Global - Theme*/
import { Global } from 'assets/styled/global';
import { ThemeProvider } from 'styled-components';
import theme from 'assets/styled/theme';

const Layout = ({ children }) => (
	<Fragment>
		<Global suppressMultiMountWarning />
		<ThemeProvider theme={theme}>
			<Fragment>{children}</Fragment>
		</ThemeProvider>
	</Fragment>
);

Layout.propTypes = {
	children: PropTypes.node.isRequired
};

export default Layout;
