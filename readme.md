# test assignment 9 - Load testing

I am going to upload a javascript mocha test with selenium as the runner.

It is based on blazemeters own javascript example found on their site.

The runner is based on selenium, so some features are going to be missing, ex. test for HTTP header and status, see: https://stackoverflow.com/questions/6509628/how-to-get-http-response-code-using-selenium-webdriver

I have no idea what the meaning of thread groups are (could not be there for the lecture this time), I will let blazemeter take care of the scaling.

I am testing the output of the dynamic html websites using a parameterized test, and testing the json schema for the api.

# Run it on blazebug - and a better way to do it

When I try to run it on blazerunner, I am only faced with internal errors, when that happens, I am out for another service. It works just fine locally

_You could just use jmeter_ No, I am not writing/going to java programs, and my testing tool should therefore not be jmeter. And test created with a gui is a big no no. They are hard to maintain, and git probably can't handle the file format.

I did some testing in postman for a project 1½ year ago, and I can tell you, it is only going to work when you only have one codebase, no branches, no other people touching the code, and you are not likely to need to load test your project when those conditions are met.

If you already have a nice set of integration tests in place, then you probably don't have to assert the output of your test. It is going to be visible in the servers error log.

And hence server logging, this is important in load testing and is always important, something like new relics APM or similar is a must for servers in production. Now it is just up to throwing a lot of requests at the server. And here the command line tool from artillery.io comes in handy, it can fire a large amount of request. And if it isn't enough, then blazerunners simple URL test could be used (yes, amazingly I got that thing to work, big applause to blazebug).

And from here, you can get a deep insight from your application monitoring, like with pages resulted in errors, and the load times for the individual page, maybe also some tracing. the number of requests etc.

Now we have a load test there makes sense. No hard-to-maintain gui tests, no bullshit.
