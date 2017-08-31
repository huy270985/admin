import React, { Component } from 'react';
import { jsonServerRestClient, Admin, Resource, Delete } from 'admin-on-rest';

// see: https://material.io/icons/
import PostIcon from 'material-ui/svg-icons/action/book';
import UserIcon from 'material-ui/svg-icons/social/group';
import DashboardIcon from 'material-ui/svg-icons/social/poll'

/**
VIEW
*/
import { PostList, PostEdit, PostCreate } from './posts';
import { UserList } from './users';
import { DashboardList, DashboardEdit, DashboardCreate } from './dashboards';
import { TestList, TestEdit } from './test';

/**
REST Client
*/
import myApiRestClient from './restClient';
import { RestClient, AuthClient } from 'aor-firebase-client';
import authClient from './authClient';

// import vietnameseMessages from 'aor-language-vietnamese';
// const messages = {
// 	'vi': vietnameseMessages,
// };

const firebaseConfig = {
	apiKey: 'AIzaSyA_i_1kEu9yJGgReldWXXtEgm3C2Qfm5s4',
	authDomain: 'project-1577832973995685373.firebaseapp.com',
	databaseURL: 'https://superstock.firebaseio.com',
};

const trackedResources = ['users']

const App = () => (
    // <Admin restClient={jsonServerRestClient('http://jsonplaceholder.typicode.com')}>
    // <Admin restClient={myApiRestClient} authClient={authClient} locale="vi" messages={messages}>
    //   <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} remove={Delete} icon={PostIcon}/>
    //   <Resource name="users" list={UserList} icon={UserIcon} />
    //   <Resource name="dashboards" list={DashboardList} edit={DashboardEdit} create={DashboardCreate} icon={DashboardIcon} />
    // </Admin>

    <Admin restClient={RestClient(trackedResources, firebaseConfig)}>
      <Resource name="users" list={TestList} edit={TestEdit} icon={PostIcon}/>
    </Admin>
);

export default App;
