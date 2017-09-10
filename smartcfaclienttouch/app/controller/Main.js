/**
 * @class smartcfaclienttouch.controller.Main
 * @extends Ext.app.Controller
 *
 * This is an abstract base class that is extended by both the phone and tablet versions. This controller is
 * never directly instantiated, it just provides a set of common functionality that the phone and tablet
 * subclasses both extend.
 */
Ext.define('smartcfaclienttouch.controller.Main', {
    extend: 'Ext.app.Controller',
    stores: ['Questions'],
    requires: [
        'Ext.Deferred'
    ],

    config: {
        /**
         * @private
         */
        viewCache: [],

        refs: {
            nav: '#mainNestedList',
            main: 'mainview',
            centerPanel:'#launchscreen',
            toolbar: '#mainNavigationBar',
            sourceButton: 'button[action=viewSource]',
            aboutButton: 'button[title=Giving Back]',
            userButton: 'button[text=User]',
            settingButton: 'button[text=Settings]',
            notesButton: 'button[text=Notes]',
            qbankButton: 'button[text=Q-Bank]',
            qlist: ' #QuestionList',
         //   themeToggleButton: 'button[action=toggleTheme]',

        },

        control: {

            nav: {
                itemtap: 'onNavTap',
                leafitemtap: 'onNavLeafTap'
            },
            aboutButton:{
                tap: 'showAbout'
            }
            ,
            userButton:{
                tap: 'showUser'
            }
            ,
            settingButton:{
                tap: 'showSettings'
            }
            ,
            notesButton:{
                tap: 'showNote'
            }
            ,
            qbankButton:{
                tap: 'showQuestion'
            }
        },

        routes: {
            'demo/:id': 'showViewById',
            'menu/:id': 'showMenuById',
            '': 'showMenuById'
        }

        /**
         * @cfg {Ext.data.Model} currentDemo The Demo that is currently loaded. This is set whenever showViewById
         * is called and used by functions like onSourceTap to fetch the source code for the current demo.
         */
        //currentDemo: undefined
    },

    showAbout: function (){

        /*var myModel = Ext.create('smartcfaclienttouch.model.Demo', {
            text: 'About',
            leaf: true,
            //view: 'LoginPanel',
            view: 'AboutUs',
            id: 'abount-btn'
        });
        this.showView(myModel);*/


            this.overlay = Ext.Viewport.add({
                xtype: 'aboutUs'
            })
            this.overlay.show();

    },

    showUser: function ()
    {

            this.overlay = Ext.Viewport.add({
                xtype: 'user'
            })
            this.overlay.show();

    },
    showSettings: function ()
    {

        this.overlay = Ext.Viewport.add({
            xtype: 'setting'
        })
        this.overlay.show();

    },

    showNote: function ()
    {
        this.getNav().getStore().load({ params: { paramName: 'NOTE' } });
        if(this.getCenterPanel()) {
            this.getCenterPanel().setHtml('<iframe width="100%" style="position: absolute; height: 100%; border: none" src="https://storage.googleapis.com/testscoreservice.appspot.com/resources/html/MainScreen.htm"></iframe>');
        }
    },

    showQuestion: function ()
    {
        if(  Ext.getCmp('innerPanel'))
        {
            Ext.getCmp('innerPanel').setHtml('');
        }
       this.getNav().getStore().load({ params: { paramName: 'QUESTION' } })
        if(this.getCenterPanel()) {
            this.getCenterPanel().setHtml('<iframe width="100%" style="position: absolute; height: 100%; border: none" src="https://storage.googleapis.com/testscoreservice.appspot.com/resources/html/MainScreen.htm"></iframe>');
        }
       //this.getCenterPanel().removeAll();

    },

    /*
     showRegister: function (){

        var myModel = Ext.create('smartcfaclienttouch.model.Demo', {
            text: 'Create Account',
            leaf: true,
            view: 'CreateAccount',
            id: 'ca-btn'
        });

        this.showView(myModel);
    },*/

    /**
     * Finds a given view by ID and shows it. End-point of the "demo/:id" route
     */
    showViewById: function (id) {
        var nav = this.getNav(),
            view = nav.getStore().getNodeById(id);

        this.showView(view);
        //this.setCurrentDemo(view);
        this.hideSheets();
    },

    /*isProfile: function(item) {
        var profileName = item.get('profileName'),
            ret = false;

        if (profileName !== undefined) {
            window.location = profileName ? (location.pathname + '?profile=' + profileName) : '';
            ret = true;
        }

        return ret;
    },
*/

    //TODO: Remove this not used
    getFileContent: function(options) {
        return Ext.Ajax.request({
            url: options.path
        }).then(function(response) {
            return {
                type: options.type,
                html: response.responseText
            };
        }, function() {
            return null;
        });
    },


    /**
     * @private
     * In the kitchen sink we have a large number of dynamic views. If we were to keep all of them rendered
     * we'd risk causing the browser to run out of memory, especially on older devices. If we destroy them as
     * soon as we're done with them, the app can appear sluggish. Instead, we keep a small number of rendered
     * views in a viewCache so that we can easily reuse recently used views while destroying those we haven't
     * used in a while.
     * @param {String} name The full class name of the view to create (e.g. "KitchenSink.view.Forms")
     * @return {Ext.Component} The component, which may be from the cache
     */
    createView: function (item) {
        var name = this.getViewName(item),
            cache = this.getViewCache(),
            ln = cache.length,
            limit = item.get('limit') || 20,
            view, i = 0, j, oldView;

        for (; i < ln; i++) {
            view = cache[i];
            if (view.viewName === name) {
                this.activeView = view;
                if(item.get('leaf'))
                {
                    this.setHtmlContentToLeafView(item);
                }

                return view;
            }
        }

        if (ln >= limit) {
            for (i = 0, j = 0; i < ln; i++) {
                oldView = cache[i];
                if (!oldView.isPainted()) {
                    oldView.destroy();
                } else {
                    cache[j++] = oldView;
                }
            }
            cache.length = j;
        }
          /* var cachedView = Ext.ComponentQuery.query('#RevealLeft')[0];
        if(cachedView)
        {
            cachedView.destroy();
        }*/
        view = Ext.create(name);
        view.viewName = name;
        cache.push(view);
        this.setViewCache(cache);
        if(item.get('leaf'))
        {
            this.setHtmlContentToLeafView(item);
        }


        this.activeView = view;

        return view;
    },

    setHtmlContentToLeafView:function(item)
    {
        var view =item.get('view');
        if(view=='Npanel')
        {
            console.log('onMyPanelActivate:Loading Notes');
            // var locationBaseUrl = location.href.substr(location.href.lastIndexOf("/") + 1,location.href.length);
            Ext.Ajax.request({
                //local path of your html file
                //url: 'resources/html/'+locationBaseUrl+'.htm',
                url: smartcfaclienttouch.protocolHostPort+'/getNotesForId/'+item.get('kind')+'/'+item.id+'/'+item.get('ancestorId'),
                method:'GET',
                success : function(response) {
                    Ext.getCmp('innerPanel').setHtml(response.responseText);
                },
                failure : function(response) {
                    var text = response.responseText;
                }
            });
        }
        else if(view=='QPanel')
        {
            var qPerPage=5;
            if(smartcfaclienttouch.userSetting.questionPerPage){
                qPerPage=smartcfaclienttouch.userSetting.questionPerPage;
            }
            console.log('onMyPanelActivate:Loading Questions startIndex:'+0+' |end Index:'+qPerPage);
            var questStore = this.getStore('Questions');//Ext.getStore('store.Questions'); //Ext.data.StoreManager.lookup('store.Questions');
            questStore.removeAll();

            var postBody = {startIndex:0,endIndex:qPerPage,allowAnswers:false};
            Ext.Ajax.request(
                {
                url: smartcfaclienttouch.protocolHostPort+'/getTest/'+item.get('kind')+'/'+item.id+'/'+item.get('ancestorId'),
                method:'POST',
                    params: {
                        //ajax_req: Ext.util.JSON.encode(postBody),
                        index_req:Ext.util.JSON.encode(postBody)
                    },
                success : function(response) {
                    console.log(response);
                    questStore.setData(JSON.parse(response.responseText).questions);
                    Ext.getCmp('hidden_max_index').setValue(JSON.parse(response.responseText).totalQuestions);
                },
                failure : function(response) {
                    var text = response.responseText;
                    // Ext.Msg.alert('Error', text, Ext.emptyFn);
                }
            });



            var startIndexCmp = Ext.ComponentQuery.query('#hidden_start_index')[0];
            startIndexCmp.setValue("0");
            var endIndexCmp = Ext.ComponentQuery.query('#hidden_end_index')[0];
            endIndexCmp.setValue(qPerPage);
            var kindCmp = Ext.getCmp('hidden_kind');
            kindCmp.setValue(item.get('kind'));
            var idCmp = Ext.getCmp('hidden_id');
            idCmp.setValue(item.id);
            var ancestorIdCmp = Ext.getCmp('hidden_ancestor_id');
            ancestorIdCmp.setValue(item.get('ancestorId'));
        }

    },

    /**
     * @private
     * Returns the full class name of the view to construct for a given Demo
     * @param {KitchenSink.model.Demo} item The demo
     * @return {String} The full class name of the view
     */
    getViewName: function (item) {
        var name = item.get('view') || item.get('text'),
            ns = 'smartcfaclienttouch.view.';
            return ns + name;
       },


    /**
     * we iterate over all of the floating sheet components and make sure they're hidden when we
     * navigate to a new view. This stops things like Picker overlays staying visible when you hit
     * the browser's back button
     */
    hideSheets: function () {
        Ext.each(Ext.ComponentQuery.query('sheet, #editorPanel'), function (sheet) {
            if(sheet instanceof Ext.Menu) {
                Ext.Viewport.hideMenu(sheet);
            }else {
                sheet.setHidden(true);
            }
        });
    }
});
