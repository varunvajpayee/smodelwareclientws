/**
 * Created by varun on 12/26/2016.
 */
Ext.define('smartcfaclienttouch.controller.pages.PagesFormViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.pagesform',
    formValuesFromResponse:'',

    init: function(view)
    {
        console.log(this.formValuesFromResponse);
        me=this;
        var successCallback = function(resp, ops)
        {
            console.log('User Info successful', resp);
            this.formValuesFromResponse=resp.properties;
            me.view.setValues(this.formValuesFromResponse);
        };
        var failureCallback = function(resp, ops)
        {
            console.log('User Info Failure', resp);
        };

        Ext.data.JsonP.request(
            {
            url: smartcfaclienttouch.protocolHostPort+'/getUser',
            callbackName: 'myCallback',
            success: successCallback,
            failure: failureCallback
        });
    }


});
