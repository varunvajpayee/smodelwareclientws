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
            show: function (obj) {
                var extVideo = this.down('video');
                extVideo.fireEvent('show');

                var video = extVideo.media.dom;

                var isPlaying = video.currentTime > 0 && !video.paused && !video.ended
                    && video.readyState > 2;

                if (!isPlaying) {
                    video.pause();
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

                        extVideo.setUrl(url);
                        extVideo.media.show();
                        extVideo.play();
                    }
                    //var playPromise = video.play();
                }
               /* var localStore = Ext.util.LocalStorage.get('id');
                localStore.setItem('url', 'https://storage.cloud.google.com/stoked-outlook-179704.appspot.com/BA-CFA-Level1/VIDEO/test1.mp4');*/

                extVideo.on('ended',function (extObj, time,eOpts) {
                    var localStore = Ext.util.LocalStorage.get('id');
                    var urls = localStore.getItem('urls');
                    var url ='';
                    if(urls){
                        var n = urls.indexOf(",");
                        if(n==-1){
                            url = urls;
                            localStore.setItem('urls',null);
                        }
                        else {
                            url = urls.substring(0, n);
                            urls = urls.substring(n + 1);
                            if (urls) {
                                localStore.setItem('urls', urls);
                            }
                            else {
                                localStore.setItem('urls', null);
                            }
                        }

                        extObj.setUrl(url);
                        extObj.media.dom.load();
                        extObj.media.dom.play();
                    }
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
            //url: ['https://storage.googleapis.com/stoked-outlook-179704.appspot.com/BA-CFA-Level1/VIDEO/test1.mp4', 'https://storage.googleapis.com/stoked-outlook-179704.appspot.com/BA-CFA-Level1/VIDEO/test-webm.webm'],
            loop: false,
            posterUrl: 'https://storage.googleapis.com/stoked-outlook-179704.appspot.com/BA-CFA-Level1/VIDEO/cover.jpg',
            enableControls:true,
            autoResume :true,
            preload: true
        }
    ]
}

    );