import React from 'react';
import styled from 'styled-components';

const ImgWrapper = ({ children, margin, maxWidth, padding }) => (
	<SetImgWrapper maxWidth={maxWidth} padding={padding} margin={margin}>
		{children}
	</SetImgWrapper>
);

export default ImgWrapper;

const SetImgWrapper = styled.div`
	max-width: ${props => props.maxWidth || undefined};
	padding: ${props => props.padding || undefined};
	margin: ${props => props.margin || undefined};
	width: 100%;
	/*
	img {
		height: auto !important;
		width: 100%;
	} */
`;
