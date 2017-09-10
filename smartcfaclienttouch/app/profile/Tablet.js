Ext.define('smartcfaclienttouch.profile.Tablet', {
    extend: 'smartcfaclienttouch.profile.Base',


    controllers: ['Main'],

    views: ['LoginPanel'],

   // mainView: 'smartcfaclienttouch.view.tablet.Main',
    mainView: 'smartcfaclienttouch.view.tablet.LoginPanel',
    isActive: function () {
        return Ext.os.is.Tablet || Ext.os.is.Desktop;
    },

    launch: function() {
        //Ext.create('smartcfaclienttouch.view.tablet.LoginPanel',{renderTo: Ext.getBody()});
       // this.setMainView({xtype: 'LoginPanel'});

    }
});
