/**
 * Created by varun on 9/15/2016.
 */
Ext.define('smartcfaclienttouch.view.authentication.CreateUserAccount', {
    extend: 'Ext.Panel',
    alias: 'widget.createuseraccount',
    itemId: 'CreateUserAccount',
    requires: [
        'Ext.Container',
        'Ext.field.Email',
        'Ext.Button'
    ],


    controller: 'registerform',
    closable:true,
    centered: true,
    modal: true,
    baseCls: 'auth-locked',

    layout: {
        type: 'vbox',
        align: 'center',
        pack: 'center'
    },

    items: [{
        xtype: 'panel',
        closable:true,
        items: [{
            padding: '20 0 0 20',
            html: 'Create an Account'
        },{
            xtype: 'formpanel',
            padding: 20,
            defaults: {
                margin:'0 0 10 0'
            },
            items: [{
                xtype: 'textfield',
                placeHolder: 'Full Name',
                name: 'fullName',
                userCls: 'text-border'
            },{
                xtype: 'textfield',
                placeHolder: 'Username',
                name: 'userName',
                userCls: 'text-border'
            },{
                xtype: 'emailfield',
                placeHolder: 'Email',
                name: 'email',
                userCls: 'text-border'
            },{
                xtype: 'passwordfield',
                placeHolder: 'Password',
                name: 'password',
                userCls: 'text-border'
            },{
                xtype: 'selectfield',
                placeHolder: 'Course',
                name: 'course',
                userCls: 'text-border',
                options: [
                    {text: 'Course to enroll', value: null},
                    {text: 'CFA LEVEL 1', value: "2018_CFA_LEVEL_1"},
                    {text: 'CFA LEVEL 3', value: "2018_CFA_LEVEL_3"},
                    ]
            }
            ,{
                layout: 'hbox',
                items: [{
                    xtype: 'checkboxfield',
                    name: 'isTermAccepted'
                },{
                   // html: ' <a href="#" onClick="javascript:smartcfaclienttouch.app.getController(\'Main\').showAbout();">I agree to the terms & conditions</a>',
                    html: ' <a href="https://storage.googleapis.com/testscoreservice.appspot.com/resources/html/TermsAndConditions.htm" >I agree to the terms & conditions</a>',
                    userCls: 'checkbox-text-adjustment',
                    listeners: {
                        tap:   'onRegisterButtonClick'
                    }
                }]
            },{
                xtype: 'button',
                text: 'Signup',
                iconAlign: 'right',
                iconCls: 'x-fa fa-user-plus',
                ui: 'confirm',
                listeners: {
                     tap:   'onRegisterButtonClick'
                }
            },{
                xtype: 'button',
                text: 'Login with Google',
                iconAlign: 'right',
                iconCls: 'x-fa fa-google',
                ui: 'facebook',
                listeners: {
                    tap:   'onGoogleRegisterButtonClick'
                }
            },
                {
                    xtype: 'button',
                    text: 'Cancel',
                    cls: 'x-button-focus x-button-pressed',
                    listeners: {
                        tap:   'onCancelClick'
                    }
                }
            ]
        }]
    }]

});