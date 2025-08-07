# NanoQueue

Minimal Pub/Sub Message Broker and Module Registry for messaging between components on a page. See [https://nanoqueue.dittdesign.com](https://nanoqueue.dittdesign.com/example.html) for a live example usage.
___

## Introduction

NanoQueue is a minimalistic messaging broker and module registry for decoupling modules and components on webpages.

NanoQueue registers itself in the global `window` object as `NanoQueue` and with the short form `_Q`. Accessing the framework is as simple as `window.NanoQueue`, `window._Q` or in its simplest form, just `_Q`.

### Messaging

NanoQueue is mainly used for sending messages between components, allowing you to have a simple way to make sure hard-to-reach components get their status updates. You can also register multiple components to subscribe to the same topics, allowing you to very easily send the same info to many receivers at once.

This architecture is well known in the cloud native, microservices and scaling spaces as a "Publish/Subscribe" architecture, or as a message driven architechture.

Working with events in the browser (i.e. registering handlers for button clicks, form submits etc.) also uses an architecture like this, though refered to as event driven. The principles are the same though. Someone somewhere does something, be it changing some data, updating some UI component, saving somethign to the server or what have you, and telling the world about it by sending out, or emitting, event notifiers.

The same basis governs how NanoQueue is built, though it uses the broker terminology as it can also be used for asynchronous communication using a request/response pattern.

### Module Registry / Instance Repository

When writing decoupled applications one of the most popular patterns is Inversion of Control (IoC) using the Dependency Injection technique. This is a great pattern for many use cases, but not always an easy thing to implement. Sometimes you just need a central place to get a hold of your object instances when you have clearly defined dependencies and just want a single reference to pass around, or even use as a global repository.

NanoQueue provides you with a module registry where you can regsiter your modules to keep them from littering the global scope, and to help you avoid potential collisions on the `window` object.

NanoQueue is a great place to start if you want to build your own, modularized framework for managing state, updating UI, monitoring events or many other types of applications that handles the passing around of information about state, pure data, requests for work to be done or general events.

## API

Coming soon :construction_worker:
