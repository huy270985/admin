// in src/posts.js
import React from 'react';
import { List, Edit, Create, Datagrid, ReferenceField, TextField, 
	EditButton, DisabledInput, LongTextInput, ReferenceInput, 
	SelectInput, SimpleForm, TextInput,
	Filter,
    BooleanField, BooleanInput,
    DateField, DateInput,
    NumberField, NumberInput,
} from 'admin-on-rest';

// const NumberField = ({ source, record = {} }) => <span>{record[source]}</span>;
	
const UserFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Search" source="q" alwaysOn />
        <BooleanInput label="Active?" source="account.active" alwaysOn defaultValue={true}/>
    </Filter>
);

export const UserList = (props) => (
    <List {...props} filters={<UserFilter/>} perPage={100}>
        <Datagrid>
            <BooleanField label="Active?" source="account.active" />
            <TextField label="Name" source="profile.fullName" />
            <TextField label="Email" source="profile.email" />
            <DateField label="Start Date" source="profile.startDate" />
            <NumberField label="Duration" source="profile.duration" />
            <EditButton />
        </Datagrid>
    </List>
);

const UserTitle = ({ record }) => {
    return <span>Editing: {record ? `"${record.name}"` : ''}</span>;
};

export const UserEdit = (props) => (
    <Edit title={<UserTitle />} {...props}>
        <SimpleForm>
            <DisabledInput source="id" />
            <BooleanInput label="Active?" source="account.active" />
            <TextInput label="Email" source="profile.email" />
            <DateInput label="Start Date" source="profile.startDate" />
            <NumberInput label="Duration" source="profile.duration" />
        </SimpleForm>
    </Edit>
);

