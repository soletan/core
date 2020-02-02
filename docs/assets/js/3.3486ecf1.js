(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{51:function(e,t,s){e.exports=s.p+"assets/img/routing-stages-basic.b279846a.svg"},52:function(e,t,s){e.exports=s.p+"assets/img/routing-stages-with-blueprints.5cb8933a.svg"},53:function(e,t,s){e.exports=s.p+"assets/img/routing-stages-with-slots.49b00d70.svg"},54:function(e,t,s){e.exports=s.p+"assets/img/routing-stages-aggregated.b625afe6.svg"},55:function(e,t,s){e.exports=s.p+"assets/img/routing-stages-aggregated-reduced.33ae44d4.svg"},68:function(e,t,s){"use strict";s.r(t);var i=s(0),o=Object(i.a)({},(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[i("h1",{attrs:{id:"routing-basics"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#routing-basics"}},[e._v("#")]),e._v(" Routing Basics")]),e._v(" "),i("p",[e._v("Hitchy's core essentially features two jobs:")]),e._v(" "),i("ul",[i("li",[e._v("discovering plugins and")]),e._v(" "),i("li",[e._v("routing requests to its designated handler")])]),e._v(" "),i("p",[e._v("This chapter is about the latter job and understanding it is essential for properly building applications with Hitchy. We will introduce the essential terms "),i("em",[e._v("routes")]),e._v(" and "),i("em",[e._v("policies")]),e._v(" you definitely need to become familiar with.")]),e._v(" "),i("h2",{attrs:{id:"basic-terms"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#basic-terms"}},[e._v("#")]),e._v(" Basic Terms")]),e._v(" "),i("h3",{attrs:{id:"routes"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#routes"}},[e._v("#")]),e._v(" Routes")]),e._v(" "),i("p",[e._v("Hitchy is an HTTP-based service responding to incoming requests using handlers. Except for some error responders there is no such handler bundled with Hitchy. Just remember: Hitchy starts lean. It is up to you to fill the gaps with existing plugins or your own code.")]),e._v(" "),i("p",[e._v("In HTTP every request selects some entity on a server using a path name.")]),e._v(" "),i("div",{staticClass:"custom-block tip"},[i("p",{staticClass:"custom-block-title"},[e._v("Example")]),e._v(" "),i("p",[e._v("When opening URL "),i("code",[e._v("http://cepharum.de/path/of/resource.html")]),e._v(" in a browser")]),e._v(" "),i("ul",[i("li",[e._v("the protocol HTTP is picked to send a request")]),e._v(" "),i("li",[e._v("to a server named "),i("code",[e._v("cepharum.de")])]),e._v(" "),i("li",[e._v("for processing and returning information regarding some entity identified by its path "),i("code",[e._v("/path/of/resource.html")]),e._v(".")])]),e._v(" "),i("p",[e._v("In HTTP servers are assumed to expose a hierarchy of addressable entities. And the path is picking a part of hierarchy you are interested in when sending a request.")])]),e._v(" "),i("p",[e._v("Hitchy's request dispatching capabilities are meant to find some code to answer requests. The request's path is essential to selecting one out of several defined "),i("em",[e._v("request handlers")]),e._v(". Associating a request's path with a particular handler is called a "),i("em",[e._v("route")]),e._v(".")]),e._v(" "),i("p",[e._v("In Hitchy this rather generic term is refined to cover particular kind of handlers, only. Here, a route is always assumed to actually send some response. Because of that there is always at most one such route handling a particular request.")]),e._v(" "),i("h3",{attrs:{id:"policies"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#policies"}},[e._v("#")]),e._v(" Policies")]),e._v(" "),i("p",[e._v("Relying only on such routes would be very limiting with regards to customizing request handlers, applying common behaviour to a set of handlers and supporting plugins introducing additional features for every request handled. That's why there is a second kind of routes which is managed and behaving differently from those routes described before. This additional kind of routes are called "),i("em",[e._v("policies")]),e._v(" and they are very important building bricks for assembling your applications from lots of useful small components over and over again.")]),e._v(" "),i("div",{staticClass:"custom-block tip"},[i("p",{staticClass:"custom-block-title"},[e._v("Stick with the wording")]),e._v(" "),i("p",[e._v("Talking about "),i("em",[e._v("routes")]),e._v(' in Hitchy documentation always refers to those routes described above. When talking about this other kind of "routes" the term '),i("em",[e._v("policies")]),e._v(" is used.")]),e._v(" "),i("p",[i("em",[e._v("Routing")]),e._v(" as a process is always involving both policies and routes.")])]),e._v(" "),i("h4",{attrs:{id:"commonalities"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#commonalities"}},[e._v("#")]),e._v(" Commonalities")]),e._v(" "),i("p",[e._v("Policies and routes have these things in common:")]),e._v(" "),i("ul",[i("li",[i("p",[e._v("Both are associating some path with code "),i("em",[e._v("handling")]),e._v(" any matching request. This code is thus called a "),i("em",[e._v("request handler")]),e._v(" or just "),i("em",[e._v("handler")]),e._v(".")])]),e._v(" "),i("li",[i("p",[e._v("Handlers are capable of responding to a request in either context.")])])]),e._v(" "),i("h4",{attrs:{id:"differences"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#differences"}},[e._v("#")]),e._v(" Differences")]),e._v(" "),i("p",[e._v("Policies are different from routes, though:")]),e._v(" "),i("ul",[i("li",[i("p",[e._v("Policies might associated multiple handlers with a single path.")])]),e._v(" "),i("li",[i("p",[e._v("In opposition to routes policies are processed when matching prefix of an incoming request's path. Routes require to match the path as a whole.")])]),e._v(" "),i("li",[i("p",[e._v("That's why every incoming request may be dispatched to a sequence of matching policies with each policy probably selecting multiple handlers to invoke.")])]),e._v(" "),i("li",[i("p",[e._v("There may be multiple routes matching a request's path as well, but only the first one is used to respond.")])]),e._v(" "),i("li",[i("p",[e._v("Handlers attached to a policy are meant to return control to Hitchy to continue route dispatching unless they are responding to the request themselves.")])])]),e._v(" "),i("h2",{attrs:{id:"sequential-routing"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#sequential-routing"}},[e._v("#")]),e._v(" Sequential Routing")]),e._v(" "),i("h3",{attrs:{id:"routing-stages"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#routing-stages"}},[e._v("#")]),e._v(" Routing Stages")]),e._v(" "),i("p",[e._v("On every incoming request Hitchy is processing configured policies and routes in a particular order.")]),e._v(" "),i("p",[i("img",{attrs:{src:s(51),alt:"Basic Sequence of Routing"}})]),e._v(" "),i("ol",[i("li",[i("p",[e._v("Every request is passing zero or more policies matching the request.")])]),e._v(" "),i("li",[i("p",[e._v("After that a route is looked up for matching the request and respond to it. The first matching route is picked.")])]),e._v(" "),i("li",[i("p",[e._v("After responding another set of policies might be passed if matching request. Those policies can't respond to a request by intention but are available to post-process requests e.g. by releasing resources, logging times taken to respond etc.")])])]),e._v(" "),i("div",{staticClass:"custom-block warning"},[i("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),i("p",[e._v("There are routing stages "),i("strong",[e._v("before")]),e._v(" and "),i("strong",[e._v("after")]),e._v(" routes.")])]),e._v(" "),i("h3",{attrs:{id:"aggregated-configuration"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#aggregated-configuration"}},[e._v("#")]),e._v(" Aggregated Configuration")]),e._v(" "),i("p",[e._v("To understand the following chapters on routing stages and slots it is important to know how policies and routes are configured from a distant point of view.")]),e._v(" "),i("p",[e._v("The configuration of policies and routes is always aggregated from different sources and merged according to some internal set of rules. Basically there are two kinds of sources capable of defining policies and/or routes:")]),e._v(" "),i("ol",[i("li",[i("p",[i("RouterLink",{attrs:{to:"/internals/architecture-basics.html#plugins"}},[e._v("Plugins")]),e._v(" may define policies and/or routes in Hitchy's configuration phase during boot-up. They are "),i("em",[e._v("plugin-related")]),e._v(".")],1)]),e._v(" "),i("li",[i("p",[e._v("The project relying on Hitchy as a framework - your application - may define policies and/or routes as well. These are called "),i("em",[e._v("custom")]),e._v(" policies and routes.")])])]),e._v(" "),i("h3",{attrs:{id:"focusing-on-routes"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#focusing-on-routes"}},[e._v("#")]),e._v(" Focusing On Routes")]),e._v(" "),i("p",[e._v("In chart above a single stage was displayed regarding routes. However, the stage covering routes is slightly more complex:")]),e._v(" "),i("p",[i("img",{attrs:{src:s(52),alt:"Sequence of Routing Including Blueprints"}})]),e._v(" "),i("p",[e._v('This chart introduces another stage in between of two stages with "regular" routes. The term '),i("em",[e._v("blueprints")]),e._v(' refers to one or more sets of related routes. They are different from those "regular" routes in context of routing configuration, only.')]),e._v(" "),i("div",{staticClass:"custom-block tip"},[i("p",{staticClass:"custom-block-title"},[e._v("Background")]),e._v(" "),i("p",[e._v("Blueprints as a pattern have been adopted from existing server-side frameworks such as "),i("a",{attrs:{href:"https://sailsjs.com/documentation/concepts/blueprints",target:"_blank",rel:"noopener noreferrer"}},[e._v("Sails"),i("OutboundLink")],1),e._v(".")])]),e._v(" "),i("p",[e._v("Blueprints are created by plugins, only. They usually depend on related data to be exposed using a complete set of routes enabling to manage that data.")]),e._v(" "),i("p",[e._v("Collecting such blueprints in a separate stage as illustrated before is essential for flexibly integrating them into different kinds of applications. By splitting up the stage of routes into three different stages with the blueprint routes processed between two separate stages for non-blueprint routes an application and its plugins may")]),e._v(" "),i("ul",[i("li",[i("p",[e._v('add routes that "replace" routes of a blueprint by being associated with the stage preceding the blueprint stage or')])]),e._v(" "),i("li",[i("p",[e._v("provide fallback routes to use if some optionally supported blueprint is missing.")])])]),e._v(" "),i("div",{staticClass:"custom-block warning"},[i("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),i("p",[e._v("There are stages for routes being explicitly obeyed "),i("strong",[e._v("before")]),e._v(" or "),i("strong",[e._v("after")]),e._v(" routes of blueprints.")])]),e._v(" "),i("h3",{attrs:{id:"routing-slots"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#routing-slots"}},[e._v("#")]),e._v(" Routing Slots")]),e._v(" "),i("p",[e._v("In either of the five stages described before multiple policies or routes can be configured. But even in scope of a single stage the routing keeps processing configured policies and routes sequentially. That's why controlling order of configured policies/routes per stage is important.")]),e._v(" "),i("p",[e._v("Stages are divided into "),i("em",[e._v("slots")]),e._v(" as illustrated in the following chart:")]),e._v(" "),i("p",[i("img",{attrs:{src:s(53),alt:"sequence of routing stages with slots"}})]),e._v(" "),i("ul",[i("li",[i("p",[e._v("In every stage there is a separate slot for either discovered plugin.")]),e._v(" "),i("div",{staticClass:"custom-block tip"},[i("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),i("p",[e._v("The discovery of plugins always results in a certain order of plugins which depends on either plugin selecting other plugins it depends on. A plugin depending on another plugin is always processed after the one it depends on.")])]),e._v(" "),i("p",[e._v("With regards to the order of discovered plugins their configured policies and routes are processed")]),e._v(" "),i("ul",[i("li",[i("p",[e._v("in same order in stages before the blueprint stage and")])]),e._v(" "),i("li",[i("p",[e._v("in reverse order in stages following the blueprint stage.")])])])]),e._v(" "),i("li",[i("p",[e._v("In every stage but the blueprint stage there are two additional slots for prepending or appending custom policies or routes via your application's configuration:")]),e._v(" "),i("ul",[i("li",[i("p",[e._v("Policies or routes in the "),i("strong",[e._v("early")]),e._v(" slot are processed before any policy or route configured by a plugin in same stage and before the blueprints.")])]),e._v(" "),i("li",[i("p",[e._v("Policies or routes in the "),i("strong",[e._v("before")]),e._v(" slot are processed after any policy or route configured by a plugin in same stage, but before the blueprints.")])]),e._v(" "),i("li",[i("p",[e._v("Policies or routes in the "),i("strong",[e._v("after")]),e._v(" slot are processed after the blueprints, but before any policy or route configured by a plugin in same stage.")])]),e._v(" "),i("li",[i("p",[e._v("Policies or routes in the "),i("strong",[e._v("late")]),e._v(" slot are processed after the blueprints and after any policy or route configured by a plugin in same stage.")])])])])]),e._v(" "),i("div",{staticClass:"custom-block warning"},[i("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),i("ul",[i("li",[e._v("Plugins have their individual slot in every stage of routing to add their policies and routes.")]),e._v(" "),i("li",[e._v("An application's definition of policies and routes can name slots to prepend or append them to either stage's set of plugin-related slots.\n"),i("ul",[i("li",[e._v("Those slots are named "),i("strong",[e._v("early")]),e._v(", "),i("strong",[e._v("before")]),e._v(", "),i("strong",[e._v("after")]),e._v(" and "),i("strong",[e._v("late")]),e._v(".")])])])])]),e._v(" "),i("h2",{attrs:{id:"routing-optimizations"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#routing-optimizations"}},[e._v("#")]),e._v(" Routing Optimizations")]),e._v(" "),i("p",[e._v("Hitchy is discovering available plugins, gathering their routing configurations and merging them with the application's configuration of custom policies and routes. After that all routing data is optimized for dispatching requests as fast as possible.")]),e._v(" "),i("p",[e._v("After aggregating all the different configurations Hitchy the separation into slots is dropped. Blueprint routes are appended to the preceding stage of routes. As a result there are two blocks of configured policies and two blocks of configured routes.")]),e._v(" "),i("p",[i("img",{attrs:{src:s(54),alt:"Blocks of aggregated routing configuration"}})]),e._v(" "),i("p",[e._v("For every such block the configured policies/routes are grouped by HTTP method. Those policies/routes defined to apply to all HTTP methods are redundantly listed in either resulting group.")]),e._v(" "),i("p",[e._v("For every method-related group in every policy-related block sequences of policies are grouped by their prefix. Policies with shorter prefix are redundantly listed in groups for longer prefixes as well.")]),e._v(" "),i("p",[e._v("For every method-related group in first of the two route-related blocks the routes of same group in second block are appended. This results in a single block with sequences of applicable routes grouped by HTTP method. Eventually every method-related group of routes is grouped by prefix similar to policies.")]),e._v(" "),i("p",[i("img",{attrs:{src:s(55),alt:"Blocks of aggregated and reduced routing configuration"}})]),e._v(" "),i("h2",{attrs:{id:"request-matching"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#request-matching"}},[e._v("#")]),e._v(" Request Matching")]),e._v(" "),i("p",[e._v("Given an actual request policies and routes are matching slightly differently:")]),e._v(" "),i("ul",[i("li",[i("p",[e._v("A policy is matching a request when the request's actual path "),i("em",[e._v("starts with")]),e._v(" the path used to define the policy.")])]),e._v(" "),i("li",[i("p",[e._v("A route is matching a request when the request's actual path "),i("em",[e._v("is equivalent to")]),e._v(" the path used to define the route.")])])]),e._v(" "),i("p",[e._v("There are commonalities in matching both kinds as well:")]),e._v(" "),i("ul",[i("li",[i("p",[e._v("In both cases matching covers HTTP methods used. Thus, matching path isn't sufficient if there is a particular HTTP method required to match as well. The method always has to match as a whole.")])]),e._v(" "),i("li",[i("p",[e._v("In either case a path can be described by a pattern resulting in multiple different paths matching this pattern.")])])]),e._v(" "),i("h3",{attrs:{id:"multiple-matches"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#multiple-matches"}},[e._v("#")]),e._v(" Multiple Matches")]),e._v(" "),i("p",[e._v("Routing a particular request frequently results in multiple matching policies and routes. This might be due to")]),e._v(" "),i("ul",[i("li",[i("p",[e._v("your application as well as used plugins configure policies/routes for the same path,")])]),e._v(" "),i("li",[i("p",[e._v("policies/routes for the same path are configured in different routing stages,")])]),e._v(" "),i("li",[i("p",[e._v("having an intersection of matching paths when using path patterns or")])]),e._v(" "),i("li",[i("p",[e._v("different policies share a common prefix")])])]),e._v(" "),i("h3",{attrs:{id:"dispatching-order"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#dispatching-order"}},[e._v("#")]),e._v(" Dispatching Order")]),e._v(" "),i("p",[e._v("On incoming requests Hitchy is iterating over the three blocks resulting from the optimization as described before.")]),e._v(" "),i("ul",[i("li",[i("p",[e._v("In every block the group matching the requested HTTP method is looked up. As a result an existing set of policies or routes grouped by prefix is fetched. If there is no group for the requested method the block is skipped as a whole.")])]),e._v(" "),i("li",[i("p",[e._v("The longest prefix matching current request is selected resulting in a sequence of policies or routes.")]),e._v(" "),i("p",[e._v("In processing policies this is used to get all the policies to be obeyed. In processing routes this is used to improve routing performance by limiting the number of routes that need to be looked up for a route matching current request.")])]),e._v(" "),i("li",[i("p",[e._v("When processing a sequence of policies, for every policy in resulting sequence the associated handlers are invoked.")]),e._v(" "),i("p",[e._v("When processing a sequence of routes, the first route of resulting sequence matching request's path as a whole is searched and its handler is invoked. If there is no matching route Hitchy responses with a response with HTTP status code 404 by default.")])])])])}),[],!1,null,null,null);t.default=o.exports}}]);