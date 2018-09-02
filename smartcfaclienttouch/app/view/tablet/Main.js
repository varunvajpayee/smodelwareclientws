Ext.define('smartcfaclienttouch.view.tablet.Main', {
    extend: 'Ext.Container',
    xtype: 'mainview',

    requires: [
        'Ext.dataview.NestedList',
        'smartcfaclienttouch.view.tablet.NavigationBar',
        'smartcfaclienttouch.view.tablet.NestedList'
    ],
    // TODO: NO SUPPORT FOT Cupertino and Tizen
    config: {
        fullscreen: true,

        layout: {
            type: 'card',
            animation: {
                type: 'slide',
                direction: 'left',
                duration: 250
            }
        },

        items: [
            {
                id: 'launchscreen',
                cls : 'card',
                scrollable: true,
                html: '<iframe width="100%" style="position: absolute; height: 100%; border: none" src="https://storage.googleapis.com/testscoreservice.appspot.com/resources/html/MainScreen1.htm"></iframe>'
            },
            {
                id: 'mainNestedList',
                xtype : 'tabletnestedlist',
                useTitleAsBackText:  false,
                updateTitleText:  true,
                docked: 'left',
                width: 200,
                store: 'Demos',
            },
            {
                id: 'mainNavigationBar',
                xtype: 'tabletnavigationbar',
                title: 'Bright Analyst',
                docked: 'top',
                items:  [
                        {
                            xtype : 'button',
                            id: 'viewSourceButton',
                            align : 'right',
                            ui    : 'action',
                            action: 'viewSource',
                             text: 'Download',
                            iconCls: 'x-fa fa-download',
                           /* handler: function() {
                                Ext.Msg.alert('Members Only', 'PDF Notes and Questions are emailed to paid members only.', Ext.emptyFn);
                            }*/
                        }

                ]
            },
            {
                xtype:'container',
                docked: 'bottom',
                padding:0,
                margin:0,
                items:[
                    {
                        xtype: 'checkboxfield',
                        name : 'showHideBBar',
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
                        collapsible: true,
                        collapsed:false,

                    }
                ]
            }

        ]
    }
});
