import React from "react";
import Grid from "@material-ui/core/Grid";
import Typographie from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core";
import MainGridItem from "./mainGridItem";
import GridItem from "./gridItem";

const useStyles = makeStyles((theme) => ({
	containerGrid: {
		[theme.breakpoints.up("sm")]: {
			color: "red",
		},
	},

	SecondGridItem1: {
		backgroundColor: "green",
	},
	SecondGridItem2: {
		backgroundColor: "orange",
	},

	SecondGridItem3: {
		backgroundColor: "yellow",
	},
}));

export default function GridLayout() {
	const classes = useStyles();
	return (
		<Grid container spacing={3} className={classes.containerGrid}>
			<Grid item lg={12} sm={12} xs={12}>
				<MainGridItem title='Dog' />
			</Grid>

			<Grid item sm={4} xs={4}>
				<GridItem title='Dog' img='http://localhost:3000/images/dog.webp' />
			</Grid>

			<Grid item sm={4} xs={4}>
				<GridItem
					title='Monkey'
					img='http://localhost:3000/images/monkey.webp'
				/>
			</Grid>
			<Grid item sm={4} xs={4}>
				<GridItem
					title='Dolphin'
					img='http://localhost:3000/images/dolphinNulla qui velit duis proident..webp'
				/>
			</Grid>

			<Grid item sm={4} xs={4}>
				<GridItem title='Dog' />
			</Grid>
			<Grid item sm={4} xs={4}>
				<GridItem title='Dog' />
			</Grid>
		</Grid>
	);
}
