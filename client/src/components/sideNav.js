import React from "react";
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import { Link, useLocation } from "react-router-dom";

import "../assets/css/sideNav.css";

function SideBar() {

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
                <NavItem eventKey="recipe/create">
                    <NavIcon>
                        <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
                    </NavIcon>
                    <NavText>
                        New Recipe
                    </NavText>
                </NavItem>
                <NavItem eventKey="recipe/library">
                    <NavIcon>
                        <i className="fa fa-fw fa-list-alt" style={{ fontSize: '1.75em' }} />
                    </NavIcon>
                    <NavText>
                        Recipe Library
                    </NavText>
                    <NavItem eventKey="recipe/library">
                        <NavText>
                            View Library
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="recipe/edit">
                        <NavText>
                            Edit Recipes
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="recipe/export">
                        <NavText>
                            Export to Excel
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="recipe/print">
                        <NavText>
                            Print Nutrition Info
                        </NavText>
                    </NavItem>
                </NavItem>
                <NavItem eventKey="home">
                    <NavIcon>
                        <i className="fa fa-fw fa-cogs" style={{ fontSize: '1.75em' }} />
                    </NavIcon>
                    <NavText>
                        Logout
                    </NavText>
                </NavItem>
            </SideNav.Nav>
        </SideNav>
    );
}

export default SideBar;