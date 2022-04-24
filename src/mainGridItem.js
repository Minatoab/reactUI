import React from "react";
import Typographie from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
	container: {
		display: "flex",
		flexDirection: "column",
		height: 300,
		color: "white",
		fontSize: "bold",
		backgroundSize: "cover",
		backgroundImage: "url(http://localhost:3000/images/back.jpg)",
	},
	mainItem: {
		padding: theme.spacing(6),

		textAlign: "left",
	},
}));
export default function MainGridItem() {
	const classes = useStyles();

	return (
		<Grid container className={classes.container}>
			<Grid className={classes.mainItem} item md={6} lg={6} sm={12} xs={12}>
				<Typographie component='h2' variant='h4'>
					Code Source
				</Typographie>

				<Typographie paragraph>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
					praesentium nobis, unde commodi possimus dolore eum similique ducimus
					autem voluptatem dolores tempora iusto error perspiciatis quaerat
					doloribus laboriosam libero. Consectetur.
				</Typographie>
			</Grid>
		</Grid>
	);
}
