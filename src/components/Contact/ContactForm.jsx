import React from 'react';
import { useForm } from '@formspree/react';
import { makeStyles } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useContactStyles = makeStyles((theme) => ({
	paper: {
		marginRight: theme.spacing(4),
		marginBottom: theme.spacing(4),
		padding: theme.spacing(4),
		width: '100%',
	},
	message: {
		width: '100%',
		margin: theme.spacing(1),
	},
	textField: {
		margin: theme.spacing(1),
	},
	button: {},
}));

const ContactForm = () => {
	const classes = useContactStyles();
	const [state, handleSubmit] = useForm('xrgrrdev');

	return (
		<Paper className={classes.paper}>
			<form autoComplete='off' onSubmit={handleSubmit}>
				<TextField
					className={classes.textField}
					label='email'
					name='email'
					id='email'
					type='email'
					variant='filled'
					color='secondary'
				/>
				<TextField
					className={classes.message}
					label='Message'
					name='message'
					id='message'
					placeholder='Your awesome message!'
					type='text'
					multiline
					rows={4}
					variant='filled'
					color='secondary'
				/>
				{state.succeeded ? (
					<Typography>Message Sent</Typography>
				) : (
					<Button
						type='submit'
						variant='contained'
						disabled={state.submitting}
					>
						Submit
					</Button>
				)}
			</form>
		</Paper>
	);
};

export default ContactForm;
