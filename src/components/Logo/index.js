import React from "react";
import {NavLink} from 'react-router-dom'
import logo from "./logo.svg";
import './logo.css';

const Logo = () => <NavLink to="/"><img src={logo} className="logo" alt="logo"/></NavLink>;

export default Logo;