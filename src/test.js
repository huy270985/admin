// in src/posts.js
import React from 'react';
import { List, Edit, Create, Datagrid, ReferenceField, TextField, 
	EditButton, DisabledInput, LongTextInput, ReferenceInput, 
	SelectInput, SimpleForm, TextInput,
	Filter,
    BooleanField, BooleanInput
} from 'admin-on-rest';
	
const TestFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Search" source="q" alwaysOn />
    </Filter>
);

export const TestList = (props) => (
    <List {...props} filters={<TestFilter/>}>
        <Datagrid>
            <TextField source="id" />
            <BooleanField source="account.active" />
            <TextField source="profile.email" />
            <EditButton />
        </Datagrid>
    </List>
);

const TestTitle = ({ record }) => {
    return <span>Editing: {record ? `"${record.name}"` : ''}</span>;
};

export const TestEdit = (props) => (
    <Edit title={<TestTitle />} {...props}>
        <SimpleForm>
            <DisabledInput source="id" />
            <BooleanInput label="Active?" source="account.active" />
            <TextInput source="profile.email" />
        </SimpleForm>
    </Edit>
);

