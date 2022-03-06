import React from 'react'
import { Link } from 'react-router-dom'
import './SubNavigationBar.css'
function SubNavigationBar({id,name}) {
    return (
        <ul className="disease_sub_nav">
            <li><Link to="/diseases">Diseases</Link></li>
            <li><Link to={`/disease/${id}`}>/</Link></li>
            <li><Link to={`/disease/${id}`}>Disease</Link></li>
            <li><Link to={`/disease/${id}`}>/</Link></li>
            <li><Link className="active" to={`/disease/${id}`}>{name}</Link></li>
        </ul>
    )
}

export default SubNavigationBar
