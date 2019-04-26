# TG-Pre-Work

### While we do want our developers to work smarter, not harder, please refrain from plagiarizing.  It is completely fine to reword information you have gleaned from internet sources, however, please be prepared to redo the work should you submit a directly copied/pasted answer.  If you must copy/paste, cite your sources (this citation doesn't need to be fancy - just state directly where you found the information or provide a link).  Additionally, some of the questions below are tricky.  The answers were not necessarily covered in the reading we assigned.  They are not intended to be straightforward because we expect you to do some research to discover the answers to the best of your ability.  If you cannot find an answer, explain what you do know and what you are stuck on.  

## When we hit https://www.techtonic.com/ what happens? Don’t focus too much on architecture (Monolithic, SOA, Microservices, etc.). Try to focus more on how the web functions in general terms/steps.

Once you put in the URL the browser will check the cache for a DNS record to find a corresponding IP address. The browser then initiates a TCP (Transition Control Protocol) connection with the server .The browser sends an HTTP request to the web server. The server handles the request and sends back a response. The server sends out an HTTP response. The browser displays the HTML content

## From start to finish, how does data reach you to be rendered in the browser?

When you enter the URL in to the browser, an API (Application Protocol Interface) is sent to the server to retrieve the file. The data is then displayed by your browser using HTTP protocol. Note that the file is not saved on your computer it is only displayed temporarily while you navigate it.

## What code is rendered in the browser?

The rendering engine communicates with the networking layer of the browser to grab HTML code and other items passed from a remote server. The rendering engine will parse the style data, both in external CSS files and in style elements. Javascript engine executes after the webpage is rendered.

## What is the server-side code’s main function?

The server-side code's main function is to handle tasks like validating submitted data and requests, using databases to store and retrieve data, and sending the correct data to the client as required.

Server-side code can be written in any number of programming languages — examples of popular server-side web languages include PHP, Python, Ruby, C#, and JavaScript. The server-side code has full access to the server operating system and the developer can choose what programming language (and specific version) they wish to use.

## What is the client-side code’s main function?

Client-side code is written using HTML, CSS, and JavaScript — it is run inside a web browser and has little or no access to the underlying operating system (including limited access to the file system).

Code running in the browser is known as client-side code and is primarily concerned with improving the appearance and behavior of a rendered web page. This includes selecting and styling UI components, creating layouts, navigation, form validation, and so on.

## What is runtime?

Runtime describes software and instructions that are executed while your program is running, as well as those instructions that you did not write explicitly, but are necessary for the proper execution of your code.

## How many instances of the client-side assets (HTML, CSS, JS, Images, etc.) are created?

An instance of the client-side assets is created every time there is an HTTP request.

## How many instances of the server-side code are available at any given time?

There is only ever one instance of the server-side code.

## How many instances of the databases connected to the server application are created?

An instance is created every time a database is accessed to pull data by a web server.
