import React from "react";
import styled from "styled-components";

interface IHomePageProps {}

const HomePage = (props: IHomePageProps) => {
	return (
		<Container>
			<h1>Hot Anime</h1>
		</Container>
	);
};

const Container = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export default HomePage;
