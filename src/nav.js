import React from "react";
import Container from "@material-ui/core/Container";
import Toolbar from "@material-ui/core/Toolbar";
import Typographie from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
	menuBox: {
		display: "flex",
		flexDirection: "column",

		[theme.breakpoints.up("md")]: {
			color: "red",
			flexDirection: "row",
		},
	},
	menuOption: {
		padding: theme.spacing(1),
		[theme.breakpoints.up("md")]: {
			color: "red",
			paddingLeft: theme.spacing(5),
		},
	},
}));

export default function Nav() {
	const classes = useStyles();
	return (
		<Container>
			<Toolbar>
				<Typographie>Mamouth Interactive</Typographie>
				<Box className={classes.menuBox}>
					{["home", "about", "contact"].map((item) => (
						<Link
							component='button'
							variant='body1'
							className={classes.menuOption}>
							{" "}
							{item.toUpperCase()}{" "}
						</Link>
					))}
				</Box>
			</Toolbar>
		</Container>
	);
}
