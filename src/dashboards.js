// in src/posts.js
import React from 'react';

import { List, Edit, Create, Datagrid, ReferenceField, TextField, 
	EditButton, DisabledInput, LongTextInput, ReferenceInput, 
	SelectInput, SimpleForm, TextInput,
	Filter } from 'admin-on-rest';

export const DashboardList = (props) => (
    <List {...props}>
        <Datagrid>
            <EditButton />
            <TextField source="name" />
            <TextField source="url" />
            <TextField source="updatedAt" />
        </Datagrid>
    </List>
);

const DashboardTitle = ({ record }) => {
    return <span>Dashboard {record ? `"${record.name}"` : ''}</span>;
};

export const DashboardEdit = (props) => (
    <Edit title={<DashboardTitle />} {...props}>
        <SimpleForm>
            <DisabledInput source="name" />
            <LongTextInput source="url" />
        </SimpleForm>
    </Edit>
);

export const DashboardCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="name" />
            <LongTextInput source="url" />
        </SimpleForm>
    </Create>
);

