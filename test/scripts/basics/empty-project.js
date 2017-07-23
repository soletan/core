"use strict";

let options = {
	projectFolder: "test/projects/empty",
	//debug: true,
};

const Test = require( "../../../tools" ).test;
const Hitchy = require( "../../../injector" ).node( options );

// ----------------------------------------------------------------------------

suite( "Hitchy standalone", function() {
	test( "can be started", function() {
		this.timeout( 3000 );  // for optionally requiring to install express first
		return Test.startServer( Hitchy );
	} );

	test( "can be stopped", function() {
		this.timeout( 3000 );  // for optionally requiring to install express first
		return Hitchy.stop();
	} );
} );

suite( "Serving empty project a request accepting HTML", function() {
	suiteSetup( () => Test.startServer( Hitchy ) );
	suiteTeardown( () => Hitchy.stop() );

	test( "misses GETting /", function() {
		return Hitchy.onStarted.then( () => Test.get( "/" )
			.then( function( response ) {
				response.should.have.value( "statusCode", 404 );
				response.should.be.html();
				response.text.should.be.String().and.match( /\bnot\s+found\b/i ).and.match( /<html\b/i );
			} ) );
	} );

	test( "misses POSTing /", function() {
		return Hitchy.onStarted.then( () => Test.post( "/" )
			.then( function( response ) {
				response.should.have.value( "statusCode", 404 );
				response.should.be.html();
				response.text.should.be.String().and.match( /\bnot\s+found\b/i ).and.match( /<html\b/i );
			} ) );
	} );

	test( "misses GETting /view", function() {
		return Hitchy.onStarted.then( () => Test.get( "/view" )
			.then( function( response ) {
				response.should.have.value( "statusCode", 404 );
				response.should.be.html();
				response.text.should.be.String().and.match( /\bnot\s+found\b/i ).and.match( /<html\b/i );
			} ) );
	} );

	test( "misses POSTing /view", function() {
		return Hitchy.onStarted.then( () => Test.post( "/view" )
			.then( function( response ) {
				response.should.have.value( "statusCode", 404 );
				response.should.be.html();
				response.text.should.be.String().and.match( /\bnot\s+found\b/i ).and.match( /<html\b/i );
			} ) );
	} );

	test( "misses GETting /view/read", function() {
		return Hitchy.onStarted.then( () => Test.get( "/view/read" )
			.then( function( response ) {
				response.should.have.value( "statusCode", 404 );
				response.should.be.html();
				response.text.should.be.String().and.match( /\bnot\s+found\b/i ).and.match( /<html\b/i );
			} ) );
	} );

	test( "misses POSTing /view/read", function() {
		return Hitchy.onStarted.then( () => Test.post( "/view/read" )
			.then( function( response ) {
				response.should.have.value( "statusCode", 404 );
				response.should.be.html();
				response.text.should.be.String().and.match( /\bnot\s+found\b/i ).and.match( /<html\b/i );
			} ) );
	} );
} );


suite( "Serving empty project a request accepting text", function() {
	suiteSetup( () => Test.startServer( Hitchy ) );
	suiteTeardown( () => Hitchy.stop() );

	test( "misses GETting /", function() {
		return Hitchy.onStarted.then( () => Test.get( "/", undefined, { accept: "text/plain" } )
			.then( function( response ) {
				response.should.have.value( "statusCode", 404 );
				response.should.have.contentType( "text/plain" );
				response.text.should.be.String().and.match( /\bnot\s+found\b/i ).and.not.match( /<html\b/i );
			} ) );
	} );

	test( "misses POSTing /", function() {
		return Hitchy.onStarted.then( () => Test.post( "/", undefined, { accept: "text/plain" } )
			.then( function( response ) {
				response.should.have.value( "statusCode", 404 );
				response.should.have.contentType( "text/plain" );
				response.text.should.be.String().and.match( /\bnot\s+found\b/i ).and.not.match( /<html\b/i );
			} ) );
	} );

	test( "misses GETting /view", function() {
		return Hitchy.onStarted.then( () => Test.get( "/view", undefined, { accept: "text/plain" } )
			.then( function( response ) {
				response.should.have.value( "statusCode", 404 );
				response.should.have.contentType( "text/plain" );
				response.text.should.be.String().and.match( /\bnot\s+found\b/i ).and.not.match( /<html\b/i );
			} ) );
	} );

	test( "misses POSTing /view", function() {
		return Hitchy.onStarted.then( () => Test.post( "/view", undefined, { accept: "text/plain" } )
			.then( function( response ) {
				response.should.have.value( "statusCode", 404 );
				response.should.have.contentType( "text/plain" );
				response.text.should.be.String().and.match( /\bnot\s+found\b/i ).and.not.match( /<html\b/i );
			} ) );
	} );

	test( "misses GETting /view/read", function() {
		return Hitchy.onStarted.then( () => Test.get( "/view/read", undefined, { accept: "text/plain" } )
			.then( function( response ) {
				response.should.have.value( "statusCode", 404 );
				response.should.have.contentType( "text/plain" );
				response.text.should.be.String().and.match( /\bnot\s+found\b/i ).and.not.match( /<html\b/i );
			} ) );
	} );

	test( "misses POSTing /view/read", function() {
		return Hitchy.onStarted.then( () => Test.post( "/view/read", undefined, { accept: "text/plain" } )
			.then( function( response ) {
				response.should.have.value( "statusCode", 404 );
				response.should.have.contentType( "text/plain" );
				response.text.should.be.String().and.match( /\bnot\s+found\b/i ).and.not.match( /<html\b/i );
			} ) );
	} );
} );

suite( "Serving empty project a request accepting JSON", function() {
	suiteSetup( () => Test.startServer( Hitchy ) );
	suiteTeardown( () => Hitchy.stop() );

	test( "misses GETting /", function() {
		return Hitchy.onStarted.then( () => Test.get( "/", undefined, { accept: "application/json" } )
			.then( function( response ) {
				response.should.have.value( "statusCode", 404 );
				response.should.be.json();
				response.should.not.have.property( "text" );
				response.data.should.have.property( "error" );
				response.data.error.should.be.String().and.match( /\bnot\s+found\b/i ).and.not.match( /<html\b/i );
				response.data.should.have.property( "code" );
			} ) );
	} );

	test( "misses POSTing /", function() {
		return Hitchy.onStarted.then( () => Test.post( "/", undefined, { accept: "application/json" } )
			.then( function( response ) {
				response.should.have.value( "statusCode", 404 );
				response.should.be.json();
				response.should.not.have.property( "text" );
				response.data.should.have.property( "error" );
				response.data.error.should.be.String().and.match( /\bnot\s+found\b/i ).and.not.match( /<html\b/i );
				response.data.should.have.property( "code" );
			} ) );
	} );

	test( "misses GETting /view", function() {
		return Hitchy.onStarted.then( () => Test.get( "/view", undefined, { accept: "application/json" } )
			.then( function( response ) {
				response.should.have.value( "statusCode", 404 );
				response.should.be.json();
				response.should.not.have.property( "text" );
				response.data.should.have.property( "error" );
				response.data.error.should.be.String().and.match( /\bnot\s+found\b/i ).and.not.match( /<html\b/i );
				response.data.should.have.property( "code" );
			} ) );
	} );

	test( "misses POSTing /view", function() {
		return Hitchy.onStarted.then( () => Test.post( "/view", undefined, { accept: "application/json" } )
			.then( function( response ) {
				response.should.have.value( "statusCode", 404 );
				response.should.be.json();
				response.should.not.have.property( "text" );
				response.data.should.have.property( "error" );
				response.data.error.should.be.String().and.match( /\bnot\s+found\b/i ).and.not.match( /<html\b/i );
				response.data.should.have.property( "code" );
			} ) );
	} );

	test( "misses GETting /view/read", function() {
		return Hitchy.onStarted.then( () => Test.get( "/view/read", undefined, { accept: "application/json" } )
			.then( function( response ) {
				response.should.have.value( "statusCode", 404 );
				response.should.be.json();
				response.should.not.have.property( "text" );
				response.data.should.have.property( "error" );
				response.data.error.should.be.String().and.match( /\bnot\s+found\b/i ).and.not.match( /<html\b/i );
				response.data.should.have.property( "code" );
			} ) );
	} );

	test( "misses POSTing /view/read", function() {
		return Hitchy.onStarted.then( () => Test.post( "/view/read", undefined, { accept: "application/json" } )
			.then( function( response ) {
				response.should.have.value( "statusCode", 404 );
				response.should.be.json();
				response.should.not.have.property( "text" );
				response.data.should.have.property( "error" );
				response.data.error.should.be.String().and.match( /\bnot\s+found\b/i ).and.not.match( /<html\b/i );
				response.data.should.have.property( "code" );
			} ) );
	} );
} );
