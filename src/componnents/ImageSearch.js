import React, { useState } from 'react';

const ImageSearch = ({ searchText }) => {
    const [text, setText] = useState('');
    const handleSubmit = (evt) => {
        evt.preventDefault();
        searchText(text)
        console.log(text);
    }
    const handleChange = (evt) => {
        const theText = evt.target.value;
        setText(theText);
    }


    return (
        <form onSubmit={handleSubmit}>
            <div className="search-form-container ml-auto mr-auto my-5">
                <div className="form-group">
                    <label className="sr-only" htmlFor="search">Username</label>
                    <div className="input-group">
                        <input
                            type="text"
                            className="form-control"
                            id="search"
                            placeholder="Your query"
                            onChange={handleChange}
                        />
                        <div className="input-group-prepend">
                            <button className="btn btn-primary">Search</button>
                        </div>
                    </div>
                </div>
            </div>
        </form >
    )

}
export default ImageSearch;