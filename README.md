syntaxhighlighter.googlecode.com
================================

Objective-C syntax coloring working with [syntaxhighlighter](https://code.google.com/p/syntaxhighlighter/)
The repository was inspired by a [StackOverflow post](http://stackoverflow.com/questions/10335463/how-to-setup-syntax-highlighter-on-blogger). In need of writing Obejctive-C code template, I've completed the post :)


How to configure your google blogger
====================================

1. After that open your blogger template (In Edit HTML mode) & copy the all css given in this [link](https://raw.github.com/corinnekrych/syntaxhighlighter.googlecode.com/master/css/syntaxhighlighter.css) before &lt;/b:skin&gt; tag
2. Copy paste the following script includes before &lt;/head&gt; tag
<pre>
<script src='http://syntaxhighlighter.googlecode.com/svn/trunk/Scripts/shCore.js' type='text/javascript'></script>
<script src='http://syntaxhighlighter.googlecode.com/svn/trunk/Scripts/shBrushCpp.js' type='text/javascript'></script>
<script src='http://syntaxhighlighter.googlecode.com/svn/trunk/Scripts/shBrushCSharp.js' type='text/javascript'></script>
<script src='http://syntaxhighlighter.googlecode.com/svn/trunk/Scripts/shBrushCss.js' type='text/javascript'></script>
<script src='http://syntaxhighlighter.googlecode.com/svn/trunk/Scripts/shBrushDelphi.js' type='text/javascript'></script>
<script src='http://syntaxhighlighter.googlecode.com/svn/trunk/Scripts/shBrushJava.js' type='text/javascript'></script>
<script src='http://syntaxhighlighter.googlecode.com/svn/trunk/Scripts/shBrushJScript.js' type='text/javascript'></script>
<script src='http://syntaxhighlighter.googlecode.com/svn/trunk/Scripts/shBrushPhp.js' type='text/javascript'></script>
<script src='http://syntaxhighlighter.googlecode.com/svn/trunk/Scripts/shBrushPython.js' type='text/javascript'></script>
<script src='http://syntaxhighlighter.googlecode.com/svn/trunk/Scripts/shBrushRuby.js' type='text/javascript'></script>
<script src='http://syntaxhighlighter.googlecode.com/svn/trunk/Scripts/shBrushSql.js' type='text/javascript'></script>
<script src='http://syntaxhighlighter.googlecode.com/svn/trunk/Scripts/shBrushVb.js' type='text/javascript'></script>
<script src='http://syntaxhighlighter.googlecode.com/svn/trunk/Scripts/shBrushXml.js' type='text/javascript'></script>
<script src='https://raw.github.com/corinnekrych/syntaxhighlighter.googlecode.com/master/scripts/shBrushObjc.js' type='text/javascript'/>
</pre>
3.  Paste the following code before &lt;/body&gt; tag.
<pre>
<script language='javascript'>
dp.SyntaxHighlighter.BloggerMode();
dp.SyntaxHighlighter.HighlightAll('code');
</script>
</pre>
5. Save Blogger Template.
6. Now syntax highlighting is ready to use you can use it with <pre></pre> tag.
<pre>
<pre name="code" class="objc">
#import "AGAppDelegate.h"

#import "AGViewController.h"

@implementation AGAppDelegate

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{
    self.window = [[UIWindow alloc] initWithFrame:[[UIScreen mainScreen] bounds]];
    // Override point for customization after application launch.
    self.viewController = [[AGViewController alloc] initWithNibName:@"AGViewController" bundle:nil];
    self.window.rootViewController = self.viewController;
    [self.window makeKeyAndVisible];
    return YES;
}
</pre>
</pre>
7. You can Escape your code [here](http://accessify.com/tools-and-wizards/developer-tools/quick-escape/default.php).
