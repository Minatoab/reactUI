import "./App.css";
import React from "react";
import { Container, CssBaseline } from "@material-ui/core";
import Nav from "./nav";
import GridLayout from "./gridLayout";

function App() {
	return (
		<div className='App'>
			<CssBaseline />
			<Nav />
			<Container>
				<main>
					

					<GridLayout />
				</main>
			</Container>
		</div>
	);
}

export default App;
