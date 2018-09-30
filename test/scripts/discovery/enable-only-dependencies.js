"use strict";

let options = {
	projectFolder: "test/projects/empty-extensions",
	dependencies: "important",
	//debug: true,
};

require( "should" );
require( "should-http" );

const Test = require( "../../../tools" ).test;
const Hitchy = require( "../../../injector" )[process.env.HITCHY_MODE || "node"]( options );

// ----------------------------------------------------------------------------

suite( "Serving project w/ empty components", function() {
	suiteSetup( () => Test.startServer( Hitchy ) );
	suiteTeardown( () => Hitchy.stop() );

	test( "enables only requested components", function() {
		return Hitchy.onStarted.then( () => Test.get( "/", undefined, { accept: "text/json" } )
			.then( function( response ) {
				response.should.have.status( 200 );
				response.should.be.json();

				response.data.should.not.have.property( "empty-a" );    // due to project lacking dependency list thus loading EVERY available component
				response.data.should.not.have.property( "aliased-b" );  // due to filling differently named role
				response.data.should.not.have.property( "b" );
				response.data.should.not.have.property( "final-c" );
				response.data.should.not.have.property( "strong-role" );// due to filling differently named role
				response.data.should.not.have.property( "weak-role" );  // due to filling differently named role
				response.data.should.have.property( "important" );      // role filled by either of the two
				response.data.should.not.have.property( "non-extension" );
			} ) );
	} );
} );