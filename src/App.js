import React, { Component } from 'react';
import { jsonServerRestClient, Admin, Resource, Delete } from 'admin-on-rest';

// see: https://material.io/icons/
import PostIcon from 'material-ui/svg-icons/action/book';
import UserIcon from 'material-ui/svg-icons/social/group';
import DashboardIcon from 'material-ui/svg-icons/social/poll'

import { PostList, PostEdit, PostCreate } from './posts';
import { UserList } from './users';
import { DashboardList, DashboardEdit, DashboardCreate } from './dashboards';
import vietnameseMessages from 'aor-language-vietnamese';
import myApiRestClient from './restClient';
import authClient from './authClient';

const messages = {
	'vi': vietnameseMessages,
}

const App = () => (
    // <Admin restClient={jsonServerRestClient('http://jsonplaceholder.typicode.com')}>
    <Admin restClient={myApiRestClient} authClient={authClient} locale="vi" messages={messages}>
      <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} remove={Delete} icon={PostIcon}/>
      <Resource name="users" list={UserList} icon={UserIcon} />
      <Resource name="dashboards" list={DashboardList} edit={DashboardEdit} create={DashboardCreate} icon={DashboardIcon} />
    </Admin>
);

export default App;
