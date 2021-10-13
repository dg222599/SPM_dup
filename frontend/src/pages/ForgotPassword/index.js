import React, { useState } from 'react';
import { NotificationManager } from 'react-notifications';
import './styles.css'

export default function ForgotPassword(props) {
	const [email, setEmail] = useState('');

	const handleSubmit = () => {
		if (email.length <= 0) {
			NotificationManager.error('Email canno\'t be empty', 'Error', 2000, null, null);
			return;
		}
		// TODO: insert backend code for forgot password
	}

	return (
		<>
			<div className="h-100 container d-flex justify-content-center">
				<div className="forgot my-1">
					<div className="modal-card">
						<h1 className="my-2">Forgot Password</h1>
						<div className="d-flex flex-column align-items-center justify-content-center flex-grow-1">
							<div className="my-2 form-field w-100">
								<input type="email"
									className="w-100 email-field mb-3"
									placeholder="Enter your email"
									value={email}
									onChange={e => setEmail(e.target.value)}
								/>
							</div>
							<h5 className="my-2 text-center">
								Enter your mail to get reset password link
							</h5>
							<button
								className="my-2 btn fp-submit"
								onClick={handleSubmit}
							>
								Submit
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

