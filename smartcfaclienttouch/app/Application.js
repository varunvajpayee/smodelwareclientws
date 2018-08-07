Ext.define('smartcfaclienttouch.Application', {
    extend: 'Ext.app.Application',
    namespace: 'smartcfaclienttouch',

    requires: [
        'smartcfaclienttouch.service.SimpleRequest',
        'smartcfaclienttouch.*'
    ],

  //TODO: Set up Icons and images

    //loads app/store/Demos.js, which contains the tree data for our main navigation NestedList
    // models:['Demo'],
    stores: ['Demos'],

    //the Kitchen Sink has Phone and Tablet modes, which rearrange the screen based on the type
    //of device detected
    profiles: ['smartcfaclienttouch.profile.Tablet', 'smartcfaclienttouch.profile.Phone'],

    init: function()
    {
        //debugger;
        var profile = location.href.match(/profile=([\w\-]+)/),
            locale = location.href.match(/locale=([\w\-]+)/),
            m,formValuesFromResponse='';

        profile = (profile && profile[1]) || 'modern-neptune';
        locale = locale && locale[1] || 'en';

        m = profile.match(/^([\w\-]+)-(?:he)$/);
        smartcfaclienttouch.profileName = m ? m[1] : profile;
        smartcfaclienttouch.locale = locale;
        smartcfaclienttouch.protocolHostPort=location.port == 1841? location.protocol+'//'+location.hostname:location.protocol+'//'+location.hostname+ ':'+location.port;

        console.log('Profile Name:'+smartcfaclienttouch.profileName);
        console.log('Locale:'+smartcfaclienttouch.locale);
        this.getStore('Demos').proxy.setCustomUrl();

        var successCallback = function(resp, ops)
        {
            console.log('User Info successful', resp);
            smartcfaclienttouch.userSetting=resp.properties;
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
    },

    //TODO: Add any launch functionality
    launch: function()
    {
        //Ext.create('smartcfaclienttouch.view.LoginPanel', {fullscreen: true});
        //Ext.create('KitchenSink.store.Speakers', { id: 'Speakers' });
        //KitchenSink.util.Proxy.process('data/feed.js');
    }
});