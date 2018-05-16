/**
 * Created by varun on 12/10/2016.
 */
Ext.define('smartcfaclienttouch.view.Setting', {
    extend: 'Ext.form.FormPanel',
    alias: 'widget.setting',
    itemId: 'settingInfo',
    scrollable: true,

    requires: [
        'Ext.form.FieldSet',
        'Ext.Button'
    ],
    controller: 'settingController',
    closable:true,
    centered: true,
    modal: true,
    width: Ext.filterPlatform('ie10') ? smartcfaclienttouch.util.AppConstants.modalIE10Width : (Ext.os.deviceType == 'Phone') ? smartcfaclienttouch.util.AppConstants.modalPhoneWidth : smartcfaclienttouch.util.AppConstants.modalBrowserWidth,
    height: Ext.filterPlatform('ie10') ? smartcfaclienttouch.util.AppConstants.modalIE10Height : Ext.os.deviceType == 'Phone' ? smartcfaclienttouch.util.AppConstants.modalPhoneHeight : smartcfaclienttouch.util.AppConstants.modalBrowserHeight,
    //baseCls: 'auth-locked',

     items: [
                {
                    xtype: 'fieldset',
                    title: 'User Settings',
                    items: [
                        {
                            xtype: 'selectfield',
                            name : 'noteContentLevel',
                            label: 'Notes Level',
                            labelWidth: '60%',
                            options: [
                                {text: 'Please select', value: null},
                                {text: 'Book', value: "BOOK"},
                                {text: 'Study Session', value: "STUDY_SESSION"},
                                {text: 'Reading', value: "READING", selected:true},
                                {text: 'Main Topics', value: "LOS"}
                            ]
                        },
                        {
                            xtype: 'selectfield',
                            name : 'questionContentLevel',
                            label: 'Question Level',
                            labelWidth: '60%',
                            options: [
                                {text: 'Please select', value: null},
                                {text: 'Book', value: "BOOK"},
                                {text: 'Study Session', value: "STUDY_SESSION"},
                                {text: 'Reading', value: "READING", selected:true},
                                {text: 'Main Topics', value: "LOS"}
                            ]
                        },
                        {
                            xtype      : 'spinnerfield',
                            name       : 'questionPerPage',
                            label      : 'Question per page',
                            labelWidth: '60%',
                            minValue   : 0,
                            maxValue   : 10,
                            stepValue  : 1,
                            cycle      : true
                        },
                        {
                            xtype: 'selectfield',
                            name : 'showCourses',
                            label: 'Show Courses',
                            labelWidth: '60%',
                            options: [
                                {text: 'Please select', value: null},
                                {text: 'All Courses', value: "ALL"},
                                {text: 'Enrolled Courses', value: "ENROLLED"}
                            ]
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
                            text: 'Submit',
                            handler: function(button, e)
                            {
                                var formWindow = button.up('#settingInfo');
                                var values = formWindow.getValues()
                                /*var myMask = new Ext.LoadMask(Ext.getBody(), {msg:"Please wait..."});
                                myMask.show();
*/
                                var successCallback = function(resp, ops)
                                {
                                    console.log('settingInfo Done', resp);
                                    //myMask.hide();
                                    var contentTree =Ext.ComponentQuery.query('#mainNestedList')[0];
                                    contentTree.getStore().removeAll();
                                    contentTree.getStore().load();
                                    Ext.getCmp('bottomToolbar').setActiveItem(0);
                                    formWindow.hide();
                                };

                                var failureCallback = function(resp, ops)
                                {
                                    // Show login failure error
                                    console.log('settingInfo Failure', resp);
                                  //  myMask.hide();

                                };

                                Ext.data.JsonP.request({
                                    url: smartcfaclienttouch.protocolHostPort+'/saveUserSetting',
                                    callbackName: 'myCallback',
                                    params: values,
                                    success: successCallback,
                                    failure: failureCallback
                                });
                            },
                        },
                        {
                            xtype: 'button',
                            text: 'Cancel',
                            handler: function(button, e)
                            {
                                var formWindow = button.up('#settingInfo');
                                formWindow.hide();
                            }
                        }
                    ]
                }
            ]
});