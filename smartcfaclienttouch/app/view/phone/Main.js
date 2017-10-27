Ext.define('smartcfaclienttouch.view.phone.Main', {
    extend: 'smartcfaclienttouch.view.tablet.NestedList',
    //extend: 'Ext.NestedList',
    requires: ['Ext.TitleBar'],
    xtype: 'mainviewPhone',
    id: 'mainNestedList',

    config: {
        fullscreen: true,
        backText: 'Back',
        title: 'Bright Analyst',
        useTitleAsBackText: false,
        layout: {
            animation: {
                duration: 250,
                easing: 'ease-in-out'
            }
        },

        /*listConfig: {
            itemTpl: new Ext.XTemplate('<div><div style="width: 80%; float:left">{text}</div><div style="width: 20%; float:right">|>></div> <br style="clear:both;"/> </div>')
        },*/
        store: 'Demos',

        toolbar: {
            id: 'mainNavigationBar',
            xtype: 'titlebar',
            docked: 'top',
            title: 'Bright Analyst',

            items: {
                xtype : 'button',
                id: 'viewSourceButton',
                align : 'right',
                ui    : 'action',
                action: 'viewSource',
               // text: 'Download',
                iconCls: 'x-fa fa-download',
                /*handler: function() {
                    Ext.Msg.alert('Members Only', 'PDF Notes and Questions are emailed to paid members only.', Ext.emptyFn);
                }*/
            }
        },

        items: [{
            id: 'bottomToolbar',
            xtype: 'bottomTabs',
            docked: 'bottom'
        }]
    }
});