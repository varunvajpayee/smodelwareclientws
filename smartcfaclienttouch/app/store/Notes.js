/**
 * Created by varun on 11/9/2016.
 */
Ext.define('smartcfaclienttouch.store.Notes', {
    extend: 'Ext.data.Store',
   storeId: 'Notes',
    /*
    Uncomment to use a specific model class
    model: 'User',
    */

    /*
    Fields can also be declared without a model class: */
    fields: [
        {name: 'firstName', type: 'string'},
        {name: 'lastName',  type: 'string'},
        {name: 'age',       type: 'int'},
        {name: 'eyeColor',  type: 'string'}
    ],

    /*
    Uncomment to specify data inline */
    data : [
        {firstName: 'Note1',    lastName: 'Note2'},
        {firstName: 'Note2', lastName: 'Note4'},
        {firstName: 'Note3', lastName: 'Note4'},
        {firstName: 'Note4', lastName: 'Note4'},
        {firstName: 'Notef', lastName: 'Note4'},
        {firstName: 'Note3', lastName: 'Note4'},
        {firstName: 'Note3', lastName: 'Note4'},
        {firstName: 'Note3', lastName: 'Note4'},
        {firstName: 'Note3', lastName: 'Note4'},
        {firstName: 'Note3', lastName: 'Note4'},
        {firstName: 'Note3', lastName: 'Note4'},
        {firstName: 'Note3', lastName: 'Note4'}
    ]

});