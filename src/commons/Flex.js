import React from 'react';
import styled from 'styled-components';

const Flex = ({
	children,
	content,
	direction,
	flow,
	items,
	justify,
	self,
	wrap
}) => (
	<SetFlex
		content={content}
		direction={direction}
		flow={flow}
		items={items}
		justify={justify}
		self={self}
		wrap={wrap}
	>
		{children}
	</SetFlex>
);

export default Flex;

const SetFlex = styled.div`
	display: flex;
	flex-direction: ${props => props.direction || undefined};
	justify-content: ${props => props.justify || undefined};
	align-items: ${props => props.items || undefined};
	align-content: ${props => props.content || undefined};
	align-self: ${props => props.self || undefined};
	flex-wrap: ${props => props.wrap || undefined};
	flex-flow: ${props => props.flow || undefined};
	height: 100%;
`;
