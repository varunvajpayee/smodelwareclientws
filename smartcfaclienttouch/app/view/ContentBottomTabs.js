var reloadQuestions = function (button, newStartIndex, newEndIndex) {
    button.enable();
    var questStore = Ext.getStore('Questions');//Ext.getStore('store.Questions'); //Ext.data.StoreManager.lookup('store.Questions');


    var eles = [];
    var inputs = document.getElementsByTagName("input");
    for(var i = 0; i < inputs.length; i++) {
        if(inputs[i].name.indexOf('CFA') == 0 && inputs[i].checked) {
            eles.push({
                "question":inputs[i].name,
                "answer":inputs[i].id
            });
        }
    }

    var postBody = {startIndex:newStartIndex,endIndex:newEndIndex,allowAnswers:smartcfaclienttouch.view.ContentBottomTabs.answersEnabled};
    var ancestorId = Ext.getCmp('hidden_ancestor_id').getValue()?Ext.getCmp('hidden_ancestor_id').getValue():"null";
    Ext.Ajax.request(
        {
            url: smartcfaclienttouch.protocolHostPort+'/getTest/'+Ext.getCmp('hidden_kind').getValue()+'/'+Ext.getCmp('hidden_id').getValue()+'/'+ancestorId,
            method:'POST',
            params: {
                ajax_req: Ext.util.JSON.encode(eles),
                index_req:Ext.util.JSON.encode(postBody)
            },
            success : function(response) {
                console.log(response);
                questStore.removeAll();
                questStore.setData(JSON.parse(response.responseText).questions);
                Ext.getCmp('hidden_max_index').setValue(JSON.parse(response.responseText).totalQuestions);
            },
            failure : function(response) {
                var text = response.responseText;
                // Ext.Msg.alert('Error', text, Ext.emptyFn);
            }
        });

    var startIndexCmp = Ext.getCmp('hidden_start_index');
    startIndexCmp.setValue(newStartIndex);
    var endIndexCmp = Ext.getCmp('hidden_end_index');
    endIndexCmp.setValue(newEndIndex);
};
/**
 * Demonstrates usage of the Ext.tab.Panel component with the tabBar docked to the bottom of the screen.
 * See also app/view/Tabs.js for an example with the tabBar docked to the top
 */
Ext.define('smartcfaclienttouch.view.ContentBottomTabs', {
    extend: 'Ext.tab.Panel',
    xtype: 'contentbottomTabs',
    answersEnabled:false,

    requires: [
        'Ext.SegmentedButton'
    ],

    config: {
        cls: 'card',

        items: [
            {
                xtype: 'toolbar',
                docked: 'bottom',
                scrollable: {
                    y: false,
                    indicators: false
                },
                items: [
                    {
                        iconCls: 'x-fa fa-arrow-left',
                        ui: 'Prev',
                        id: 'qBackBtn',
                        handler: function(button, e)
                        {
                            Ext.getCmp('qNextBtn').enable();
                            var newStartIndex = Ext.getCmp('hidden_start_index').getValue()-smartcfaclienttouch.userSetting.questionPerPage;
                            var newEndIndex = Ext.getCmp('hidden_start_index').getValue();
                            console.log('Back Button:Loading Questions startIndex:'+newStartIndex+' |end Index:'+newEndIndex);
                            if(newStartIndex>=0)
                            {
                                reloadQuestions(button, newStartIndex, newEndIndex);
                            }
                            else
                            {
                               // button.disable();
                            }
                        }

                    },
                    {
                        xtype: 'spacer'
                    },
                    {
                        text: 'Submit',
                        id: 'qSubmit',
                        //disabled: true,
                        handler: function(button, e)
                        {
                            var promise = new Ext.Promise(function(resolve, reject){
                                reloadQuestions(button, Ext.getCmp('hidden_start_index').getValue(), Ext.getCmp('hidden_end_index').getValue());
                            });

                            promise.then(resolveTestResult);

                            function resolveTestResult(value){ //This is not working

                                this.overlay = Ext.Viewport.add({
                                    xtype: 'testresult'
                                });
                                this.overlay.show();
                            }

                            this.overlay = Ext.Viewport.add({
                                xtype: 'testresult'
                            });
                            this.overlay.show();


                        }
                    },
                    {
                        xtype: 'segmentedbutton',
                        allowDepress: true,
                        allowToggle:true,
                        items: [
                            {
                                text: 'Answer',
                                id: 'qAnswers',
                                pressed: false,
                                handler: function(button, e)
                                {
                                    smartcfaclienttouch.view.ContentBottomTabs.answersEnabled=smartcfaclienttouch.view.ContentBottomTabs.answersEnabled?false:true;
                                    reloadQuestions(button, Ext.getCmp('hidden_start_index').getValue(), Ext.getCmp('hidden_end_index').getValue());
                                   // Ext.getCmp('qAnswers');
                                }
                            }
                        ]
                    },
                    {
                        xtype: 'spacer'
                    },
                    {
                        iconCls: 'x-fa fa-arrow-right',
                        ui: 'next',
                        id: 'qNextBtn',
                        handler: function(button, e)
                        {
                            Ext.getCmp('qBackBtn').enable();
                            var newStartIndex = Ext.getCmp('hidden_end_index').getValue();
                            var newEndIndex = parseInt(Ext.getCmp('hidden_end_index').getValue())+parseInt(smartcfaclienttouch.userSetting.questionPerPage);
                            var newMaxIndex = parseInt(Ext.getCmp('hidden_max_index').getValue())+parseInt(smartcfaclienttouch.userSetting.questionPerPage);
                            console.log('Next Button:Loading Questions startIndex:'+newStartIndex+' |end Index:'+newEndIndex);
                            if(newEndIndex<newMaxIndex)
                            {
                                reloadQuestions(button, newStartIndex, newEndIndex);

                            }

                            if(newMaxIndex-newEndIndex<=parseInt(smartcfaclienttouch.userSetting.questionPerPage))
                            {
                                //button.disable();
                                //Ext.getCmp('qSubmit').enable();
                            }

                        }
                    }
                    , {
                        xtype: 'hiddenfield',
                        id: 'hidden_start_index'
                    }, {
                        xtype: 'hiddenfield',
                        id: 'hidden_end_index'
                    }, {
                        xtype: 'hiddenfield',
                        id: 'hidden_kind'
                    }, {
                        xtype: 'hiddenfield',
                        id: 'hidden_id'
                    }, {
                        xtype: 'hiddenfield',
                        id: 'hidden_ancestor_id'
                    }, {
                        xtype: 'hiddenfield',
                        id: 'hidden_max_index'
                    }

                ]
            }
        ]
    },
});
