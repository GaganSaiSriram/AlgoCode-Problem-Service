const marked = require('marked');

const sanitizeHtmlLibrary = require('sanitize-html');

const TurndownService = require('turndown');





function sanitizeMarkdownContent(markdownContent){

    const turndownService = new TurndownService();

    // convert markdown to html
    const convertedHtml = marked.parse(markdownContent);

    
    

    //sanitize html

    const sanitizedHtml = sanitizeHtmlLibrary(convertedHtml , {
        allowedTags:sanitizeHtmlLibrary.defaults.allowedTags
    });

    

    
    // convert the sanitized text to mark down
    const sanitizedMarkdown = turndownService.turndown(sanitizedHtml);

    

    return sanitizedMarkdown;

}





module.exports  = sanitizeMarkdownContent;