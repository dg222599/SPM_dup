import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { NotificationManager } from 'react-notifications';
import './styles.css'

function Signup(props) {
	const [page, setPage] = useState(0);
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [address, setAddress] = useState('');
	const [city, setCity] = useState('');
	const [pincode, setPincode] = useState('');
	const [phoneno, setPhoneno] = useState('');
	const [type, setType] = useState('');
	const [enabled, setEnabled] = useState(false);

	useEffect(() => {
		if (page === 0) {
			if (name && email && password) setEnabled(true);
			else setEnabled(false);
		} else if (page === 1) {
			if (pincode && address) setEnabled(true);
			else setEnabled(false);
		} else if (page === 2) {
			if (phoneno && type) setEnabled(true);
			else setEnabled(false);
		} else setEnabled(false);
	}, [name, email, password, pincode, address, phoneno, type, page]);

	const handleNext = () => {
		switch (page) {
			case 0:
				if (!name) {
					NotificationManager.error('Name can\'t be empty', 'Error',
						2000, null, null
					);
					return;
				}
				if (!email) {
					NotificationManager.error('Email can\'t be empty', 'Error',
						2000, null, null
					);
					return;
				}
				if (!password) {
					NotificationManager.error('Password can\'t be empty', 'Error',
						2000, null, null
					);
					return;
				}
				setPage(1);
				break;
			case 1:
				setPage(2);
				break;
		}
	};

	const signup = () => {
		const data = {
			page,
			name,
			email,
			password,
			address,
			pincode,
			phoneno,
			type,
		};
		console.log(data);
		// sendToAPI(data);
	}

	// TODO: add function to go to 'toPage' iff the data until that page is 
	// complete
	const goto = toPage => {
	};

	return (
		<div className="container h-100">
			<div className="row">
				<div
					className="modal-card signup col-12 col-md-6"
				// py-5 d-flex flex-column
				// justify-content-center align-items-center align-items-md-start 
				// mt-1 mb-5 col-md-6 border"
				>
					<h1>Signup</h1>
					<div className="d-flex flex-column flex-md-row w-100 h-100
					align-items-center">
						{
							page == 0 ?
								<div className="inner basic">
									<input
										className="my-2"
										type="text"
										placeholder="Name"
										autoFocus={true}
										value={name}
										onChange={e => setName(e.target.value)}
									/>
									<input
										className="my-2"
										type="email"
										placeholder="e-mail"
										value={email}
										onChange={e => setEmail(e.target.value)}
									/>
									<input
										className="my-2"
										type="password"
										placeholder="Password"
										value={password}
										onChange={e => setPassword(e.target.value)}
									/>
								</div>
								:
								<>
									{
										page == 1 ?
											<div className="inner address">
												<textarea placeholder="Garage Address"
													autoFocus={true}
													className="my-3 d-block"
													rows={5}
													value={address}
													onChange={e => setAddress(e.target.value)}
												/>
												<input
													className="my-3 d-block"
													type="text" placeholder="City"
													value={city}
													onChange={e => setCity(e.target.value)}
												/>
												<input
													className="my-3 d-block"
													type="number" placeholder="PIN Code"
													value={pincode}
													onChange={e => setPincode(e.target.value)}
												/>
											</div>
											:
											<div className="inner type">
												<div className="w-100">
													<div className="mx-5 type-title">Type of vehicle</div>
													<div className="vehicle w-75 d-flex
												align-items-start mb-5 mx-3 mt-2">
														<div className="vehicle-type w-100 d-flex 
													align-items-center mb-2">
															<button
																className="mx-2 btn op"
																onClick={() => setType('FOUR_WHEELER')}
															>
																<svg width="175" height="125" viewBox="0 0 175 125" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
																	<rect width="175" height="125" rx="40" fill="url(#pattern1)" fillOpacity={type === 'FOUR_WHEELER' ? 1 : 0.5} />
																	<defs>
																		<pattern id="pattern1" patternContentUnits="objectBoundingBox" width="1" height="1">
																			<use xlinkHref="#image1" transform="scale(0.00571429 0.008)" />
																		</pattern>
																		<image id="image1" width="175" height="125" xlinkHref="data:image/png;base64,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" />
																	</defs>
																</svg>
															</button>
														</div>
														<div className="vehicle-type w-100 d-flex 
													align-items-center mb-2">
															<button
																className="mx-2 btn op"
																onClick={() => setType('TWO_WHEELER')}
															>
																<svg width="164" height="128" viewBox="0 0 164 128" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
																	<rect width="164" height="128" fill="url(#pattern0)" fillOpacity={type === 'TWO_WHEELER' ? 1 : 0.5} />
																	<defs>
																		<pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
																			<use xlinkHref="#image0" transform="scale(0.00609756 0.0078125)" />
																		</pattern>
																		<image id="image0" width="164" height="128" xlinkHref="data:image/png;base64,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" />
																	</defs>
																</svg>
															</button>
														</div>
													</div>
												</div>
												<input type="number" placeholder="Phone no."
													value={phoneno}
													onChange={e => setPhoneno(e.target.value)}
												/>
											</div>
									}
								</>
						}
					</div>
					<div className="d-flex align-items-center justify-content-around w-100 mt-2">
						<div>Already a member? <Link to="/login">Login</Link></div>
						{
							page === 2 &&
							<button
								className={"btn btn-primary login-btn " +
									(enabled ? "submit" : "")}
								onClick={signup}
							>
								Sign up
							</button>
						}
					</div>
					<div className="page-selector d-flex align-items-center my-3 
					justify-content-center w-100">
						<div className={"bullet " + (page === 0 ? "selected" : "")}
							onClick={() => goto(0)} />
						<div className={"bullet " + (page === 1 ? "selected" : "")}
							onClick={() => goto(1)} />
						<div className={"bullet " + (page === 2 ? "selected" : "")}
							onClick={() => goto(2)} />
					</div>
				</div>

				<div className="imageholder col-12 col-md-6 d-flex \
				align-items-center justify-content-end justify-content-md-center">
					{
						page < 2 &&
						<button
							className="btn next-btn round-btn"
							disabled={!enabled}
							onClick={handleNext}
						>
							<svg width="72" height="75" viewBox="0 0 72 75" xmlns="http://www.w3.org/2000/svg">
								<path d="M70.5096 39.834C72.417 37.8298 72.3447 34.6648 70.3482 32.7648L37.8136 1.80279C35.8171 -0.0971909 32.6524 -0.0126709 30.745 1.99157C28.8377 3.99582 28.9099 7.16082 30.9064 9.0608L59.8261 36.5826L32.1974 65.6146C30.29 67.6188 30.3623 70.7838 32.3588 72.6838C34.3553 74.5838 37.52 74.4993 39.4273 72.4951L70.5096 39.834ZM1.04673 43.1542L67.0088 41.3925L66.7805 31.3951L0.818508 33.1568L1.04673 43.1542Z" fill="#C4C4C4" />
							</svg>
						</button>
					}
				</div>
			</div>
		</div>
	)
}

export default Signup;