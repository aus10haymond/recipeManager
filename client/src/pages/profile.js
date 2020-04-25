import React from 'react';
import './loginORcreate.css';
import { Link } from "react-router-dom";

function profilePage() {
    return (
        <div>
            <h1>hello this is profile page</h1>
            <Link to="/">
                <button type="submit" class="btn btn-success">back to home</button>
            </Link>
        </div>
    );
}

export default profilePage;