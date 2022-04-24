import React from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import {
	CardMedia,
	IconButton,
	makeStyles,
	Typography,
} from "@material-ui/core";
import CardContent from "@material-ui/core/CardContent";
import { CardActions } from "@material-ui/core";
import ArrowForward from "@material-ui/icons/ArrowForward";

const useStyles = makeStyles((theme) => ({
	cardImage: {
		height: 300,
	},
}));
export default function GridItem(props) {
	const classes = useStyles();
	return (
		<Card>
			<CardHeader title={props.title} subheader='Recommended for you' />
			<CardMedia
				className={classes.cardImage}
				image={props.img}
			/>
			<CardContent>
				<Typography>
					                Magna ullamco esse eiusmod aliqua ea qui cillum eiusmod nostrud culpa exercitation.
				</Typography>
			</CardContent>
			<CardActions>
				<IconButton>
					<ArrowForward aria-label='Visit the page' />
				</IconButton>
			</CardActions>
		</Card>
	);
}
