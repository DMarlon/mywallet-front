import React from 'react';
import { Link } from 'react-router-dom';
import AppName from '../components/AppName';

const Home = () => {
	return (
		<h1>Welcome to <Link to="/wallet" className="text-decoration-none"><AppName/></Link></h1>
	);
}

export default Home;