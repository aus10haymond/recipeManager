import React from "react";
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import { Link, useLocation } from "react-router-dom";

import "../assets/css/sideNav.css";

function UserNav() {

    const location = useLocation();
    

    return (
        <SideNav style={{position: "fixed"}}
            onSelect={(selected) => {
                const to = "/" + selected;
                window.location.pathname = to;
                console.log(to);
                console.log(location);
            }}
        >
            <SideNav.Toggle />
            <SideNav.Nav>
                <NavItem eventKey="login">
                    <NavIcon>
                        <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
                    </NavIcon>
                    <NavText>
                        Login
                    </NavText>
                </NavItem>
                <NavItem eventKey="signup">
                    <NavIcon>
                        <i className="fa fa-fw fa-line-chart" style={{ fontSize: '1.75em' }} />
                    </NavIcon>
                    <NavText>
                        Sign Up
                    </NavText>
                </NavItem>
            </SideNav.Nav>
        </SideNav>
    );
}

export default UserNav;