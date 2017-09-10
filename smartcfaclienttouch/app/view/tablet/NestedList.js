Ext.define('smartcfaclienttouch.view.tablet.NestedList', {
    extend: 'Ext.NestedList',
    xtype: 'tabletnestedlist',

    config: {
        // fullscreen: true,
        listConfig: {
            itemTpl: new Ext.XTemplate('<div><div partId="idLeftPart" style="width: 80%; float:left">{text}</div><div class="x-fa fa-arrow-right " partId="idRightPart" style="width: 20%; float:right; border: thin solid black;line-height: 300%;"></div> <br style="clear:both;"/> </div>')
        }
    },

    /**
     * Called when an list item has been tapped.
     * @param {Ext.List} list The subList the item is on.
     * @param {Number} index The id of the item tapped.
     * @param {Ext.Element} target The list item tapped.
     * @param {Ext.data.Record} record The record which as tapped.
     * @param {Ext.event.Event} e The event.
     */
    onItemTap: function (list, index, target, record, e) {
        var me = this,
            store = list.getStore(),
            node = store.getAt(index);
       var clickedEl = Ext.get(e.target);
        me.fireEvent('itemtap', this, list, index, target, record, e);

        if ( !clickedEl.hasCls('fa-arrow-right')) {
            record.data.leaf=true;
            me.fireEvent('leafitemtap', this, list, index, target, record, e);
            me.goToLeaf(node);
        }
        else {
            if(record.data.items && record.data.items.length>0)
            {
                record.data.leaf=false;
                this.goToNode(node);
            }
            else
            {
                me.fireEvent('leafitemtap', this, list, index, target, record, e);
                me.goToLeaf(node);
            }
        }
    },
    goToLeaf: function (node) {
     /*   if (!node.isLeaf()) {
            throw new Error('goToLeaf: passed a node which is not a leaf.');
        }*/

        var me = this,
            card = me.getDetailCard(),
            container = me.getDetailContainer(),
            sharedContainer = container === me,
            layout = me.getLayout(),
            animation = layout ? layout.getAnimation() : false,
            activeItem;

        if (card) {
            if (container.getItems().indexOf(card) === -1) {
                container.add(card);
            }
            if (sharedContainer) {
                activeItem = me.getActiveItem();
                if (activeItem instanceof Ext.dataview.List) {
                    me.setLastActiveList(activeItem);
                }
                me.setLastNode(node);
            }
            if (animation) {
                animation.setReverse(false);
            }
            container.setActiveItem(card);
            me.syncToolbar();
        }
    },

    //<div class="btn-group"><button type="button" class="btn btn-primary">{text}</button><button type="button" class="btn btn-primary">>></button></div>

    //TODO: understand platformConfig
        /*
    platformConfig: {

        blackberry: {
            toolbar: {
                ui: 'dark'
            }
        }
        // Need to look at theme specific overrides for apps

        //cupertino: {
         //   toolbar: {
           //     ui: 'dark'
           // }
        //}

    }*/
});
