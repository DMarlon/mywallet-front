import React from 'react';

const AppName = () => {

    const first = () => {
        return process.env.REACT_APP_FRONT_NAME.split(" ")[0];
    }

    const last = () => {
        return process.env.REACT_APP_FRONT_NAME.split(" ")[1];
    }

	return (
		<strong><span className="text-primary">{first()}</span> <span className="text-black">{last()}</span></strong>
	);
}

export default AppName;