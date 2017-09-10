/**
 * Created by varun on 9/15/2016.
 */
Ext.define('smartcfaclienttouch.view.authentication.ForgotPassword', {
    extend: 'Ext.form.FormPanel',
    alias: 'widget.forgotpassword',
    itemId: 'ForgotPassword',
    requires: [
        //'LoginApp.view.ForgotPasswordViewModel',
        'Ext.Container',
        'Ext.field.Email',
        'Ext.Button'
    ],

    controller: 'registerform',
    width: 400,
    centered: true,
    modal: true,
    title: 'Forgot password',

    items: [
        {
            xtype: 'panel',
            padding: '10 5',
            defaults: {
                margin: 10
            },
            items: [
                {
                    xtype: 'emailfield',
                    scrollable: false,
                    label: 'Username:',
                    labelWidth: '40%',
                    name: 'userName',
                    required: true
                },
                {
                    xtype: 'passwordfield',
                    scrollable: false,
                    label: 'New Password',
                    labelWidth: '40%',
                    name: 'password',
                    required: true
                },
                {
                    xtype: 'passwordfield',
                    scrollable: false,
                    label: 'Re-Enter New Password',
                    labelWidth: '40%',
                    name: 'rePassword',
                    required: true
                }
            ]
        },
        {
            xtype: 'container',
            layout: {
                type: 'hbox',
                align: 'center',
                pack: 'center'
            },
            items: [
                {
                    xtype: 'button',
                    handler: function(button, e) {
                        this.up('panel').destroy();
                    },
                    ui: 'decline',
                    width: 160,
                    text: 'Cancel'
                },
                {
                    xtype: 'button',
                    listeners: {
                        tap:   'onForgotPasswordButtonClick'
                    },
                    ui: 'confirm',
                    width: 160,
                    text: 'Reset Password'
                }
            ]
        }
    ]

});