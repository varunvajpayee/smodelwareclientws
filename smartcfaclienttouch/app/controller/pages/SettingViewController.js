/**
 * Created by varun on 12/26/2016.
 */
Ext.define('smartcfaclienttouch.controller.pages.SettingViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.settingController',
    formValuesFromResponse:'',

    init: function(view)
    {
        console.log(smartcfaclienttouch.userSetting);

        me=this;
        var successCallback = function(resp, ops)
        {
            console.log('User Info successful', resp);
            smartcfaclienttouch.userSetting = resp.properties;
            me.view.setValues(smartcfaclienttouch.userSetting );
        };
        var failureCallback = function(resp, ops)
        {
            console.log('User Info Failure', resp);
        };

        Ext.data.JsonP.request(
            {
            url: smartcfaclienttouch.protocolHostPort+'/getUserSetting',
            callbackName: 'myCallback',
            success: successCallback,
            failure: failureCallback
        });
    }


});
