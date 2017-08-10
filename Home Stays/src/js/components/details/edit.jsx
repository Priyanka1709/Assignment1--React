import React from 'react';
import PropTypes from 'prop-types';

const Edit = (props) => {
    return (
        <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-header">
                    <h4 className="modal-title">Edit</h4>
                </div>
                <div className="modal-body text-left">
                    <form>
                        <label>Name:</label>
                        <input type="text" className="form-control" defaultValue={props.name} ref={props.nameRef}/>
                        <label>Location:</label>
                        <input type="text" className="form-control" defaultValue={props.location} ref={props.locationRef}/>
                        <label>Average Price:</label>
                        <input type="text" className="form-control" defaultValue={props.avgPrice} ref={props.avgPriceRef}/>
                        <label>Offer:</label>
                        <input type="text" className="form-control" defaultValue={props.offer} ref={props.offerRef}/>
                    </form>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-primary" onClick={props.saveHandler}>Save</button>
                    <button type="button" className="btn btn-default" onClick={props.cancelHandler}>Cancel</button>
                </div>
            </div>
        </div>
    );
}

export default Edit;