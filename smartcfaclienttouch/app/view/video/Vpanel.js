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
                video.stop();
                video.media.hide();
                video.media.dom.pause();
                video.fireEvent('hide');
            },
            show: function (obj) {
                var extVideo = this.down('video');
                extVideo.fireEvent('show');

                var video = extVideo.media.dom;

                var isPlaying = video.currentTime > 0 && !video.paused && !video.ended
                    && video.readyState > 2;

                if (!isPlaying) {
                    extVideo.stop();
                    extVideo.media.hide();
                    extVideo.setDisabled(true)
                    var localStore = Ext.util.LocalStorage.get('id');
                    var urls = localStore.getItem('urls');
                    if(urls) {
                        var n = urls.indexOf(",");
                        if(n==-1){
                            return;
                        }

                        var url = urls.substring(0,n);
                        urls = urls.substring(n+1);
                        if(urls){
                            localStore.setItem('urls',urls);
                        }
                        else {
                            localStore.setItem('urls',null);
                        }

                        extVideo.media.dom.pause();
                        extVideo.media.dom.src=url;
                        extVideo.setUrl(url);
                        extVideo.updateUrl(url);
                        extVideo.media.dom.load();
                        extVideo.setDisabled(false);
                        extVideo.media.show();
                        extVideo.play();
                    }
                }

            }
        }
    },
    items: [
        {
            xtype: 'video',
            id:'myVideo',
            //url: ['https://storage.googleapis.com/stoked-outlook-179704.appspot.com/BA-CFA-Level1/VIDEO/test1.mp4', 'https://storage.googleapis.com/stoked-outlook-179704.appspot.com/BA-CFA-Level1/VIDEO/test-webm.webm'],
            loop: false,
            posterUrl: 'https://storage.googleapis.com/stoked-outlook-179704.appspot.com/BA-CFA-Level1/VIDEO/cover.jpg',
            enableControls:true,
            autoResume :false,
            preload: true
        }
    ]
}

    );