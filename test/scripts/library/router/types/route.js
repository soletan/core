/**
 * (c) 2017 cepharum GmbH, Berlin, http://cepharum.de
 *
 * The MIT License (MIT)
 *
 * Copyright (c) 2017 cepharum GmbH
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 * @author: cepharum
 */

"use strict";

const apiOverlay = {
	runtime: {
		controllers: {
			custom: class CustomController {
				static myHandler( req, res ) {}
			}
		},
		policies: {
			filter: class FilterPolicy {
				static myImplementation( req, res, next ) {}
			}
		},
	}
};

const modules = {
	RouterModule: "lib/router",
	TypesModule: "lib/router/types",
	RouteModule: "lib/router/types/route",
};

const ApiMockUp = require( "../../../../../tools" ).apiMockUp( { apiOverlay, modules } );

const Should = require( "should" );

// ----------------------------------------------------------------------------

suite( "Library.Router.Types.Route", function() {
	test( "is exposed properly", function() {
		return ApiMockUp.then( function( { RouterModule, TypesModule, RouteModule } ) {
			Should.exist( RouterModule );
			Should.exist( RouterModule.types );
			Should.exist( RouterModule.types.route );

			Should.exist( TypesModule );
			Should.exist( TypesModule.route );

			RouterModule.types.should.equal( TypesModule );
			TypesModule.route.should.equal( RouteModule );

			Should.exist( RouteModule.Route );
			Should.exist( RouteModule.PolicyRoute );
			Should.exist( RouteModule.TerminalRoute );
		} );
	} );
} );

suite( "Library.Router.Types.Route#Route", function() {
	test( "exists", function() {
		return ApiMockUp.then( function( { RouteModule } ) {
			RouteModule.Route.should.be.ok().and.should.be.Object();
		} );
	} );

	test( "can be instantiated", function() {
		return ApiMockUp.then( function( { API, RouteModule } ) {
			( () => { new RouteModule.Route( "/", () => {}, API ) } ).should.not.throw();
		} );
	} );

	test( "provides static method for parsing routing source definitions", function() {
		return ApiMockUp.then( function( { RouteModule: { Route } } ) {
			Route.parseSource.should.be.Function();
		} );
	} );

	test( "provides static method for parsing routing target definitions", function() {
		return ApiMockUp.then( function( { RouteModule: { Route } } ) {
			Route.parseTarget.should.be.Function();
		} );
	} );

	test( "exposes pattern for matching and normalizing names of modules containing route targets", function() {
		return ApiMockUp.then( function( { RouteModule: { Route } } ) {
			Route.tailPattern.should.be.instanceof( RegExp );

			"SomeCustomController".replace( Route.tailPattern, "" ).should.equal( "SomeCustom" );
			"SomeCustomPolicy".replace( Route.tailPattern, "" ).should.equal( "SomeCustomPolicy" );
		} );
	} );

	test( "exposes singular name of collection to contain code addressable by routes", function() {
		return ApiMockUp.then( function( { RouteModule: { Route } } ) {
			Route.collectionSingularName.should.be.String();
			Route.collectionSingularName.should.be.empty();
		} );
	} );

	test( "exposes plural name of collection to contain code addressable by routes", function() {
		return ApiMockUp.then( function( { RouteModule: { Route } } ) {
			Route.collectionPluralName.should.be.String();
			Route.collectionPluralName.should.be.empty();
		} );
	} );
} );

suite( "Library.Router.Types.Route#PolicyRoute", function() {
	test( "can be instantiated", function() {
		return ApiMockUp.then( function( { API, RouteModule: { PolicyRoute } } ) {
			( () => { new PolicyRoute( "/", () => {}, API ) } ).should.not.throw();
		} );
	} );

	test( "is class inheriting from Route", function() {
		return ApiMockUp.then( function( { API, RouteModule: { PolicyRoute, Route } } ) {
			let route = new PolicyRoute( "/", () => {}, API );
			route.should.be.instanceof( PolicyRoute );
			route.should.be.instanceof( Route );
		} );
	} );

	test( "does not use custom parser function", function() {
		return ApiMockUp.then( function( { RouteModule: { PolicyRoute, Route } } ) {
			PolicyRoute.parseSource.should.be.equal( Route.parseSource );
			PolicyRoute.parseTarget.should.be.equal( Route.parseTarget );
		} );
	} );

	test( "exposes pattern for matching and normalizing names of modules containing route targets", function() {
		return ApiMockUp.then( function( { RouteModule: { PolicyRoute } } ) {
			PolicyRoute.tailPattern.should.be.instanceof( RegExp );

			"SomeCustomController".replace( PolicyRoute.tailPattern, "" ).should.equal( "SomeCustomController" );
			"SomeCustomPolicy".replace( PolicyRoute.tailPattern, "" ).should.equal( "SomeCustom" );
		} );
	} );

	test( "exposes singular name of collection to contain code addressable by routes", function() {
		return ApiMockUp.then( function( { RouteModule: { PolicyRoute } } ) {
			PolicyRoute.collectionSingularName.should.be.String();
			PolicyRoute.collectionSingularName.should.equal( "policy" );
		} );
	} );

	test( "exposes plural name of collection to contain code addressable by routes", function() {
		return ApiMockUp.then( function( { RouteModule: { PolicyRoute } } ) {
			PolicyRoute.collectionPluralName.should.be.String();
			PolicyRoute.collectionPluralName.should.equal( "policies" );
		} );
	} );
} );

suite( "Library.Router.Types.Route#TerminalRoute", function() {
	test( "can be instantiated", function() {
		return ApiMockUp.then( function( { API, RouteModule: { TerminalRoute } } ) {
			( () => { new TerminalRoute( "/", () => {}, API ) } ).should.not.throw();
		} );
	} );

	test( "is class inheriting from Route", function() {
		return ApiMockUp.then( function( { API, RouteModule: { TerminalRoute, Route } } ) {
			let route = new TerminalRoute( "/", () => {}, API );
			route.should.be.instanceof( TerminalRoute );
			route.should.be.instanceof( Route );
		} );
	} );

	test( "does not use custom parser function", function() {
		return ApiMockUp.then( function( { RouteModule: { TerminalRoute, Route } } ) {
			TerminalRoute.parseSource.should.be.equal( Route.parseSource );
			TerminalRoute.parseTarget.should.be.equal( Route.parseTarget );
		} );
	} );

	test( "exposes pattern for matching and normalizing names of modules containing route targets", function() {
		return ApiMockUp.then( function( { RouteModule: { TerminalRoute } } ) {
			TerminalRoute.tailPattern.should.be.instanceof( RegExp );

			"SomeCustomController".replace( TerminalRoute.tailPattern, "" ).should.equal( "SomeCustom" );
			"SomeCustomPolicy".replace( TerminalRoute.tailPattern, "" ).should.equal( "SomeCustomPolicy" );
		} );
	} );

	test( "exposes singular name of collection to contain code addressable by routes", function() {
		return ApiMockUp.then( function( { RouteModule: { TerminalRoute } } ) {
			TerminalRoute.collectionSingularName.should.be.String();
			TerminalRoute.collectionSingularName.should.equal( "controller" );
		} );
	} );

	test( "exposes plural name of collection to contain code addressable by routes", function() {
		return ApiMockUp.then( function( { RouteModule: { TerminalRoute } } ) {
			TerminalRoute.collectionPluralName.should.be.String();
			TerminalRoute.collectionPluralName.should.equal( "controllers" );
		} );
	} );
} );

suite( "Library.Router.Types.Route.Route#parseSource", function() {
	test( "rejects invalid types of values for defining source of routing", function() {
		return ApiMockUp.then( function( { RouteModule: { Route } } ) {
			Route.parseSource.bind( Route ).should.throw();
			Route.parseSource.bind( Route, null ).should.throw();
			Route.parseSource.bind( Route, undefined ).should.throw();
			Route.parseSource.bind( Route, false ).should.throw();
			Route.parseSource.bind( Route, true ).should.throw();
			Route.parseSource.bind( Route, 1.0 ).should.throw();
			Route.parseSource.bind( Route, -0.0 ).should.throw();
			Route.parseSource.bind( Route, [] ).should.throw();
			Route.parseSource.bind( Route, ["GET", "/"] ).should.throw();
		} );
	} );

	test( "accepts well-formed strings for defining source of routing", function() {
		return ApiMockUp.then( function( { RouteModule: { Route } } ) {
			Route.parseSource.bind( Route, "" ).should.throw();

			Route.parseSource.bind( Route, "/" ).should.not.throw();
			Route.parseSource.bind( Route, "GET /" ).should.not.throw();
		} );
	} );

	test( "accepts objects containing certaing properties for defining source of routing", function() {
		return ApiMockUp.then( function( { RouteModule: { Route } } ) {
			Route.parseSource.bind( Route, {} ).should.throw();
			Route.parseSource.bind( Route, {method: "GET", path: "/"} ).should.throw();

			Route.parseSource.bind( Route, {url: "/"} ).should.not.throw();
			Route.parseSource.bind( Route, {type: "GET", url: "/"} ).should.not.throw();
			Route.parseSource.bind( Route, {type: "GET", url: "/", module: "MyController", method: "listItems"} ).should.not.throw();
		} );
	} );

	test( "provides all information on parsed source of defined route", function() {
		return ApiMockUp.then( function( { RouteModule: { Route } } ) {
			const route = Route.parseSource( "/" );

			Should.exist( route );
			route.should.have.keys( "method", "prefix", "pattern", "parameters" );
			Object.keys( route ).should.have.length( 5 );

			route.method.should.be.String();
			route.prefix.should.be.String();
			route.pattern.should.be.instanceof( RegExp );
			route.parameters.should.be.Array();
			route.render.should.be.Function();
		} );
	} );

	test( "provides uppercase name of HTTP method route is bound to", function() {
		return ApiMockUp.then( function( { RouteModule: { Route } } ) {
			const tests = {
				"/": "GET",
				"get /": "GET",
				"GET /": "GET",
				"put /": "PUT",
				"puT /": "PUT",
				"anyThing /": "ANYTHING",
				"ANYTHING /": "ANYTHING",
				"some-tYPE /": "SOME-TYPE",
				"SOME-type /": "SOME-TYPE",
				"* /": "*",
			};

			Object.keys( tests ).forEach( source => {
				let route = Route.parseSource( source );
				route.method.should.equal( tests[source] );
			} );
		} );
	} );

	test( "maps defined HTTP method ALL to *", function() {
		return ApiMockUp.then( function( { RouteModule: { Route } } ) {
			const tests = {
				"* /": "*",
				"all /": "*",
				"ALL /": "*",
				"ALLe /": "ALLE",
				"any /": "ANY",
			};

			Object.keys( tests ).forEach( source => {
				let route = Route.parseSource( source );
				route.method.should.equal( tests[source] );
			} );
		} );
	} );

	test( "rejects definitions declaring invalid HTTP method", function() {
		return ApiMockUp.then( function( { RouteModule: { Route } } ) {
			const tests = ["+", "-", ".", "1", "23", "A1", "ANY_TYPE", "-LESS"];

			tests.forEach( method => {
				Route.parseSource.bind( Route, method + " /" ).should.throw();
			} );
		} );
	} );

	test( "accepts valid pathes", function() {
		return ApiMockUp.then( function( { RouteModule: { Route } } ) {
			const pathes = [
				// w/o parameters and globbing
				"/", "/test", "/test/", "/test/more", "/a", "/a/b",
				// w/ parameters or globbing
				"/:test", "/prefix/:rest", "/?(optional)", "/+(repeatable)",
				// w/ regexp elements
				"/(optional)?", "/(repeatable)+"
			];

			pathes.forEach( path => Route.parseSource.bind( Route, path ).should.not.throw() );
		} );
	} );

	test( "rejects invalid pathes", function() {
		return ApiMockUp.then( function( { RouteModule: { Route } } ) {
			const pathes = [
				// w/o parameters and globbing
				"", ".", "..", "../", "./test", "test", ".//", "//more", "/test//more", "/test/more//",
				// w/ invalid parameters
				":", "/:", "/:/",
				// w/ invalid globbing
				"/()", "/()?", "/()*", "/()+"
			];

			pathes.forEach( path => Route.parseSource.bind( Route, path ).should.throw() );
		} );
	} );

	test( "extract static prefix from route's declared path", function() {
		return ApiMockUp.then( function( { RouteModule: { Route } } ) {
			Route.parseSource( "/" ).prefix.should.equal( "" );
			Route.parseSource( "/test" ).prefix.should.equal( "/test" );
			Route.parseSource( "/test/" ).prefix.should.equal( "/test" );
			Route.parseSource( "/test/more" ).prefix.should.equal( "/test/more" );
			Route.parseSource( "/test/more/" ).prefix.should.equal( "/test/more" );

			Route.parseSource( "/test/more/:name" ).prefix.should.equal( "/test/more" );
			Route.parseSource( "/test/(more)" ).prefix.should.equal( "/test" );
			Route.parseSource( "/test?/(more)" ).prefix.should.equal( "/tes" );
			Route.parseSource( "/test(more)" ).prefix.should.equal( "/test" );
		} );
	} );

	test( "extracts ordered list of parameter names used in path declaration", function() {
		return ApiMockUp.then( function( { RouteModule: { Route } } ) {
			Route.parseSource( "/" ).parameters.should.have.length( 0 );
			Route.parseSource( "/test" ).parameters.should.have.length( 0 );
			Route.parseSource( "/test/" ).parameters.should.have.length( 0 );
			Route.parseSource( "/test/more" ).parameters.should.have.length( 0 );

			let parameters = Route.parseSource( "/test/more/:var" ).parameters;
			parameters.should.have.length( 1 );
			parameters[0].should.have.properties( "name", "prefix", "delimiter", "optional", "repeat", "partial", "asterisk", "pattern" );
			parameters[0].name.should.equal( "var" );
			parameters[0].prefix.should.equal( "/" );
			parameters[0].delimiter.should.equal( "/" );
			parameters[0].optional.should.be.false();
			parameters[0].repeat.should.be.false();
			parameters[0].partial.should.be.false();
			parameters[0].asterisk.should.be.false();
			( () => { new RegExp( parameters[0].pattern ) } ).should.not.throw();

			parameters = Route.parseSource( "/test/:more/extra-:var" ).parameters;
			parameters.should.have.length( 2 );
			parameters[0].should.have.properties( "name", "prefix", "delimiter", "optional", "repeat", "partial", "asterisk", "pattern" );
			parameters[0].name.should.equal( "more" );
			parameters[0].prefix.should.equal( "/" );
			parameters[0].delimiter.should.equal( "/" );
			parameters[0].optional.should.be.false();
			parameters[0].repeat.should.be.false();
			parameters[0].partial.should.be.false();
			parameters[0].asterisk.should.be.false();
			( () => { new RegExp( parameters[0].pattern ) } ).should.not.throw();

			parameters[1].should.have.properties( "name", "prefix", "delimiter", "optional", "repeat", "partial", "asterisk", "pattern" );
			parameters[1].name.should.equal( "var" );
			parameters[1].prefix.should.equal( "" );
			parameters[1].delimiter.should.equal( "/" );
			parameters[1].optional.should.be.false();
			parameters[1].repeat.should.be.false();
			parameters[1].partial.should.be.false();
			parameters[1].asterisk.should.be.false();
			( () => { new RegExp( parameters[1].pattern ) } ).should.not.throw();
		} );
	} );

	test( "extracts ordered list positional parameters defined as sub-matches in path declaration", function() {
		return ApiMockUp.then( function( { RouteModule: { Route } } ) {
			let parameters = Route.parseSource( "/test/more/(var)" ).parameters;
			parameters.should.have.length( 1 );
			parameters[0].should.have.properties( "name", "prefix", "delimiter", "optional", "repeat", "partial", "asterisk", "pattern" );
			parameters[0].name.should.equal( 0 );
			parameters[0].prefix.should.equal( "/" );
			parameters[0].delimiter.should.equal( "/" );
			parameters[0].optional.should.be.false();
			parameters[0].repeat.should.be.false();
			parameters[0].partial.should.be.false();
			parameters[0].asterisk.should.be.false();
			( () => { new RegExp( parameters[0].pattern ) } ).should.not.throw();
			parameters[0].pattern.should.equal( "var" );    // for matching `var` as "value", only

			parameters = Route.parseSource( "/test/(more)*/extra-(var|name)" ).parameters;
			parameters.should.have.length( 2 );
			parameters[0].should.have.properties( "name", "prefix", "delimiter", "optional", "repeat", "partial", "asterisk", "pattern" );
			parameters[0].name.should.equal( 0 );
			parameters[0].prefix.should.equal( "/" );
			parameters[0].delimiter.should.equal( "/" );
			parameters[0].optional.should.be.true();
			parameters[0].repeat.should.be.true();
			parameters[0].partial.should.be.false();
			parameters[0].asterisk.should.be.false();
			( () => { new RegExp( parameters[0].pattern ) } ).should.not.throw();

			parameters[1].should.have.properties( "name", "prefix", "delimiter", "optional", "repeat", "partial", "asterisk", "pattern" );
			parameters[1].name.should.equal( 1 );
			parameters[1].prefix.should.equal( "" );
			parameters[1].delimiter.should.equal( "/" );
			parameters[1].optional.should.be.false();
			parameters[1].repeat.should.be.false();
			parameters[1].partial.should.be.false();
			parameters[1].asterisk.should.be.false();
			( () => { new RegExp( parameters[1].pattern ) } ).should.not.throw();
			parameters[1].pattern.should.equal( "var|name" );
		} );
	} );
} );

suite( "Library.Router.Types.Route.Route#parseTarget", function() {
	test( "rejects any target definition w/o API as context of route", function() {
		return ApiMockUp.then( function( { RouteModule: { PolicyRoute, Route } } ) {
			Route.parseTarget.bind( Route ).should.throw();
			Route.parseTarget.bind( Route, null ).should.throw();
			Route.parseTarget.bind( Route, undefined ).should.throw();
			Route.parseTarget.bind( Route, false ).should.throw();
			Route.parseTarget.bind( Route, true ).should.throw();
			Route.parseTarget.bind( Route, 1.0 ).should.throw();
			Route.parseTarget.bind( Route, -0.0 ).should.throw();
			Route.parseTarget.bind( Route, [] ).should.throw();
			Route.parseTarget.bind( Route, [function() {}] ).should.throw();
			Route.parseTarget.bind( Route, ["Custom::myHandler"] ).should.throw();
			Route.parseTarget.bind( Route, ["Custom.myHandler"] ).should.throw();
			Route.parseTarget.bind( Route, ["Custom", "myHandler"] ).should.throw();
			Route.parseTarget.bind( Route, ["Filter::myImplementation"] ).should.throw();
			Route.parseTarget.bind( Route, ["Filter.myImplementation"] ).should.throw();
			Route.parseTarget.bind( Route, ["Filter", "myImplementation"] ).should.throw();
			Route.parseTarget.bind( Route, {} ).should.throw();
			Route.parseTarget.bind( Route, {controller:"Custom", method:"myHandler"} ).should.throw();
			Route.parseTarget.bind( Route, {controller:"Filter", method:"myImplementation"} ).should.throw();
			Route.parseTarget.bind( Route, "" ).should.throw();

			// using valid parameters with abstract base class `Route`
			Route.parseTarget.bind( Route, "Custom::myHandler" ).should.throw();
			Route.parseTarget.bind( Route, "Custom.myHandler" ).should.throw();
			Route.parseTarget.bind( Route, "Filter::myImplementation" ).should.throw();
			Route.parseTarget.bind( Route, "Filter.myImplementation" ).should.throw();

			// valid target definitions, but still lacking API as context
			PolicyRoute.parseTarget.bind( PolicyRoute, "Filter::myImplementation" ).should.throw();
			PolicyRoute.parseTarget.bind( PolicyRoute, "Filter.myImplementation" ).should.throw();
			PolicyRoute.parseTarget.bind( PolicyRoute, { controller: "Filter", method: "myImplementation" } ).should.throw();
		} );
	} );

	test( "rejects invalid types of values for defining target of routing", function() {
		return ApiMockUp.then( function( { API, RouteModule: { Route } } ) {
			Route.parseTarget.bind( Route, null, API ).should.throw();
			Route.parseTarget.bind( Route, undefined, API ).should.throw();
			Route.parseTarget.bind( Route, false, API ).should.throw();
			Route.parseTarget.bind( Route, true, API ).should.throw();
			Route.parseTarget.bind( Route, 1.0, API ).should.throw();
			Route.parseTarget.bind( Route, -0.0, API ).should.throw();
			Route.parseTarget.bind( Route, [], API ).should.throw();
			Route.parseTarget.bind( Route, [function() {}], API ).should.throw();
			Route.parseTarget.bind( Route, ["Custom::myHandler"], API ).should.throw();
			Route.parseTarget.bind( Route, ["Custom.myHandler"], API ).should.throw();
			Route.parseTarget.bind( Route, ["Custom", "myHandler"], API ).should.throw();
			Route.parseTarget.bind( Route, ["Filter::myImplementation"], API ).should.throw();
			Route.parseTarget.bind( Route, ["Filter.myImplementation"], API ).should.throw();
			Route.parseTarget.bind( Route, ["Filter", "myImplementation"], API ).should.throw();
			Route.parseTarget.bind( Route, {}, API ).should.throw();
			Route.parseTarget.bind( Route, {controller:"Custom", method:"myHandler"}, API ).should.throw();
			Route.parseTarget.bind( Route, {controller:"Filter", method:"myImplementation"}, API ).should.throw();
			Route.parseTarget.bind( Route, "", API ).should.throw();
		} );
	} );

	test( "accepts policy target definitions as string", function() {
		return ApiMockUp.then( function( { API, RouteModule: { PolicyRoute } } ) {
			PolicyRoute.parseTarget.bind( PolicyRoute, "Filter::myImplementation", API ).should.not.throw();
			PolicyRoute.parseTarget.bind( PolicyRoute, "Filter.myImplementation", API ).should.not.throw();
			PolicyRoute.parseTarget.bind( PolicyRoute, { controller: "Filter", method: "myImplementation" }, API ).should.not.throw();
		} );
	} );

	test( "rejects policy target definitions addressing actions in wrong collection", function() {
		return ApiMockUp.then( function( { API, RouteModule: { PolicyRoute } } ) {
			PolicyRoute.parseTarget.bind( PolicyRoute, "Custom::myHandler", API ).should.throw();
			PolicyRoute.parseTarget.bind( PolicyRoute, "Custom.myHandler", API ).should.throw();
			PolicyRoute.parseTarget.bind( PolicyRoute, { controller: "Custom", method: "myHandler" }, API ).should.throw();
		} );
	} );

	test( "accepts terminal target definitions as string", function() {
		return ApiMockUp.then( function( { API, RouteModule: { TerminalRoute } } ) {
			TerminalRoute.parseTarget.bind( TerminalRoute, "Custom::myHandler", API ).should.not.throw();
			TerminalRoute.parseTarget.bind( TerminalRoute, "Custom.myHandler", API ).should.not.throw();
			TerminalRoute.parseTarget.bind( TerminalRoute, { controller: "Custom", method: "myHandler" }, API ).should.not.throw();
		} );
	} );

	test( "rejects policy target definitions addressing actions in wrong collection", function() {
		return ApiMockUp.then( function( { API, RouteModule: { TerminalRoute } } ) {
			TerminalRoute.parseTarget.bind( TerminalRoute, "Filter::myImplementation", API ).should.throw();
			TerminalRoute.parseTarget.bind( TerminalRoute, "Filter.myImplementation", API ).should.throw();
			TerminalRoute.parseTarget.bind( TerminalRoute, { controller: "Filter", method: "myImplementation" }, API ).should.throw();
		} );
	} );
} );
