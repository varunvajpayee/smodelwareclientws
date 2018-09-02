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

            items: [{
                xtype : 'button',
                id: 'viewSourceButton',
                align : 'right',
                ui    : 'action',
                action: 'viewSource',
               // text: 'Download',
                iconCls: 'x-fa fa-download'
            }
            ]
        },

        items: [
            {
                xtype: 'container',
                docked: 'bottom',
                padding:0,
                margin:0,
                items: [
                    {
                        xtype: 'checkboxfield',
                        name: 'showHideBBar',
                        label: 'Menu Shown',
                        labelWidth:'50%',
                        height:30,
                        padding:0,
                        margin:0,
                        checked: true
                    },
                    {
                        id: 'bottomToolbar',
                        xtype: 'bottomTabs',
                   //     docked: 'bottom',
                        collapsible: true
                    }
                ]
             }]
    }
});