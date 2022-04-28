import React, { useState, useEffect } from "react";
import Container from "@material-ui/core/Container";
import Toolbar from "@material-ui/core/Toolbar";
import Typographie from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import Drawer from "@material-ui/core/Drawer";
import MenuIcon from "@material-ui/icons/Menu";
import { MenuItem } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
	siteTitle: {
		fontWeight: "bold",
		letterSpacing: 2.5,
	},
	menuBox: {
		display: "flex",
		flexDirection: "column",
		[theme.breakpoints.up("md")]: {
			paddingLeft: theme.spacing(5),
			flexDirection: "row",
		},
	},
	menuOption: {
		padding: theme.spacing(1),
		color: "white",
		fontSize: "bold",
	},
	toolBar: {
		display: "flex",
		flexDirection: "column",
		marginLeft: "1rem",
		[theme.breakpoints.up("md")]: {
			flexDirection: "row",

			alignItems: "flex-end",
			justifyContent: "space-between",
		},
	},
	AppBar: {
		paddingLeft: theme.spacing(5),
		marginLeft: "1rem",
	},
	menuIcon: {
		color: "white",
	},
}));

export default function Nav() {
	const getToggleMenuOptions = () => {
		return (
			<Box className={classes.menuBox}>
				{["home", "about", "contact"].map((item) => (
					<MenuItem>{item}</MenuItem>
				))}
			</Box>
		);
	};

	const [state, setState] = useState({
		toggleMenu: false,
		toggleMenuOpen: false,
	});
	const { toggleMenu, toggleMenuOpen } = state;
	const handleToggelMenuOpen = () =>
		setState((prevState) => ({
			...prevState,
			toggleMenuOpen: true,
		}));
	const handelToggelMenuClose = () =>
		setState((prevState) => ({
			...prevState,
			toggleMenuOpen: false,
		}));
	const displatyLargeMenu = () => {
		return (
			<Toolbar className={classes.toolBar}>
				<Typographie variant='h4' className={classes.siteTitle}>
					Mamouth Interactive
				</Typographie>
				<Box className={classes.menuBox}>
					{["home", "about", "contact"].map((item) => (
						<Link
							component='button'
							variant='body1'
							className={classes.menuOption}>
							{item.toUpperCase()}
						</Link>
					))}
				</Box>
			</Toolbar>
		);
	};
	const displayToggleMenu = () => {
		return (
			<Toolbar>
				<IconButton {...{ onClick: handleToggelMenuOpen }}>
					<MenuIcon className={classes.menuIcon} />
				</IconButton>
				<Drawer
					{...{
						anchor: "right",
						open: toggleMenuOpen,
						onClose: handelToggelMenuClose,
					}}>
					<div>{getToggleMenuOptions()}</div>
				</Drawer>
			</Toolbar>
		);
	};

	useEffect(() => {
		const setResponsiveniss = () => {
			return window.innerWidth < 960
				? setState((prevState) => ({ ...prevState, toggleMenu: true }))
				: setState((prevState) => ({ ...prevState, toggleMenu: false }));
		};
		setResponsiveniss();
		window.addEventListener("resize", () => setResponsiveniss());
	}, []);

	const classes = useStyles();
	return (
		<Container>
			<AppBar className={classes.AppBar}>
				{toggleMenu ? displayToggleMenu() : displatyLargeMenu()}
			</AppBar>
		</Container>
	);
}
