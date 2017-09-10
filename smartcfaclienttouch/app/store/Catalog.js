Ext.define('smartcfaclienttouch.store.Catalog', {
    alias: 'store.Catalog',
    extend: 'Ext.data.TreeStore',
    requires: ['smartcfaclienttouch.model.Demo'],

    config: {
        storeId: 'Catalog',
        model: 'smartcfaclienttouch.model.Demo',
        defaultRootProperty: 'items',
        root: {
            id: 'root',
            text: 'Bright Analyst Catalog',
            items: [{
                text: 'User Interface',
                id: 'ui',
                cls: 'launchscreen',
                items: [{
                    text: 'Grid/Tree',
                    leaf: false,
                    id: 'grid',
                    items: [{
                        text: 'Big Data',
                        leaf: true,
                        view: 'RevealLeft',
                        id: 'grid-bigdata'
                    }, {
                        text: 'Tree',
                        leaf: true,
                        view: 'RevealLeft',
                        id: 'tree-list'
                    }]
                }, {
                    text: 'Buttons',
                    leaf: true,
                    view: 'RevealLeft',
                    id: 'buttons'
                }, {
                    text: 'Forms',
                    leaf: false,
                    id: 'forms',
                    items: [{
                        text: 'Form Panel',
                        leaf: true,
                        view: 'RevealLeft',
                        id: 'formpanel'
                    }, {
                        text: 'Sliders',
                        leaf: true,
                        view: 'RevealLeft',
                        id: 'sliders'
                    }, {
                        text: 'Toolbar Inputs',
                        leaf: true,
                        view: 'RevealLeft',
                        id: 'toolbarinput'
                    }, {
                        text: 'PlaceHolderLabel',
                        leaf: true,
                        view: 'RevealLeft',
                        id: 'placeholderlabel'
                    }]
                }, {
                    text: 'DataViews',
                    leaf: false,
                    id: 'dataviews',
                    items: [{
                        text: 'Basic',
                        leaf: true,
                        view: 'RevealLeft',
                        id: 'basicdataview'
                    }, {
                        text: 'Horizontal',
                        leaf: true,
                        view: 'RevealLeft',
                        id: 'horizontaldataview'
                    }, {
                        text: 'Inline',
                        leaf: true,
                        view: 'RevealLeft',
                        id: 'inlinedataview'
                    }]
                }, {
                    text: 'Lists',
                    leaf: false,
                    id: 'lists',
                    items: [{
                        text: 'Basic',
                        leaf: true,
                        view: 'RevealLeft',
                        id: 'basiclist'
                    }, {
                        text: 'Grouped',
                        leaf: true,
                        view: 'RevealLeft',
                        id: 'groupedlist'
                    }, {
                        text: 'Disclosure',
                        leaf: true,
                        view: 'RevealLeft',
                        id: 'disclosurelist'
                    }]
                }, {
                    text: 'Nested List',
                    view: 'RevealLeft',
                    leaf: true,
                    id: 'nestedlist'
                }, {
                    text: 'Icons',
                    leaf: true,
                    view: 'RevealLeft',
                    id: 'icons'
                }, {
                    text: 'Toolbars',
                    leaf: true,
                    view: 'RevealLeft',
                    id: 'toolbars'
                }, {
                    text: 'Carousel',
                    leaf: true,
                    view: 'RevealLeft',
                    id: 'carousel'
                }, {
                    text: 'Tabs',
                    leaf: true,
                    view: 'RevealLeft',
                    id: 'tabs'
                }, {
                    text: 'Bottom Tabs',
                    view: 'RevealLeft',
                    leaf: true,
                    id: 'bottom-tabs'
                }, {
                    text: 'Overlays',
                    leaf: true,
                    view: 'RevealLeft',
                    id: 'overlays'
                }, {
                    text: 'Menus',
                    leaf: true,
                    view: 'RevealLeft',
                    id: 'menus'
                }]
            }, {
                text: 'Data Binding',
                id: 'databinding',
                items: [{
                    text: 'Simple',
                    leaf: true,
                    id: 'binding-simple',
                    view: 'RevealLeft'
                }, {
                    text: 'Two Way',
                    leaf: true,
                    id: 'binding-twoway',
                    view: 'RevealLeft'
                }, {
                    text: 'Formulas',
                    leaf: true,
                    id: 'binding-formula',
                    view: 'RevealLeft'
                }, {
                    text: 'Two Way Formulas',
                    leaf: true,
                    id: 'binding-twowayformula',
                    view: 'RevealLeft'
                }, {
                    text: 'Chained Select',
                    leaf: true,
                    id: 'binding-chainedselect',
                    view: 'RevealLeft'
                }, {
                    text: 'Component State',
                    leaf: true,
                    id: 'binding-componentstate',
                    view: 'RevealLeft'
                }, {
                    text: 'Selection',
                    leaf: true,
                    id: 'binding-selection',
                    view: 'RevealLeft'
                }, {
                    text: 'Chained Stores',
                    leaf: true,
                    id: 'binding-chainedstores',
                    view: 'RevealLeft'
                }, {
                    text: 'Form',
                    leaf: true,
                    id: 'binding-form',
                    view: 'RevealLeft'
                }, {
                    text: 'Associations',
                    leaf: true,
                    id: 'binding-assocations',
                    view: 'RevealLeft'
                }]
            }, {
                text: 'Animations',
                id: 'animations',
                items: [{
                    text: 'Slide',
                    id: 'Slide',
                    items: [{
                        text: 'Slide Left',
                        id: 'SlideLeft',
                        view: 'RevealLeft',
                        leaf: true
                    }, {
                        text: 'Slide Right',
                        id: 'SlideRight',
                        view: 'RevealLeft',
                        leaf: true
                    }, {
                        text: 'Slide Up',
                        id: 'SlideUp',
                        view: 'RevealLeft',
                        leaf: true
                    }, {
                        text: 'Slide Down',
                        id: 'SlideDown',
                        view: 'RevealLeft',
                        leaf: true
                    }]
                }, {
                    text: 'Fade',
                    id: 'Fade',
                    view: 'RevealLeft',
                    leaf: true
                }, {
                    text: 'Cover',
                    id: 'Cover',
                    items: [{
                        text: 'Cover Left',
                        view: 'RevealLeft',
                        id: 'CoverLeft',
                        leaf: true
                    }, {
                        text: 'Cover Right',
                        id: 'CoverRight',
                        view: 'RevealLeft',
                        leaf: true
                    }, {
                        text: 'Cover Up',
                        view: 'RevealLeft',
                        id: 'CoverUp',
                        leaf: true
                    }, {
                        text: 'Cover Down',
                        id: 'CoverDown',
                        view: 'RevealLeft',
                        leaf: true
                    }]
                }, {
                    text: 'Reveal',
                    id: 'Reveal',
                    items: [{
                        text: 'Reveal Left',
                        id: 'RevealLeft',
                        view: 'RevealLeft',
                        leaf: true
                    }, {
                        text: 'Reveal Right',
                        id: 'RevealRight',
                        view: 'RevealLeft',
                        leaf: true
                    }, {
                        text: 'Reveal Up',
                        id: 'RevealUp',
                        view: 'RevealLeft',
                        leaf: true
                    }, {
                        text: 'Reveal Down',
                        id: 'RevealDown',
                        view: 'RevealLeft',
                        leaf: true
                    }]
                }]
            }]
        }
    }
});
