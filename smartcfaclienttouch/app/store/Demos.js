Ext.define('smartcfaclienttouch.store.Demos', {
    alias: 'store.Demos',
    extend: 'Ext.data.TreeStore',
    requires: ['smartcfaclienttouch.model.Demo'],

    config: {
        storeId: 'Demos',
        model: 'smartcfaclienttouch.model.Demo',
        defaultRootProperty: 'items',
        root: {},
        proxy: {
            type: 'jsonp',
            //url:  url: location.protocol+'//'+location.hostname+'/getCatalogTree',
            setCustomUrl: function (contentType) {

                if(contentType){
                    this.url= smartcfaclienttouch.protocolHostPort+'/getCatalogTree?paramName='+contentType;
                }
                else {
                    this.url= smartcfaclienttouch.protocolHostPort+'/getCatalogTree';
                }

            },
            callbackName: 'myCallback'
            /*,success: function(data) {
             callback();
             }*/
        }
    }
});
