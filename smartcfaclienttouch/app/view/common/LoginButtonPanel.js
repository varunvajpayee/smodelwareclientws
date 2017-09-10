/**
 * Created by varun on 12/23/2016.
 */
Ext.define('smartcfaclienttouch.view.common.LoginButtonPanel', {
    extend: 'Ext.Panel',

    xtype: 'loginbuttonpanel',

    controller: 'loginpanel',

    margin: '15 0 0 0',
    layout: {
        type: 'vbox',
        align: 'center',
        pack: 'center'
    },
    items: [
        {
            xtype: 'button',
            ui: 'decline',
            width: '50%',
            text: 'Forgot Password',
            listeners: {
                tap: 'onForgotPassword'
            }
        },
        {
            xtype: 'button',
            ui: 'confirm',
            width: '50%',
            text: 'Create Account'
            , listeners: {
             tap: 'onCreateAccount'
             }
        },{
            xtype: 'button',
            //scale: 'large',
            ui: 'googleplus',
            iconAlign: 'right',
            iconCls: 'x-fa fa-google',
            text: 'Login with Google',
            listeners: {
                tap: 'onGoogleLogInClick'
            }
        }
        /*{
         xtype: 'box',
         html: '<div class="outer-div"><div class="seperator">OR</div></div>',
         margin: '10 0'
         },
        {
            xtype: 'button',
            scale: 'large',
            ui: 'googleplus',
            iconAlign: 'right',
            iconCls: 'x-fa fa-google',
            text: 'Login with Google',
            listeners: {
                tap: 'onGoogleLogInClick'
            }
        }*/
    ]

});


