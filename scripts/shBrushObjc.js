dp.sh.Brushes.Java = function()
{
	    var datatypes = 'char bool BOOL double float int long short id void';
        
        var keywords = 'IBAction IBOutlet SEL YES NO readwrite readonly nonatomic NULL'
                     + ' super self copy if else for in enum while typedef switch case return'
                     + ' const static retain TRUE FALSE ON OFF';
                
        this.regexList = [
                { regex: new RegExp(this.GetKeywords(datatypes), 'gm'), css: 'color2' },        // primitive data types
                { regex: new RegExp(this.GetKeywords(keywords), 'gm'),  css: 'color2' },        // keywords
                { regex: new RegExp('@\\w+\\b', 'g'),                   css: 'color2' },        // @-keywords
                { regex: new RegExp('[: ]nil', 'g'),                    css: 'color2' },        // nil-workaround
                { regex: new RegExp(' \\w+(?=[:\\]])', 'g'),            css: 'variable' },      // messages
                { regex: dp.sh.RegexLib.SingleLineCComments,			css: 'comments' },      // comments
                { regex: dp.sh.RegexLib.MultiLineCComments, 			css: 'comments' },      // comments
                { regex: new RegExp('@"[^"]*"', 'gm'),                  css: 'string' },        // strings
                { regex: new RegExp('\\d', 'gm'),                       css: 'string' },        // numeric values
                { regex: new RegExp('^ *#.*', 'gm'),                    css: 'preprocessor' },  // preprocessor
                { regex: new RegExp('\\w+(?= \\*)', 'g'),               css: 'keyword' },       // object types - variable declaration
                { regex: new RegExp('\\b[A-Z]\\w+\\b(?=[ ,;])', 'gm'),  css: 'keyword' },       // object types - protocol
                { regex: new RegExp('\\.\\w+', 'g'),                    css: 'constants' }      // accessors
        ];

	this.CssClass = 'dp-j';
	this.Style =	'.dp-j .annotation { color: #646464; }' +
					'.dp-j .number { color: #C00000; }';
};

dp.sh.Brushes.Java.prototype	= new dp.sh.Highlighter();
dp.sh.Brushes.Java.Aliases	= ['objc'];