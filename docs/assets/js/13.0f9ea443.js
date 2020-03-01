(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{65:function(t,s,e){"use strict";e.r(s);var a=e(0),n=Object(a.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"architecture-basics"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#architecture-basics"}},[t._v("#")]),t._v(" Architecture Basics")]),t._v(" "),e("p",[t._v("This document is introducing basic designs in Hitchy framework and how parts of code interact with each other the create a running application.")]),t._v(" "),e("h2",{attrs:{id:"the-core"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#the-core"}},[t._v("#")]),t._v(" The Core")]),t._v(" "),e("p",[t._v("Hitchy consists of a very rudimentary core that's basically capable of these features:")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"#integrating-with-services"}},[t._v("integrating with some service")]),t._v(", usually an HTTP service")]),t._v(" "),e("li",[e("a",{attrs:{href:"#discovering-plugins"}},[t._v("discovering and loading plugins")])]),t._v(" "),e("li",[e("RouterLink",{attrs:{to:"/internals/routing-basics.html"}},[t._v("routing incoming requests")]),t._v(" through handlers resulting in a response")],1)]),t._v(" "),e("h2",{attrs:{id:"integrating-with-services"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#integrating-with-services"}},[t._v("#")]),t._v(" Integrating With Services")]),t._v(" "),e("p",[t._v("Currently there are two "),e("em",[t._v("injectors")]),t._v(": one is available for integrating a Hitchy-based application with an "),e("a",{attrs:{href:"https://expressjs.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("express"),e("OutboundLink")],1),t._v("-based service as a middleware. A second one is attaching a Hitchy-based application to a purely Node.js based HTTP service.")]),t._v(" "),e("p",[t._v("Integrating with an "),e("a",{attrs:{href:"https://expressjs.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("express"),e("OutboundLink")],1),t._v(" application is as simple as this:")]),t._v(" "),e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" expressApp "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"express"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" Hitchy "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"hitchy"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("express"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" MyApp "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("Hitchy")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    projectFolder"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"path/name/of/hitchy/project"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nexpressApp"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("use")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/some/prefix"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" MyApp "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("p",[t._v("In opposition to that, any Hitchy-based application can be invoked standalone using control script which is included with Hitchy:")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("hitchy start --project path/name/of/hitchy/project\n")])])]),e("h2",{attrs:{id:"discovering-plugins"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#discovering-plugins"}},[t._v("#")]),t._v(" Discovering Plugins")]),t._v(" "),e("p",[t._v("Plugins are discovered when starting Hitchy. There is bootstrap code which is passing these stages:")]),t._v(" "),e("ol",[e("li",[e("p",[t._v("The first stage is called "),e("strong",[t._v("triangulation")]),t._v(" and it is used to derive runtime options from current context unless given explicitly on start, e.g. detecting application's project folder to use.")])]),t._v(" "),e("li",[e("p",[t._v("The "),e("strong",[t._v("discovery")]),t._v(" stage is used to search folders of a project for "),e("a",{attrs:{href:"#plugins"}},[t._v("plugins")]),t._v(" suitable for integrating with Hitchy-based application. This results in a sequence of discovered plugins sorted in order of plugins relying on each other. Plugins depending on other plugins are listed late in this sequence.")])]),t._v(" "),e("li",[e("p",[e("strong",[t._v("Exposure")]),t._v(" stage is loading "),e("a",{attrs:{href:"#components"}},[t._v("components")]),t._v(" provided by either plugin as well as the application for exposing them in context of a resulting, commonly available "),e("a",{attrs:{href:"../api"}},[t._v("Hitchy API")]),t._v(".")]),t._v(" "),e("div",{staticClass:"custom-block warning"},[e("p",{staticClass:"custom-block-title"},[t._v("Compatibility")]),t._v(" "),e("p",[t._v("In versions before 0.4.0 exposure stage was processed after configuration stage. Order has been swapped to enable use of services in configuration.")])])]),t._v(" "),e("li",[e("p",[t._v("In "),e("strong",[t._v("configuration")]),t._v(" stage every plugin is asked for its contribution to application's configuration. This includes processing the custom configuration provided as part of the current application itself as well.")])]),t._v(" "),e("li",[e("p",[t._v("The "),e("strong",[t._v("initialisation")]),t._v(" stage is used to let every plugin initialise its state.")])]),t._v(" "),e("li",[e("p",[t._v("Eventually a "),e("strong",[t._v("routing")]),t._v(" stage is passed for compiling routing definitions into optimized routing tables.")])])]),t._v(" "),e("p",[t._v("Stages 3 to 6 are always processing plugins in order resulting from discovery stage.")]),t._v(" "),e("p",[t._v("This bootstrap process is finished by "),e("em",[t._v("preparing")]),t._v(" application for graceful "),e("strong",[t._v("shutdown")]),t._v(" stage which is going to request every plugin in reverse order for shutting down prior to leaving application process when requested.")]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("Additional Information?")]),t._v(" "),e("p",[t._v("See the "),e("RouterLink",{attrs:{to:"/internals/bootstrap.html"}},[t._v("very detailed description of bootstrap process")]),t._v(" for more details.")],1),t._v(" "),e("p",[t._v("Read about "),e("RouterLink",{attrs:{to:"/api/plugins.html"}},[t._v("Hitchy's Plugin API")]),t._v(" to learn how to write your own plugin.")],1)]),t._v(" "),e("h2",{attrs:{id:"building-blocks"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#building-blocks"}},[t._v("#")]),t._v(" Building Blocks")]),t._v(" "),e("h3",{attrs:{id:"plugins"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#plugins"}},[t._v("#")]),t._v(" Plugins")]),t._v(" "),e("p",[t._v("In context of a Hitchy-based application a plugin is meant to introduce new features to simplify development of any such application. Plugins usually consist of files distributed as npm packages. They need to comply with some specific conventions to be discovered as plugins and to be properly integrated with the bootstrap process described before.")]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),e("p",[t._v("A commonly used alias is "),e("em",[t._v("extension")]),t._v(" but starting with Hitchy 0.2.0 terminology has been revised. The term "),e("em",[t._v("plugin")]),t._v(" is preferred since then for official plugin packages using names starting with "),e("strong",[t._v("hitchy-plugin-...")]),t._v(".")])]),t._v(" "),e("h3",{attrs:{id:"components"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#components"}},[t._v("#")]),t._v(" Components")]),t._v(" "),e("p",[t._v("Every plugin as well as your application is meant to use four kinds of building blocks:")]),t._v(" "),e("ul",[e("li",[t._v("controllers")]),t._v(" "),e("li",[t._v("policies")]),t._v(" "),e("li",[t._v("models")]),t._v(" "),e("li",[t._v("services")])]),t._v(" "),e("p",[t._v("Those four kinds of blocks are commonly referred to as "),e("em",[t._v("components")]),t._v(" of a Hitchy-based application. There is "),e("RouterLink",{attrs:{to:"/internals/components.html"}},[t._v("a separate chapter describing them in more detail")]),t._v(".")],1),t._v(" "),e("h3",{attrs:{id:"modules"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#modules"}},[t._v("#")]),t._v(" Modules")]),t._v(" "),e("p",[t._v("Starting with v0.2.0 of Hitchy its understandig of a "),e("em",[t._v("module")]),t._v(" isn't any different from Node.js anymore. A Javascript file exporting some API is a module that can be loaded e.g. by using "),e("code",[t._v("require()")]),t._v(".")]),t._v(" "),e("p",[t._v("In previous versions the term module was used for what is now called a "),e("a",{attrs:{href:"#plugins"}},[t._v("plugin")]),t._v(".")])])}),[],!1,null,null,null);s.default=n.exports}}]);