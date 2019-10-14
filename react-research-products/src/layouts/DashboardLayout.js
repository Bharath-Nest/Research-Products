import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
// import { Button, Badge, NavItem, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, Card } from 'reactstrap';
import { Header, SidebarNav, Footer, PageContent, Avatar, Chat, PageAlert, Page } from '../vibe';

import authProf from '../assets/images/auth_profile.svg';
import avatar1 from '../assets/images/avatar1.png';

import nav from '../_nav';
import routes from '../views';
import ContextProviders from '../vibe/components/utilities/ContextProviders';

const MOBILE_SIZE = 992;

export default class DashboardLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebarCollapsed: true,
      isMobile: window.innerWidth <= MOBILE_SIZE,
      showChat1: true,
    };
  }

  closeChat = () => {
    this.setState({ showChat1: false });
  };

  render() {
    const { sidebarCollapsed } = this.state;
    const sidebarCollapsedClass = sidebarCollapsed ? 'side-menu-collapsed' : '';
    return (
      <ContextProviders>
        <div className={`app ${sidebarCollapsedClass}`}>
          <PageAlert />

          <div className="app-body">
            <SidebarNav
              nav={nav}
              logo={authProf}
              toggleSidebar={this.toggleSideCollapse}
            />
            <Page>
              <Switch>
                {routes.map((page, key) => (
                  <Route path={page.path} component={page.component} key={key} />
                ))}
                <Redirect from="/" to="/home" />
              </Switch>
            </Page>
          </div>

          <Chat.Container>
            {this.state.showChat1 && (
              <Chat.ChatBox name="Messages" status="online" image={avatar1} close={this.closeChat} />
            )}
          </Chat.Container>
        </div>

      </ContextProviders>
    );
  }
}