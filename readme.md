# test assignment 9 - Load testing

I am going to upload a javascript mocha test with selenium as the runner.

It is based on blazemeters own javascript example found on their site.

The runner is based on selenium, so some features are going to be missing, ex. test for HTTP header and status, see: https://stackoverflow.com/questions/6509628/how-to-get-http-response-code-using-selenium-webdriver

I have no idea what the meaning of thread groups are (could not be there for the lecture this time), I will let blazemeter take care of the scaling.

I am testing the output of the dynamic html websites using a parameterized test, and testing the json schema for the api.

# run on blazebug

when I try to run it on blazerunner, I am only faced with internal errors, when that happens, I am out for another service. It works just fine locally

_You could just use jmeter_ No, I am not writing/going to java programs, and my testing tool should therefore not be jmeter. And test created with a gui is a big no no. They are hard to maintain, and git probably can't handle the file format.