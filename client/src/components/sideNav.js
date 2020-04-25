import React from "react";
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';

import '@trendmicro/react-sidenav/dist/react-sidenav.css';

function SideBar() {

    return (
        <SideNav
            onSelect={(selected) => {
                // Add your code here
            }}
        >
            <SideNav.Toggle />
            <SideNav.Nav defaultSelected="home">
                <NavItem eventKey="home">
                    <NavIcon>
                        <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
                    </NavIcon>
                    <NavText>
                        New Recipe
            </NavText>
                </NavItem>
                <NavItem eventKey="Recipe">
                    <NavIcon>
                        <i className="fa fa-fw fa-line-chart" style={{ fontSize: '1.75em' }} />
                    </NavIcon>
                    <NavText>
                        Recipe
            </NavText>
                    <NavItem eventKey="Recipe/edit">
                        <NavText>
                            Edit Recipe
                </NavText>
                    </NavItem>
                    <NavItem eventKey="Recipe/export">
                        <NavText>
                            Export to Excel
                </NavText>
                    </NavItem>
                    <NavItem eventKey="Recipe/print">
                        <NavText>
                            Print Nutrition Info
                </NavText>
                    </NavItem>
                </NavItem>
            </SideNav.Nav>
        </SideNav>
    );
}

export default SideBar;