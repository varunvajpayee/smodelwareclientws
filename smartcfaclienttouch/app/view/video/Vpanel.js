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
                var extVideo = this.down('video');
                extVideo.fireEvent('show');

                var video = extVideo.media.dom;

                var isPlaying = video.currentTime > 0 && !video.paused && !video.ended
                    && video.readyState > 2;

                if (!isPlaying) {
                    video.pause();
                    extVideo.media.show();
                    extVideo.play();
                    //var playPromise = video.play();
                }
                var me=this;
                extVideo.on('ended',function (extObj, time,eOpts,extVideo) {
                    extObj.setUrl('https://storage.cloud.google.com/stoked-outlook-179704.appspot.com/BA-CFA-Level1/VIDEO/test-mp4.mp4');
                    extObj.media.dom.load();
                    extObj.media.dom.play();
                });

               /* if (playPromise !== undefined) {
                    playPromise.then(_ => {
                        extVideo.fireEvent('resize');
                        console.log('play');
                })
                .catch(error => {
                        // Auto-play was prevented
                        // Show paused UI.
                        console.log(error);
                });
                }*/



            }
        }
    },
    items: [
        {
            xtype: 'video',
            id:'myVideo',
            url: ['https://storage.googleapis.com/stoked-outlook-179704.appspot.com/BA-CFA-Level1/VIDEO/test1.mp4', 'https://storage.googleapis.com/stoked-outlook-179704.appspot.com/BA-CFA-Level1/VIDEO/test-webm.webm'],
            loop: false,
            posterUrl: 'https://storage.googleapis.com/stoked-outlook-179704.appspot.com/BA-CFA-Level1/VIDEO/cover.jpg',
            enableControls:true,
            autoResume :true,
            preload: true
        }
    ]
}

    );