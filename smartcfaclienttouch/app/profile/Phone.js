Ext.define('smartcfaclienttouch.profile.Phone', {
    extend: 'smartcfaclienttouch.profile.Base',

    controllers: ['Main'],
  //  views: ['Main'],

    //mainView: 'smartcfaclienttouch.view.phone.Main',
    mainView: 'smartcfaclienttouch.view.phone.LoginPanel',
    isActive: function () {
        return Ext.os.is.Phone; // || Ext.os.is.Desktop;
    }

});
