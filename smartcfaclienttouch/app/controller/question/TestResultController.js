/**
 * Created by varun on 11/7/2016.
 */
Ext.define('smartcfaclienttouch.controller.question.TestResultController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.testResultController',

    init: function(view)
    {
        me=this;
        var successCallback = function(resp, ops)
        {
            console.log('Test Result successful', resp);
            me.view.setValues(JSON.parse(resp.responseText));
        };
        var failureCallback = function(resp, ops)
        {
            console.log('Test Result Failure', resp);
        };

        Ext.Ajax.request(
            {
                url: smartcfaclienttouch.protocolHostPort+'/getTestResult/'+Ext.getCmp('hidden_kind').getValue()+'/'+Ext.getCmp('hidden_id').getValue()+'/'+Ext.getCmp('hidden_ancestor_id').getValue(),
                callbackName: 'myCallback',
                success: successCallback,
                failure: failureCallback
            });
    }


});
