/**
 * Created by varun on 9/15/2016.
 */
Ext.define('smartcfaclienttouch.view.phone.LoginPanel', {
    extend: 'Ext.Container',
    requires: [
        'smartcfaclienttouch.view.common.LoginButtonPanel',
        'Ext.Panel',
        'Ext.Label',
        'Ext.field.Email',
        'Ext.field.Password',
        'Ext.field.Checkbox',
        'Ext.Button',
        'Ext.MessageBox'
    ],

   // controller: 'authentication',
    controller: 'loginpanel',

    itemId: 'LoginPanel',
    config: {
        fullscreen: true,
    padding: '',

    items: [
        {
            xtype: 'panel',
            style: 'background-color: #FFFFFF;',
            width: 400,
            centered: true,
            padding: 10,
            border:true,
            items: [
                {
                    xtype: 'formpanel',
                    itemId: 'loginFromPanel',
                    defaults: 'margin: 10',
                    items: [
                        {
                            xtype: 'label',
                            style: 'font-size: 20px',
                            html: 'Sign into your account',
                            padding: '0 0 10 0'
                        },
                        {
                            xtype: 'emailfield',
                            scrollable: false,
                            label: 'Username',
                            labelWidth: '40%',
                            name: 'userName',
                            required: true
                        },
                        {
                            xtype: 'passwordfield',
                            scrollable: false,
                            label: 'Password',
                            labelWidth: '40%',
                            name: 'password',
                            required: true
                        },
                        {
                            xtype: 'panel',
                            padding: '15 0 0 0',
                            layout: {
                                type: 'hbox',
                                align: 'center',
                                pack: 'center'
                            },
                            items: [
                                {
                                    xtype: 'button',
                                    cls: 'x-button-focus x-button-pressed',
                                    width: 150,
                                    text: 'Sign In',
                                    listeners: {
                                        tap: 'onSignIn'
                                    }
                                }
                            ]
                        }
                    ]
                },
                {
                    xtype: 'loginbuttonpanel'
                }
            ]
        }
    ]}

});