import React, { Component } from 'react';
import { jsonServerRestClient, Admin, Resource, Delete } from 'admin-on-rest';

// see: https://material.io/icons/
import UserIcon from 'material-ui/svg-icons/social/group';

/**
VIEW
*/
import { UserList, UserEdit } from './users';

/**
REST Client
*/
import { RestClient, AuthClient } from 'aor-firebase-client';

const firebaseConfig = {
	apiKey: 'AIzaSyA_i_1kEu9yJGgReldWXXtEgm3C2Qfm5s4',
	authDomain: 'project-1577832973995685373.firebaseapp.com',
	databaseURL: 'https://superstock.firebaseio.com',
};

const trackedResources = ['users']

const App = () => (
    <Admin restClient={RestClient(trackedResources, firebaseConfig)} authClient={AuthClient}>
      <Resource name="users" list={UserList} edit={UserEdit} icon={UserIcon}/>
    </Admin>
);

export default App;
