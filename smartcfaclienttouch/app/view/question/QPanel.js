Ext.define('smartcfaclienttouch.view.QPanel', {
    extend: 'Ext.form.Panel',
    xtype: 'qpanel',
    id: 'QPanel',
    scrollable: true,
    layout: 'card',

        items: [
            {
                xtype:'QuestionList',
            }
            /*,{
                xtype: 'container',
                defaults: {
                    xtype: 'button',
                    style: 'margin: 1em',
                    flex : 1
                },
                layout: {
                    type: 'hbox'
                },
                items: [
                    {
                        text: 'Submit',
                        ui: 'action',
                        id: 'submitButton'/!*,
                     listeners: {
                     tap: function() {
                     this.setText('I was clicked!');

                     }
                     }*!/
                    },
                    {
                        text: 'Reset',
                        id: 'resetButton',
                        ui: 'action'
                    }
                ]
            }*/
        ]
});