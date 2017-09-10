/**
 * Created by varun on 9/15/2016.
 */
Ext.define('smartcfaclienttouch.view.CreateAccount', {
    extend: 'Ext.Panel',
    alias: 'widget.createaccount',

    requires: [
        'Ext.field.Checkbox',
        'Ext.field.Password',
        'Ext.field.Text',
        'Ext.layout.HBox',
        'Ext.layout.VBox'
    ],

    baseCls: 'auth-locked',

    layout: {
        type: 'vbox',
        align: 'center',
        pack: 'center'
    },

    items: [{
        xtype: 'panel',

        items: [{
            padding: '20 0 0 20',
            html: 'Create an Account'
        },{
            xtype: 'container',
            padding: 20,
            defaults: {
                margin:'0 0 10 0'
            },
            items: [{
                xtype: 'textfield',
                placeHolder: 'Full Name',
                userCls: 'text-border'
            },{
                xtype: 'textfield',
                placeHolder: 'Username',
                userCls: 'text-border'
            },{
                xtype: 'textfield',
                placeHolder: 'Email',
                userCls: 'text-border'
            },{
                xtype: 'passwordfield',
                placeHolder: 'Password',
                userCls: 'text-border'
            },{
                layout: 'hbox',
                items: [{
                    xtype: 'checkboxfield'
                },{
                    html: 'I agree to the terms & conditions',
                    userCls: 'checkbox-text-adjustment'
                }]
            },{
                xtype: 'button',
                text: 'Signup',
                iconAlign: 'right',
                iconCls: 'x-fa fa-user-plus',
                ui: 'confirm',
                handler: function(){
                    window.location.href = "#dashboard";
                }
            },{
                xtype: 'button',
                text: 'Login with Facebook',
                iconAlign: 'right',
                iconCls: 'x-fa fa-facebook',
                ui: 'facebook',
                handler: function(){
                    window.location.href = "#dashboard";
                }
            }]
        }]
    }]

});