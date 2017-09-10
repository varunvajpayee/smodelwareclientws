/**
 * Created by varun on 12/10/2016.
 */
Ext.define('smartcfaclienttouch.view.TestResult', {
    extend: 'Ext.form.FormPanel',
    alias: 'widget.testresult',
    itemId: 'testResult',
    scrollable: true,

    requires: [
        'Ext.form.FieldSet',
        'Ext.form.Text',
        'Ext.Button'
    ],
    controller: 'testResultController',
    closable:true,
    centered: true,
    modal: true,
    width: Ext.filterPlatform('ie10') ? smartcfaclienttouch.util.AppConstants.modalIE10Width : (Ext.os.deviceType == 'Phone') ? smartcfaclienttouch.util.AppConstants.modalPhoneWidth : smartcfaclienttouch.util.AppConstants.modalBrowserWidth,
    height: Ext.filterPlatform('ie10') ? smartcfaclienttouch.util.AppConstants.modalIE10Height : Ext.os.deviceType == 'Phone' ? smartcfaclienttouch.util.AppConstants.modalPhoneHeight : smartcfaclienttouch.util.AppConstants.modalBrowserHeight,
    //baseCls: 'auth-locked',

     items: [
                {
                    xtype: 'fieldset',

                    title: 'Test Result',
                    items: [
                        {
                            xtype: 'textfield',
                            label: 'Section',
                            name: 'testId',
                            labelWidth: '50%',
                            readOnly: true
                        },
                        {
                            xtype: 'textfield',
                            label: 'Total Questions',
                            name: 'totalQuestions',
                            labelWidth: '50%',
                            readOnly: true
                        },
                        {
                            xtype: 'textfield',
                            label: 'Questions Ans',
                            name: 'totalAnswered',
                            labelWidth: '50%',
                            readOnly: true
                        },
                        {
                            xtype: 'textfield',
                            label: 'Correct Ans',
                            name: 'totalCorrectAnswered',
                            labelWidth: '50%',
                            readOnly: true
                        },
                        {
                            xtype: 'textfield',
                            label: 'Pass %',
                            name: 'scoredPercentage',
                            labelWidth: '50%',
                            readOnly: true
                        },
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
                            text: 'Close',
                            handler: function(button, e)
                            {
                                var formWindow = button.up('#testResult');
                                formWindow.hide();
                            }
                        }
                    ]
                }
            ]
});