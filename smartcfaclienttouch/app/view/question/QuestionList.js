/**
 * A list of Bills
 */
Ext.define('smartcfaclienttouch.view.QuestionList', {
    extend: 'Ext.dataview.List',
    xtype: 'QuestionList',
    id: 'QuestionList',

    config: {
        store: 'Questions',
        variableHeights: true,
        useSimpleItems: true,
         /*
        columns: [
            {text: 'Question',  xtype:'templatecolumn', tpl:'<div>({questionText})</div>', flex:1},
            {text: 'Options', xtype:'radiofield'}
]
*/

itemTpl: Ext.create('Ext.XTemplate',
    '<span class="heading">Question {screenQuestionNum}:{questionText}</span>',
    '<tpl for=".">',
        '</br><div style="margin-bottom: 10px;" id="test_{questionNum}" name="test" class="x-indexbar"  >',
                '<fieldset>',
                    '<input type="radio" name="{questionId}" id="{qAID}"' +
                    '<tpl if="answerSelected == qAID"> checked </tpl>' +
                    '>&emsp; {qA}</br>',
                    '<input type="radio" name="{questionId}" id="{qBID}"' +
                    '<tpl if="answerSelected == qBID"> checked </tpl>' +
                    '>&emsp; {qB}</br>',
                    '<input type="radio" name="{questionId}" id="{qCID}"' +
                    '<tpl if="answerSelected == qCID"> checked </tpl>' +
                    '>&emsp; {qC}<br/>',
                '</fieldset>',
        '</div>',
        '<div id="answer_{questionNum}" {answerEnabled}>Answer {screenQuestionNum}-{answerOption}:{answerText}</div>',
    '</tpl>'),

        items: [{
            id: 'questionBottomTabs',
            xtype: 'contentbottomTabs',
            docked: 'bottom'
        }]
    }
});
