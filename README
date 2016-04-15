# helloworld-xamarin

Author: Erik Jan de Wit   
Level: Intermediate  
Technologies: Appcelerator Titanium, iOS, android, RHMAP
Summary: A demonstration of how to get started with remote cloud call in RHMAP.
Community Project : [Feed Henry](http://feedhenry.org)
Target Product: RHMAP  
Product Versions: RHMAP 3.7.0+   
Source: https://github.com/feedhenry-templates/helloworld-titanium
Prerequisites: fh-js-sdk : 3.+, Appcelerator Studio: 4.5.0, iOS SDK : iOS7+, android sdk 23

## What is it?

Simple native iOS app and Android app based on Titanium, to test your remote cloud connection in RHMAP. Its server side companion app: [HelloWorld Cloud App](https://github.com/feedhenry-templates/helloworld-cloud). This template app demos how to intialize a cloud call and make calls to cloud endpoints. The app uses [fh-dotnet-sdk](https://github.com/feedhenry/fh-dotnet-sdk).

If you do not have access to a RHMAP instance, you can sign up for a free instance at [https://openshift.feedhenry.com/](https://openshift.feedhenry.com/).

## How do I run it?  

### RHMAP Studio

This application and its cloud services are available as a project template in RHMAP as part of the "Appcelerator Hello World Project" template.

### Local Clone (ideal for Open Source Development)
If you wish to contribute to this template, the following information may be helpful; otherwise, RHMAP and its build facilities are the preferred solution.

## Build instructions

1. Clone this project

2. Populate ```helloworld-titanium/app/lib/fhconfig.js``` with your values as explained in our [documentation](http://docs.feedhenry.com/v3/dev_tools/sdks/windows.html#windows-existing_app-set_up_configuration).

3. Open the project in Appcelerator Studio or use the commandline to run the project
 
## How does it work?

### Cloud call

In ```app/controllers/index.js``` the Cloud call is done:
```js
    $fh.cloud({
      path: 'hello',
      data: { 
      	hello : textFieldValue 
      }
    }, function (res){
      //...
    }, function (msg, err){
      //...
    });
```