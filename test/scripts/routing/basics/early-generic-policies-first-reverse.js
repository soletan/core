"use strict";

let options = {
	projectFolder: "test/projects/routing-basics",
	scenario: "early-policies-sorting-specific-first",
	//debug: true,
};

const Test = require( "../../../../tools/index" ).test;
const Hitchy = require( "../../../../injector" ).node;

require( "should" );
require( "should-http" );

// ----------------------------------------------------------------------------

suite( "Serving project in basic-routing-core w/ declaring lists of policies with decreasing specificity", function() {
	const hitchy = Hitchy( options );
	let server = null;

	suiteSetup( () => Test.startServer( hitchy ).then( s => ( server = s ) ) );
	suiteTeardown( () => server && server.stop() );

	test( "passes policies in proper order from generic policies to specific ones", function() {
		return hitchy.onStarted.then( () => Test.get( "/prefix/check" )
			.then( function( response ) {
				response.should.have.status( 200 );
				response.should.be.json();
			} ) );
	} );
} );

// NOTE Can't add another suite this time for using scenarios for dynamically
//      switching configuration to suit different testing goals in a single project.