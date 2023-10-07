const importRule = require('./import')
const vModelEle = require('./v-model-ele')
const calendar = require('./calendar')
const dateTimePickers = require('./date-time-pickers')
const icon = require('./icon')
const popConfirm = require('./pop-confirm')
const popover = require('./popover')
const scrollbar = require('./scrollbar')
const subMenu = require('./sub-menu')
const toolTip = require('./tool-tip')
const packageJson = require('./package-json');

module.exports = [
    { name: 'import', rule: importRule, test: /\.vue$|\.js$|\.ts$/ },
    { name: 'v-model-ele', rule: vModelEle, test: /\.vue$/ },
    { name: 'calendar', rule: calendar, test: /\.vue$/ },
    { name: 'date-time-pickers', rule: dateTimePickers, test: /\.vue$|\.js$|\.ts$/ },
    { name: 'icon', rule: icon, test: /\.vue$/ },
    { name: 'pop-confirm', rule: popConfirm, test: /\.vue$/ },
    { name: 'popover', rule: popover, test: /\.vue$/ },
    { name: 'scrollbar', rule: scrollbar, test: /\.vue$/ },
    { name: 'sub-menu', rule: subMenu, test: /\.vue$/ },
    { name: 'tool-tip', rule: toolTip, test: /\.vue$/ },
    {
        name: 'package-json',
        rule: packageJson,
        test: /package\.json$/,
        notParseAst: false,
    },
];
