var cheerio = require('cheerio');
var markdownIt = require('markdown-it');
var markdownItContainer = require('markdown-it-container');
var markdownItAnchor = require('markdown-it-anchor');
var hljs = require('highlight.js');

function _convert(str) {
    str = str.replace(/(&#x)(\w{4});/gi, function($0) {
        return String.fromCharCode(parseInt(encodeURIComponent($0).replace(/(%26%23x)(\w{4})(%3B)/g, '$2'), 16));
    });
    return str;
}

function _strip(str, tags) {
    var $ = cheerio.load(str, {decodeEntities: false});

    if (!tags || tags.length === 0) {
        return str;
    }

    tags = !Array.isArray(tags) ? [tags] : tags;
    var len = tags.length;

    while (len) {
        len -= 1;
        $(tags[len], 'head').remove();
    }

    return $('head').html();
}

function _renderHighlight(str, lang) {
    if (!(lang && hljs.getLanguage(lang))) {
        return '';
    }

    return hljs.highlight(lang, str, true).value;
}
function _wrap(render) {
    return function() {
        return render.apply(this, arguments) // eslint-disable-line
            .replace('<code class="', '<code class="hljs ')
            .replace('<code>', '<code class="hljs">');
    };
}
exports.markdownLoader = function () {
    var md = markdownIt({
        preset: 'default',
        breaks: true,
        html: true,
        highlight: _renderHighlight
    });
    md.renderer.rules.table_open = function () {
        return '<table class="docs-demo__table">';
    };
    md.renderer.rules.fence = _wrap(md.renderer.rules.fence);
    return md
    .use(markdownItContainer, 'demo', {
        validate: function(params) {
            return params.trim().match(/^demo\s*(.*)$/);
        },
        render: function(tokens, idx) {
            var m = tokens[idx].info.trim().match(/^demo\s*(.*)$/);

            if (tokens[idx].nesting === 1) {
                var title = (m && m.length > 1) ? m[1] : '';
                var desc = '';
                var content = tokens[idx + 1].content;

                if (!content) {
                    content = tokens[idx + 4].content;
                    desc = tokens[idx + 2].content;
                    // 移除描述，防止被添加到代码块
                    tokens[idx + 2].children = [];
                }

                var html = _convert(_strip(content, ['script', 'style'])).replace(/(<[^>]*)=""(?=.*>)/g, '$1');

                return `<div>
                        <div slot="source">${html}</div>
                        <div slot="title">${title}</div>
                        <div slot="desc">${md.renderInline(desc)}</div>
                        <div slot="highlight">`;
            }
            return '</div></div>\n';
        }
    });
};

