/**
 * Created by varun on 11/20/2016.
 */
Ext.define('smartcfaclienttouch.view.Npanel', {
    extend: 'Ext.Panel',
    xtype: 'npanel',
    id: 'Npanel',
    scrollable: true,
    fullscreen:true,
    layout: 'card',
    items: [
        {
            xtype: 'toolbar',
            docked: 'top'
        },
        {
                    //xtype: 'panel',
                    id: 'innerPanel',
                    //style: 'font-size: 20px',
                   // html: 'Welcomes to Bright Analyst!'
                    cls : 'card',
                    scrollable: true,
                    html: 'Welcome to Bright Analyst!'
        }
    ]});