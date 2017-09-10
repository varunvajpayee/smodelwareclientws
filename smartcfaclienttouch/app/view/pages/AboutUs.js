/**
 * Created by varun on 12/10/2016.
 */
Ext.define('smartcfaclienttouch.view.AboutUs', {
    extend: 'Ext.Panel',
    alias: 'widget.aboutUs',
    itemId: 'aboutUsPanel',
    scrollable: true,
    //Essential property of modal//
    centered: true,
    modal: true,
    width: Ext.filterPlatform('ie10') ? smartcfaclienttouch.util.AppConstants.modalIE10Width : (Ext.os.deviceType == 'Phone') ? smartcfaclienttouch.util.AppConstants.modalPhoneWidth : smartcfaclienttouch.util.AppConstants.modalBrowserWidth,
    height: Ext.filterPlatform('ie10') ? smartcfaclienttouch.util.AppConstants.modalIE10Height : Ext.os.deviceType == 'Phone' ? smartcfaclienttouch.util.AppConstants.modalPhoneHeight : smartcfaclienttouch.util.AppConstants.modalBrowserHeight,
    //Essential property of modal//
    items: [
        {
            xtype: 'toolbar',
            docked: 'top'
        },
        {
            xtype: 'container',
            padding: 10,
            items: [
                {
                    xtype: 'container',
                    style: 'font-size: 20px',
                    html: 'Giving Back!'
                },
                {
                    xtype: 'container',
                    style: 'font-size: 14px',
                    html:           'Get PDF copies of NOTES for ($10 only) <a href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=D6KTP9SA5Y6Q6">Buy PDF Notes</a>.'+
                                    '<br/>Get PDF copies of Questions for ($10 only) <a href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=S87TP9M6A2">Buy PDF Questions</a>.'+
                                    '<br/>Get Both PDF copies of both notes and questions and voluntary membership for ($20 only)<br/><br/>'+
                                    '<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">'
                                        +'<input type="hidden" name="cmd" value="_s-xclick">'
                                        +'<input type="hidden" name="hosted_button_id" value="T5EHRR5F3DFVW">'
                                        +'<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_subscribeCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!">'
                                        +'<img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1">'
                                        +'</form>',

                    padding: '25 0 0 0'
                }
            ]
        },
        {
            xtype: 'container',
            layout: {
                type: 'hbox',
                pack: 'center'
            },
            items: [
                {
                    xtype: 'button',
                    text: 'cancel',
                    handler: function(button, e)
                    {
                        var formWindow = button.up('#aboutUsPanel');
                        formWindow.hide();
                    }
                }
            ]
        }
    ]
});