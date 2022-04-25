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

			<Grid item lg={4} md={6} sm={12} xs={12}>
				<GridItem title='Dog' img='http://localhost:3000/images/dog.webp' />
			</Grid>

			<Grid item lg={4} md={6} sm={12} xs={12}>
				<GridItem
					title='Bird'
					img='https://cdn.pixabay.com/photo/2017/02/07/16/47/kingfisher-2046453_960_720.jpg'
				/>
			</Grid>
			<Grid item lg={4} md={6} sm={12} xs={12}>
				<GridItem
					title='Dolphin'
					img='http://localhost:3000/images/dolphin.webp'
				/>
			</Grid>

			<Grid item  lg={4} md={6} sm={12} xs={12}>
				<GridItem title='Tiger' img='https://cdn.pixabay.com/photo/2018/03/26/20/49/tiger-3264048_960_720.jpg' />
			</Grid>
			<Grid item lg={4} md={6} sm={12} xs={12}>
				<GridItem title='Fox'
				img='https://cdn.pixabay.com/photo/2016/03/27/22/22/fox-1284512_960_720.jpg' />
			</Grid>
			<Grid item lg={4} md={6} sm={12} xs={12}>
				<GridItem title='Turtle'
				img='https://cdn.pixabay.com/photo/2017/05/31/18/38/sea-2361247_960_720.jpg' />
			</Grid>


		</Grid>
	);
}
