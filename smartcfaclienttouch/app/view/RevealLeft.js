Ext.define('smartcfaclienttouch.view.RevealLeft', {
    extend: 'Ext.tab.Panel',
    id:  'RevealLeft',
    requires: [
        'smartcfaclienttouch.view.QuestionList','smartcfaclienttouch.view.NoteList','Ext.TitleBar', 'Ext.dataview.List'
    ],

    //controller: ['smartcfaclienttouch.controller.ContentController'],

    config: {
        tabBar: {
            layout: {
                pack: 'center'
            }
        },
       // layout: 'fit',
        activeTab: 1,
        defaults: {
            scrollable: true
        },
        items: [
            {
                title: 'Notes',
                xtype: 'npanel',
                id: 'NotesTab'//,
                //hidden: true
                // html : 'By default, tabs are aligned to the top of a view.',
                //cls: 'card',
                //iconCls: Ext.theme.is.Blackberry || Ext.theme.is.Tizen ? 'home' : null
            },
            {
                title: 'Questions', xtype: 'qpanel',
                id: 'QuestionsTab'
                //iconCls: Ext.theme.is.Blackberry|| Ext.theme.is.Tizen ? 'organize' : null
            }
        ]
    }
});