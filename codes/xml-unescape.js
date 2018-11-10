/* 
* escaped/unescaped
* < 	&lt;
* > 	&gt;
* " 	&quot;
* ' 	&apos;
* & 	&amp;
*/


//For example

var escapedInput = '&lt';

var fileToUnescape = org.apache.commons.lang.StringEscapeUtils.unescapeHtml(escapedInput);

  logger.info(fileToUnescape);
