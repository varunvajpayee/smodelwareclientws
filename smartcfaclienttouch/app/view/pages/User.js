/**
 * Created by varun on 12/10/2016.
 */
Ext.define('smartcfaclienttouch.view.User', {
    extend: 'Ext.form.FormPanel',
    alias: 'widget.user',
    itemId: 'userInfo',
    scrollable: true,

    requires: [
        'Ext.form.FieldSet',
        'Ext.form.Text',
        'Ext.Button'
    ],
    controller: 'pagesform',
    closable:true,
    centered: true,
    modal: true,
    width: Ext.filterPlatform('ie10') ? smartcfaclienttouch.util.AppConstants.modalIE10Width : (Ext.os.deviceType == 'Phone') ? smartcfaclienttouch.util.AppConstants.modalPhoneWidth : smartcfaclienttouch.util.AppConstants.modalBrowserWidth,
    height: Ext.filterPlatform('ie10') ? smartcfaclienttouch.util.AppConstants.modalIE10Height : Ext.os.deviceType == 'Phone' ? smartcfaclienttouch.util.AppConstants.modalPhoneHeight : smartcfaclienttouch.util.AppConstants.modalBrowserHeight,
    //baseCls: 'auth-locked',

     items: [
                {
                    xtype: 'fieldset',
                    title: 'Personal Info',
                    items: [
                        {
                            xtype: 'textfield',
                            label: 'Name',
                            name: 'fullName',
                            labelWidth: '50%',
                            readOnly: true
                        },
                        {
                            xtype: 'textfield',
                            label: 'Username',
                            name: 'userName',
                            labelWidth: '50%',
                            readOnly: true
                        },
                        {
                            xtype: 'emailfield',
                            label: 'Email',
                            name: 'email',
                            labelWidth: '50%',
                            readOnly: true
                        },
                        {
                            xtype: 'textfield',
                            label: 'Course',
                            value: 'CFA LEVEL 3',
                            labelWidth: '50%',
                            readOnly: true
                        }
                    ]
                },
                {
                    xtype: 'container',
                    layout: {
                        type: 'hbox',
                        pack: 'center'
                    },
                    items: [
                        {
                            xtype: 'button',
                            text: 'Logout',
                            handler: function(button, e)
                            {
                                localStorage.removeItem('currentUser');
                                document.cookie =  'login=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
                                console.log('Logout Done');
                                Ext.Viewport.setActiveItem('LoginPanel');
                                var formWindow = button.up('#userInfo');
                                formWindow.hide();
                                // Success
                                /*var successCallback = function(resp, ops)
                                {
                                    console.log('Logout Done', resp);
                                    Ext.Viewport.setActiveItem('LoginPanel');
                                    var formWindow = button.up('#userInfo');
                                    formWindow.hide();
                                };
                                // Failure
                                var failureCallback = function(resp, ops)
                                {
                                    // Show login failure error
                                    console.log('Logout Failure', resp);
                                    Ext.Viewport.setActiveItem('LoginPanel');
                                    var formWindow = button.up('#userInfo');
                                    formWindow.hide();

                                };

                                Ext.Ajax.request({
                                    url: smartcfaclienttouch.protocolHostPort+'/logout',
                                    params: null,
                                    success: successCallback,
                                    failure: failureCallback
                                });*/
                            },
                        },
                        {
                            xtype: 'button',
                            text: 'Cancel',
                            handler: function(button, e)
                            {
                                var formWindow = button.up('#userInfo');
                                formWindow.hide();
                            }
                        }
                    ]
                }
            ]
});