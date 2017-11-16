/**
 * @file gulp路径配置
 * @author mip-support@baidu.com
 */

'use strict';

module.exports = {
    src: {
        path: '../src',
        match: '../src/**/*',
        templates: [
            '../src/templates/**/!(_*).tpl',
            '!../src/templates/_*',
            '!../src/templates/_**/*'
        ],
        templatesStatic: [
            '../src/templates/**/*',
            '!../src/templates/_*',
            '!../src/templates/_**/*',
            '!../src/templates/**/*.{tpl,styl,json}'
        ],
        components: [
            '../src/components/**/!(_*).tpl',
            '!../src/components/_*',
            '!../src/components/_**/*',
            '!../src/components/**/*.code.tpl'
        ],
        componentsStatic: [
            '../src/components/**/*',
            '!../src/components/_*',
            '!../src/components/_**/*',
            '!../src/components/**/*.{tpl,styl,json}'
        ],
        www: [
            '../src/www/**/!(_*).tpl',
            '!../src/www/_*',
            '!../src/www/_**/*'
        ],
        wwwStatic: [
            '../src/www/**/*',
            '!../src/www/_*',
            '!../src/www/**/*.{tpl,styl,json}'
        ],
        archive: '../.archive'
    },
    dest: {
        path: '../dist',
        match: '../dist/**/*',
        archive: '../dist/archive',
        templates: '../dist/html/templates',
        components: '../dist/html/components',
        www: '../dist'
    }
};