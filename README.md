<p align="center">
<img src="image.png" alt="Image of a pun on hack jobs" width="600"/>
</p>

Sadly, Hack Jobs never knew why they lost points.  If only an instructor had made comments on what specifically was wrong (specific enough that specific errors could be identified)!  Repeatable errors could have been avoided!

Of course, that wouldn't have been as funny.

But when it comes to learning, perhaps repeatable errors and a lack of understanding of what really went wrong are less a matter for laughter, and more opportunities for growth.  Opportunities, say, that clear feedback can help unlock.

## Reflection

- TypeScript is about types.  I used them.  Specified parameter types, function return types, probably will use a type alias before finishing I shouldn't wonder, used index signatures for handling dynamic data.  OOP (object oriented programming) is implemented through use of classes with methods, creation of new instances of those classes, use of conceptual objects to organize, reference, and manipulate data.

- I didn't overcome the psychological challenge, as it's not within my ability to resolve the cause.  Bothered about losing earlier points on assignments and not knowing why I lost points as feedback wasn't given, or was not specific enough that I could identify specific issues.  It's like a black box function that you can't debug.  I can't even say I should adjust my thoughts on the matter; I think it's perfectly natural to want to know how to improve a process.  If I choose not to go to certain lengths to get points on an assignment that's a choice I make; if I lose points and don't know why that's just confusing.

- I handled async through async/await, as required by the assignment.  Handled errors using custom error and error handling function as specified by assignment.  Read up on error propagation to make sure my approach was correct; as I understand it I shouldn't pass an error up a chain, but handle it near to the point of origin so the trace is useful.  Of course, if I lose points I won't know if it's because an instructor just didn't like the way I handled errors or what it was.  It works perfectly fine as far as I understand matters; I'm fine to change practices if I know what to change, but if I don't know what to change, you can see how changing would be a problem.

## Le Weird

Initially on trying to use Typescript file in HTML, had error 'index.js:11 Uncaught ReferenceError: exports is not defined
    at index.js:11:23'

On attempting to track down the issue, I put a console.log in the top level of my Typescript (.ts) file, and checked to make sure it compiled into Javascript (.js).  Viewing the index.html file in Chrome, launched through VSCode LiveServer, the console.log did not print to console.  The error mentioned above still showed.

I did not find any good responses to the issue using Google search, so posted in the class Slack help thread for the day.  While waiting on a reply, I looked for more documentation and eventually found it.  Bryan advised on Slack help how to fix a possibly related package.json issue; I fixed that.

I changed my search terms and found https://stackoverflow.com/questions/43042889/typescript-referenceerror-exports-is-not-defined

Tried adding `<script>var exports = {};</script>` before script referencing index.js.  I then received index.js:12 Uncaught ReferenceError: require is not defined
    at index.js:12:22

Can't say for sure, but I imagine exports was something that was required for require to work, defining it ahead of time wasn't overwritten (I speculate it may be a 'strict' mode thing, which Typescript uses but am not looking into it as I shouldn't be disabling strict mode anyways).

Next I tried commenting out in tsconfig.json "module": "commonjs".  New errors showed in HTML.  This is expected.  The answer was something like seven years old.  Errors followed.

Product.ts:1 Failed to load module script: Expected a JavaScript-or-Wasm module script but the server responded with a MIME type of "video/mp2t". Strict MIME type checking is enforced for module scripts per HTML spec.Understand this error
src/services/apiService.ts:1 Failed to load module script: Expected a JavaScript-or-Wasm module script but the server responded with a MIME type of "video/mp2t". Strict MIME type checking is enforced for module scripts per HTML spec.Understand this error
errorHandler.ts:1 Failed to load module script: Expected a JavaScript-or-Wasm module script but the server responded with a MIME type of "video/mp2t". Strict MIME type checking is enforced for module scripts per HTML spec.

Removed type = "module" from HTML script tag.  Removed `<script>var exports = {};</script>` before script referencing index.js.

Now have

index.js:10 Uncaught SyntaxError: Cannot use import statement outside a module (at index.js:10:1)

package.json has "type": "module".  At this point I think I've undone every change I made before the error, but the error is different.  At any rate, I do a Google search for the current error.

Spoke with Karl some about the issue.  Tried various things.  Still had loads of errors.

## Bryan Office Hours

Went to office hours, Bryan mentioned some changes to make, which I may add to this writeup later.  Long story short, some of the things I did to get Typescript working with node were an issue when trying to get Typescript working with HTML.  Multiple lines of code had to be changed after reinstallation of typescript and typescript initialization-compilation, which were not things that I had seen really mentioned to be changed when looking up the issue.  

Karl had mentioned some things, and I'd seen some references that I'd have followed up on, but it was still probably something like several hours out from working code, if it would even have been fixed then.  As of this writing, there's about six hours left until the SBA is due.  Basically, would not have been done without Bryan, I think.

There wasn't anything in class materials that I recalled about how to address the issue.  So, right.

## Project Planning

I did not plan structure of project based on API research, as I saw nothing unusual in the API documentation.  So I expect I will simply implement API similarly to class / previous examples.

Project Plan:  Follow instructions, think about file structure and control flow, implement.

## Resources

https://www.typescriptlang.org/docs/handbook/2/objects.html
https://dmitripavlutin.com/typescript-index-signatures/
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof
https://stackoverflow.com/questions/41639501/prevent-overriding-javascript-function
https://coreui.io/blog/how-to-round-a-number-to-two-decimal-places-in-javascript/
https://www.tax.ny.gov/pubs_and_bulls/tg_bulletins/st/taxable_receipt.htm
https://stackoverflow.com/questions/55447472/how-can-i-get-my-fetch-error-to-show-an-http-status-code
https://developer.mozilla.org/en-US/docs/Web/API/Response
https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
