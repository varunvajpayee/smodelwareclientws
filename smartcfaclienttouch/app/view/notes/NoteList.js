/**
 * A list of Bills
 */
Ext.define('smartcfaclienttouch.view.NoteList', {
    extend: 'Ext.dataview.List',
    xtype: 'NoteList',
    id: 'NoteList',

    config: {
        store: 'Notes',
        variableHeights: true,
        useSimpleItems: true,
        itemTpl: Ext.create('Ext.XTemplate', '<div>({firstName}) {lastName}</div>')
    }
});
