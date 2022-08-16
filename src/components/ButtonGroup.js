import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ButtonGroup = ({ labelAction, onClickAction, onClickClean, labelClean, toLink, labelLink }) => {

    return (
        <div className="d-grid gap-2 mt-2">
            { onClickAction && <Button variant="primary" className="text-white" size="lg" onClick={onClickAction}>{labelAction ?? "Action"}</Button> }
            { onClickClean && <Button variant="secondary" size="lg" onClick={onClickClean}>{labelClean ?? "Clean"}</Button>}
            { toLink && <Link to={toLink || "/"} className="col-12">
                <Button variant="secondary" size="lg" className="w-100">{labelLink ?? "Back"}</Button>
            </Link> }
        </div>
    );
}

export default ButtonGroup;