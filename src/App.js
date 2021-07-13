import React, { useState } from 'react';
import './App.css';


import Card from '@material-ui/core/Card';
import {
	Avatar,
	AvatarGroup,
	CardActionArea,
	CardContent,
	CardMedia,
	Typography,
	// MuiDialogTitle,
	IconButton,
	FormControl,
	Select,
	MenuItem,
	Button,
	Divider,
} from '@material-ui/core';
import InputLabel from '@material-ui/core/InputLabel';
import InputBase from '@material-ui/core/InputBase';
import TextField from '@material-ui/core/TextField';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import CloseIcon from '@material-ui/icons/Close';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
// import {Alert} from '@material-ui/lab';
import Alert from '@material-ui/core/Alert';
import Snackbar from '@material-ui/core/Snackbar';
import Slide from '@material-ui/core/Slide';
import Dialog from '@material-ui/core/Dialog';
import image1 from './images/image1.jpg';
import image2 from './images/image2.jpg';
import image3 from './images/image3.jpg';
import image4 from './images/image4.jpg';

const cards = [
	{
		img: image1,
		description: '100% cotton multicolour Oxford Chambery',
	},
	{
		img: image4,
		description: '100% cotton multicolour Oxford Chambery',
	},
	{
		img: image3,
		description: '100% cotton multicolour Oxford Chambery',
	},
	{
		img: image2,
		description: '100% handmade Designer wooden buttons.',
	},
];

 

const colors = ['red', 'blue', 'green', 'Yellow', 'pink', 'black'];

function App() {
	const [open, setOpen] = React.useState(false);
	const [company, setCompany] = React.useState('');
	const [design, setDesign] = React.useState('');
	const [quantity, setQuantity] = React.useState('');
	const [openSnack, setOpenSnack] = React.useState(false);
	const [transition, setTransition] = React.useState(undefined);

  // const classes = useStyles();

	const handleChange = (event) => {
		setCompany(event.target.value);
	};

	const handleDesignChange = (event) => {
		setDesign(event.target.value);
	};

	const handleValueChange = (event) => {
		setQuantity(event.target.value);
	};

	const handleClickOpen = () => {
		setOpen(true);
	};
	const handleClose = () => {
		setOpen(false);
	};

	function TransitionDown(props) {
		return <Slide {...props} direction="down" />;
	}

	const handleClick = (Transition) => () => {
		setTransition(() => Transition);
		setOpenSnack(true);
  };
  
  const handleCloseSnack = () => {
    setOpenSnack(false);
  }

	const DialogTitle = (props) => {
		const { children, classes, onClose, ...other } = props;
		return (
			<MuiDialogTitle disableTypography className="dialog-head" {...other}>
				<Typography variant="h4">{children}</Typography>
				{onClose ? (
					<IconButton
						aria-label="close"
						className="close-button"
						onClick={onClose}
					>
						<CloseIcon />
					</IconButton>
				) : null}
			</MuiDialogTitle>
		);
	};

	const ModalTitle = (props) => {
		const { children, classes, onClose, ...other } = props;
		return (
			<MuiDialogTitle disableTypography className="dialog-heading" {...other}>
				<IconButton aria-label="close" className="close-button">
					<KeyboardBackspaceIcon />
				</IconButton>
				<Typography variant="h6">{children}</Typography>
			</MuiDialogTitle>
		);
	};
	return (
		<div className="App">
			{/* <div className="background" ></div> */}
			{/* <div className="modal">
        <div className="top" >
          <span> Material Details </span>
          <span><i class="fas fa-times"></i></span>
        </div>
        <div className="main-body" >
          <div className="left-sec">
            <img src=""  alt=""/>
          </div>
          <div className="right-sec">
            right panel
          </div>
        </div>
      </div> */}
			<div
				style={{
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
				}}
			>
				{cards.map((card, i) => {
					return (
						<Card className="card" onClick={handleClickOpen}>
							<CardActionArea>
								<CardMedia
									component="img"
									alt="Fabrics"
									height="340"
									image={card.img}
								/>
								<CardContent className="typo">
									<Typography
										className="text"
										gutterBottom
										variant="h6"
										component="h6"
									>
										{card.description}
									</Typography>
								</CardContent>
								<CardContent className="typo">
									<Typography
										className="text-footer"
										gutterBottom
										variant="h6"
										component="h6"
									>
										Also available in
									</Typography>
									<AvatarGroup max={8}>
										<Avatar
											style={{ background: 'red', color: 'red' }}
										></Avatar>
										<Avatar
											style={{ background: 'blue', color: 'blue' }}
										></Avatar>
										<Avatar
											style={{ background: 'green', color: 'green' }}
										></Avatar>
										<Avatar
											style={{ background: 'yellow', color: 'yellow' }}
										></Avatar>
										<Avatar
											style={{ background: 'pink', color: 'pink' }}
										></Avatar>
										<Avatar
											style={{ background: 'whitesmoke', color: 'whitesmoke' }}
										></Avatar>
										<Avatar
											style={{ background: 'orange', color: 'orange' }}
										></Avatar>
										<Avatar
											style={{ background: 'brown', color: 'brown' }}
										></Avatar>
										<Avatar
											style={{ background: 'brown', color: 'brown' }}
										></Avatar>
									</AvatarGroup>
								</CardContent>
							</CardActionArea>
						</Card>
					);
				})}
				<Dialog onClose={handleClose} open={open} className="dialog">
					<DialogTitle id="customized-dialog-title" onClose={handleClose}>
						Material Details
					</DialogTitle>
					<MuiDialogContent className="head-form">
						{/* <CardMedia
            component="img"
            alt="Fabrics"
            height="340"
            // image={card.img}
          /> */}
						<ModalTitle> Assign to factory </ModalTitle>
					</MuiDialogContent>
          <Alert className="alert"  severity="info" color="warning">You won't be able to change the details later!</Alert>

					<FormControl required className="select">
						<InputLabel
							shrink
							style={{ fontWeight: 'bold' }}
							className="select"
						>
							Select Factory
						</InputLabel>
						<Select
							// labelId="demo-simple-select-placeholder-label-label"
							// id="demo-simple-select-placeholder-label"
							value={company}
							className="drop"
							onChange={handleChange}
							displayEmpty
							// className={classes.selectEmpty}
						>
							<MenuItem value={'Amayra Creations'}>Amayra Creations</MenuItem>
							<MenuItem value={'Fashion Point'}>Fashion Point</MenuItem>
							<MenuItem value={'Stitch Store'}>Stitch Store</MenuItem>
						</Select>
					</FormControl>
					<FormControl required className="select">
						<InputLabel
							shrink
							style={{ fontWeight: 'bold' }}
							className="select"
						>
							Assign for design
						</InputLabel>
						<Select
							// labelId="demo-simple-select-placeholder-label-label"
							// id="demo-simple-select-placeholder-label"
							value={design}
							className="drop"
							onChange={handleDesignChange}
							displayEmpty
							// className={classes.selectEmpty}
						>
							<MenuItem value={'ADesign Name 1'}>Design Name 1 </MenuItem>
							<MenuItem value={'Design Name 2'}>Design Name 2</MenuItem>
							<MenuItem value={'Design Name 3'}>Design Name 3</MenuItem>
							<MenuItem value={'Design Name 4'}>Design Name 4</MenuItem>
							<MenuItem value={'Design Name 5'}>Design Name 5</MenuItem>
							<MenuItem value={'Design Name 6'}>Design Name 6</MenuItem>
						</Select>
					</FormControl>
					<FormControl required className="enter">
						<InputLabel shrink style={{ fontWeight: 'bold' }}>
							Assign Quantity
						</InputLabel>
						<TextField
							type="number"
							label="Enter Quantity"
							className="drop-1"
							value={quantity}
							onChange={handleValueChange}
						></TextField>
					</FormControl>
					<FormControl disabled className="naked-text">
						<InputLabel shrink style={{ fontWeight: 'bold' }}>
							Available Inventory
						</InputLabel>
						<InputBase
							defaultValue="1650 meters"
							inputProps={{ 'aria-label': 'naked' }}
							className="inputbase"
						/>
					</FormControl>
					<FormControl required className="attach">
						<InputLabel shrink style={{ fontWeight: 'bold' }}>
							Attach Challan
						</InputLabel>
						<Button
							variant="contained"
							component="label"
							startIcon={<CloudUploadIcon />}
							className="upload-button"
						>
							Upload File
							<input type="file" hidden />
						</Button>
					</FormControl>
					<Divider light />
					<div className="footer">
						<Button variant="outlined">BACK</Button>
						<Button
							variant="contained"
							color="primary"
							onClick={handleClick(TransitionDown)}
						>
							ASSIGN TO FACTORY
						</Button>
						<Snackbar
							open={openSnack}
							onClose={handleCloseSnack}
							TransitionComponent={transition}
							message="Assigned Successfully to Factory"
							key={transition ? transition.name : ''}
						/>
					</div>
				</Dialog>
			</div>
			{/* <Dialog onClose={handleClose} open={open} >
      <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          Material Details
        </DialogTitle>
        <MuiDialogContent>
          <CardMedia
            component="img"
            alt="Fabrics"
            height="340"
            image={card.img}
          />
        </MuiDialogContent>
      </Dialog> */}
		</div>
	);
}

export default App;
