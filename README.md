<p align="center">
<img src="image.png" alt="A mass of kittens representing HTML into Javascript errors" width="600"/>
</p>

## Reflection

- TypeScript is about types.  I used them.  Specified parameter types, function return types, probably will use a type alias before finishing I shouldn't wonder, used index signatures for handling dynamic data.  OOP (object oriented programming) is implemented through use of classes with methods, creation of new instances of those classes, use of conceptual objects and folders/files structuresto organize, reference, and manipulate data.

- Psychological challenge (re: not knowing why losing points) not overcome, but can be put aside for the moment.  I understand there's a lot of extra work being asked of the teaching staff, and the matter need not be resolved immediately.  Though I also think, will the load really lighten down the line?  I suppose I'll take a chance on it.

Had a pretty bad challenge getting Typescript to work with HTML.  Workarounds I used to get Typescript to work with Node turned out to be ineffective for HTML.  There was no good documentation on the subject (most being seven years old or more), and error messages did not help.  To give some idea of the range of errors, exports was not defined, then I got imports to not work, then I got three MIME errors.  It would have gone on for I'd guess at least another twenty hours plus having taken up the morning already.  That's just how it is sometimes.  Bryan knew the fix, but I can honestly say without his personal intervention, no way could I have fixed it in time for submission.

- I handled async through async/await, as required by the assignment.  Handled errors using custom error and error handling function as specified by assignment.  Read up on error propagation to make sure my approach was correct; as I understand it I shouldn't pass an error up a chain, but handle it near to the point of origin so the trace is useful.

## Whack A Mole: Typescript into HTML

When attempting to use imports, VSCode had an error stating type module needed.  So I put in type module in package.json.  Then I couldn't import .ts files, so I turned on allowTSExtensions true in tsconfig.json, which in turn had me needing to turn noEmit on, which meant npx tsc wouldn't compile Typescript into Javascript.  So I found out I had to re-enable noEmit, etc.  That was the first couple labs.  I don't think any of that was covered in class.  (Nor, as I recall, were the issues I ran into trying to get Typescript working with HTML covered).  I asked around a bit, but I think most other people weren't at that part as they didn't have useful advice - exceptions noted below.

At any rate, when trying to get Typescript working with HTML, I got an error stating modules wasn't defined.  I tried a console.log at the top level that didn't print, so I don't think the code was even running.  Various years-old solutions online recommended doing things.  So I tried various combinations of O(2^n) (I know it's just the worst O(n)) of adding type module in HTML, adding a script tag defining module before my script tag linking to index.js, changing files to not specify .ts (I thought this was a mistake and it was, but I wasn't to find that out until much later), adding extra lines of code in index.js after compilation, adding different lines of code in index.ts before compilation, and of course lots of variations of editing package.json and tsconfig.json.  I referenced documentation on things like Object.definePropertyOf, just lots and lots of documentation that didn't really lead anywhere.  Lots and lots of different things, probably a lot I'm not mentioning here.

I talked with Karl before Bryan's office hours today (2025 July 17, Thursday); he hadn't gotten Typescript working with HTML, but he recommended some things, some of which turned out to be on the right track (which I'd also had a lead on, changing the version like es2016 or some such thing), and other things that turned out not to help.  But Karl's generally helpful, and it says something that he shares his personal time to help others with their personal issues.

It just so happened that I'd finished up the Typescript/Node part of the assignment (all the mandatory parts) the same night the SBA was assigned.  (Had to, as I knew I'd be tied up Thursday night / Friday morning).  So, I knew about the HTML issue and was ready to ask at office hours.  Bryan fixed up the Typescript into HTML issues REAL quick, I'll have to go back and compare line by line with my Lab 1 and 2 to see what he did differently.  Very specific changes, I recall, especially some in tsconfig.json that I hadn't had a lead on at all at that point.

## Project Planning

I did not plan structure of project based on API research, as I saw nothing unusual in the API documentation.  I implemented the API similar to class instructional materials, and/or references found online.  In the end, there really wasn't anything too unusual; I think the only real change I'd make with more time is maybe some additional styling and formatting, like converting an array of objects into a div for each object, rather than a single div.  But then, there's a lot of other non-mission critical things I could change, and the entire conversion to work with HTML was optional in any event.

Project Plan:  Follow instructions, think about file structure and control flow, implement.  (Worked.  Except for those ruddy awful Typescript into HTML issues.)

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
https://regex101.com/
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries
https://developer.mozilla.org/en-US/docs/Web/CSS/:nth-child
