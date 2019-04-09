import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import theme from 'assets/styled/theme';

const Title = ({
	children,
	align,
	color,
	fontSize,
	fontWeight,
	lineHeight,
	margin,
	medAlign,
	padding,
	smAlign,
	textTransform
}) => (
	<SetTitle
		color={color}
		fontSize={fontSize}
		fontWeight={fontWeight}
		lineHeight={lineHeight}
		align={align}
		smAlign={smAlign}
		margin={margin}
		medAlign={medAlign}
		padding={padding}
		textTransform={textTransform}
	>
		{children}
	</SetTitle>
);

Title.propTypes = {
	align: PropTypes.string,
	color: PropTypes.string,
	fontSize: PropTypes.string,
	fontWeight: PropTypes.string,
	lineHeight: PropTypes.string,
	margin: PropTypes.string,
	medAlign: PropTypes.string,
	padding: PropTypes.string,
	smAlign: PropTypes.string,
	textTransform: PropTypes.string
};
export default Title;

const SetTitle = styled.h1`
	color: ${props => props.color};
	font-size: ${props => props.fontSize || undefined};
	line-height: ${props => props.lineHeight || undefined};
	text-align: ${props => props.align || undefined};
	font-weight: ${props => props.fontWeight || undefined};
	text-transform: ${props => props.textTransform || undefined};
	padding: ${props => props.padding || undefined};
	margin: ${props => props.margin || undefined};
	/* Mobile */
	@media screen and (max-width: ${theme.breakpoints.mobile}) {
		text-align: ${props => props.smAlign};
	}

	/* Tablets */
	@media screen and (max-width: ${theme.breakpoints.tablet}) {
		text-align: ${props => props.medAlign};
	}
`;
