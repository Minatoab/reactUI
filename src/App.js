import "./App.css";
import React from "react";
import { Container, CssBaseline, makeStyles } from "@material-ui/core";
import Nav from "./nav";
import GridLayout from "./gridLayout";

const useStyles = makeStyles((theme) => ({
	main: {
		marginTop: "5rem",
	},
}));
function App() {
	const classes = useStyles();
	return (
		<div className='App'>
			<CssBaseline />
			<Nav />
			<Container>
				<main className={classes.main}>
					<GridLayout />
				</main>
			</Container>
		</div>
	);
}

export default App;
