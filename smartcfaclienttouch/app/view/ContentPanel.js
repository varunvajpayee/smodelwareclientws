/**
 * This is a simple utility class that just renders a bunch of lorem ipsum text
 */
Ext.define('smartcfaclienttouch.view.ContentPanel', {
    extend: 'Ext.tab.Panel',
    xtype: 'contentpanel',

    requires: [
        'smartcfaclienttouch.view.QuestionList','smartcfaclienttouch.view.NoteList','Ext.TitleBar', 'Ext.dataview.List'
        ],


    config: {
        tabBar: {
            layout: {
                pack: 'center'
            }
        },
        layout: 'fit',
        activeTab: 1,
        defaults: {
            scrollable: true
        },
        items: [
            {
                title: 'Notes', xtype: 'spanel'
               // html : 'By default, tabs are aligned to the top of a view.',
                //cls: 'card',
                //iconCls: Ext.theme.is.Blackberry || Ext.theme.is.Tizen ? 'home' : null
            },
            {
                title: 'Questions', xtype: 'qpanel'
                //iconCls: Ext.theme.is.Blackberry|| Ext.theme.is.Tizen ? 'organize' : null
            }
        ]
    }
});