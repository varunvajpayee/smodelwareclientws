/**
 * Demonstrates usage of the Ext.tab.Panel component with the tabBar docked to the bottom of the screen.
 * See also app/view/Tabs.js for an example with the tabBar docked to the top
 */
Ext.define('smartcfaclienttouch.view.BottomTabs', {
    extend: 'Ext.TabPanel',
    xtype: 'bottomTabs',

    config: {
        activeTab: 0,
        collapsible: true,
        collapsed:true,
        tabBar: {
            layout: {
                pack : 'center',
                align: 'center'
            },
            defaults: {
                iconAlign: 'top'
            },
            scrollable : 'horizontal'
        },
        defaults: {
            scrollable: true
        },
        items: [
            {
                title: 'Notes',
                id:'notes',
                cls: 'card',
                iconCls: 'x-fa fa-book',
                selected:true
            },
            {
                title: 'Q-Bank',
                id:'qbank',
                cls: 'card',
                iconCls: 'x-fa fa-university'
            },
            {
                title: 'Video',
                id:'video',
                cls: 'card',
                iconCls: 'x-fa fa-camera'
            },
            {
                title: 'Settings',
                cls: 'card',
                iconCls: 'x-fa fa-gear'
            },
            {
                title: 'User',
                cls: 'card',
                iconCls: 'x-fa fa-user'
            },
            {
                title: 'Giving Back',
                cls: 'card',
                iconCls: 'x-fa fa-paypal'
            }
        ]
    }
});
