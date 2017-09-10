/**
 * Created by varun on 9/20/2016.
 */
Ext.define('smartcfaclienttouch.model.CreateAccountViewModel', {
    extend: 'Ext.data.Model',

    requires: [
        'Ext.data.field.Field'
    ],

    fields: [
        {
            name: 'firstName'
        },
        {
            name: 'lastName'
        },
        {
            name: 'password'
        },
        {
            name: 'email'
        }
    ]
});