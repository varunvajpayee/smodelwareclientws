/**
 * Created by varun on 11/20/2016.
 */
Ext.define('smartcfaclienttouch.view.Vpanel', {
    extend: 'Ext.Panel',
    requires: [
        'Ext.Video'
    ],
    xtype: 'vpanel',
    id: 'Vpanel',
    config: {
        layout: 'fit',
        listeners: {
            hide: function () {
                var video = this.down('video');
                video.fireEvent('hide');
            },
            show: function () {
                var video = this.down('video');
                video.fireEvent('show');
            }
        }
    },
    items: [
        {
            xtype: 'video',
            url: ['https://storage.googleapis.com/stoked-outlook-179704.appspot.com/BA-CFA-Level1/VIDEO/test-mp4.mp4', 'https://storage.googleapis.com/stoked-outlook-179704.appspot.com/BA-CFA-Level1/VIDEO/test-webm.webm'],
            loop: false,
            posterUrl: 'https://storage.googleapis.com/stoked-outlook-179704.appspot.com/BA-CFA-Level1/VIDEO/cover.jpg',
            enableControls:true
        }
    ]});