/**
 * Created by varun on 11/13/2016.
 */
Ext.define('smartcfaclienttouch.model.Question', {
    extend: 'Ext.data.Model',
    alias: 'model.Question',
    fields: [

        { name: 'questionText',     type: 'string' },
        { name: 'questionId',      type: 'string' },
        { name: 'screenQuestionNum',      type: 'string' },
        { name: 'qA',    type: 'string' },
        { name: 'qB',   type: 'string' },
        { name: 'qC', type: 'string' },
        { name: 'qD',    type: 'string'}

    ]

    /*
    Uncomment to add validation rules
    validators: {
        age: 'presence',
        name: { type: 'length', min: 2 },
        gender: { type: 'inclusion', list: ['Male', 'Female'] },
        username: [
            { type: 'exclusion', list: ['Admin', 'Operator'] },
            { type: 'format', matcher: /([a-z]+)[0-9]{2,3}/i }
        ]
    }
    */

    /*
    Uncomment to add a rest proxy that syncs data with the back end.
    proxy: {
        type: 'rest',
        url : '/users'
    }
    */
});