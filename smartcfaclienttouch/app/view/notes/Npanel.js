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
            xtype: 'container',
            scrollable: true,
            padding: 10,
            defaults: {
                /*listeners: {
                    activate: function( self )
                    {
                        console.log('onMyPanelActivate');
                        var locationBaseUrl = location.href.substr(location.href.lastIndexOf("/") + 1,location.href.length);
                        Ext.Ajax.request({
                            //local path of your html file
                            url: 'resources/html/'+locationBaseUrl+'.htm',
                            success : function(response) {
                                Ext.getCmp('innerPanel').setHtml(response.responseText);
                            },
                            failure : function(response) {
                                var text = response.responseText;
                                Ext.Msg.alert('Error', text, Ext.emptyFn);            }
                        });
                    }
                }*/
            },
            items: [
                {
                    xtype: 'panel',
                    id: 'innerPanel',
                    style: 'font-size: 20px',
                    html: 'Welcomes to Bright Analyst!'
                }
            ]
        }
    ]});