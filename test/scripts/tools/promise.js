"use strict";

const Should = require( "should" );

const PromiseUtil = require( "../../../tools" ).promise;

// ----------------------------------------------------------------------------

suite( "Promise Utilities", function() {
	let input;

	setup( function() {
		input = [
			"*", "-",
			new Promise( function( resolve ) { setTimeout( resolve, 20, "+" ); } ),
			"#", "=", "%", ":"
		];
	} );

	test( "support sequential, probably delayed iteration using each()", function() {
		let output = [];

		return PromiseUtil
			.each( input, function( value, index, items ) {
				Should( index ).be.within( 0, 6 );
				items.should.be.Array();
				items.should.have.length( 7 );

				if ( index % 2 == 0 ) {
					// return instantly
					return output.push( value.repeat( index ) );
				}

				// return after some delay
				return new Promise( resolve => setTimeout( resolve, 20 ) )
					.then( () => output.push( value.repeat( index ) ) );
			} )
			.then( function( result ) {
				// each() is passing initially provided array
				result.should.be.Array();
				result.should.have.length( 7 );
				result.should.be.eql( input );

				// each() is awaiting delayed results of callback
				output.join( "," ).should.be.eql( ",-,++,###,====,%%%%%,::::::" );
			} );
	} );

	test( "support sequential, probably delayed filtering of array using each()", function() {
		return PromiseUtil
			.filter( input, function( value, index, items ) {
				Should( index ).be.within( 0, 6 );
				items.should.be.Array();
				items.should.have.length( 7 );

				if ( index % 2 == 0 ) {
					// return instantly
					return index % 3 != 0;
				}

				// return after some delay
				return new Promise( resolve => setTimeout( resolve, 20 ) )
					.then( () => index % 3 != 0 );
			} )
			.then( function( result ) {
				// filter() is providing reduced set of input values
				result.should.be.Array();
				result.should.have.length( 4 );
				result.should.not.be.eql( input );

				// filter() is keeping original order of items
				result[0].should.be.eql( "-" );
				result[1].should.be.instanceof( Promise );
				result[2].should.be.eql( "=" );
				result[3].should.be.eql( "%" );
			} );
	} );

	test( "support sequential, probably delayed mapping of array using map()", function() {
		return PromiseUtil
			.map( input, function( value, index, items ) {
				Should( index ).be.within( 0, 6 );
				items.should.be.Array();
				items.should.have.length( 7 );

				if ( index % 2 == 0 ) {
					// return instantly
					return value.repeat( index );
				}

				// return after some delay
				return new Promise( resolve => setTimeout( resolve, 20 ) )
					.then( () => value.repeat( index ) );
			} )
			.then( function( result ) {
				// map() is providing set of values different from input though matching its size
				result.should.be.Array();
				result.should.have.length( 7 );
				result.should.not.be.eql( input );

				// map() is keeping original order of items
				result.should.be.eql( [ "", "-", "++", "###", "====", "%%%%%", "::::::" ] );
			} );
	} );

	test( "support sequential, probably delayed mapping of array using multiMap()", function() {
		return PromiseUtil
			.multiMap( input, function( value, index, items ) {
				Should( index ).be.within( 0, 6 );
				items.should.be.Array();
				items.should.have.length( 7 );

				if ( index % 2 == 0 ) {
					// return instantly
					return value.repeat( index );
				}

				// return after some delay
				return new Promise( resolve => setTimeout( resolve, 20 ) )
					.then( () => value.repeat( index ) );
			} )
			.then( function( result ) {
				// map() is providing set of values different from input though matching its size
				result.should.be.Array();
				result.should.have.length( 7 );
				result.should.not.be.eql( input );

				// map() is keeping original order of items
				result.should.be.eql( [ "", "-", "++", "###", "====", "%%%%%", "::::::" ] );
			} );
	} );

	test( "map faster on using multiMap() than on using map()", function() {
		let rank = 1;

		return Promise.all( [
			PromiseUtil.map( input, fastMapper ).then( () => rank++ ),
			PromiseUtil.multiMap( input, slowMapper ).then( () => rank++ )
			] )
			.then( function( [ mapped, multiMapped ] ) {
				Should( mapped ).be.exactly( 2 );
				Should( multiMapped ).be.exactly( 1 );
			} );

		function fastMapper( item ) {
			return new Promise( resolve => setTimeout( resolve, 20 ) );
		}

		function slowMapper( item ) {
			return new Promise( resolve => setTimeout( resolve, 40 ) );
		}
	} );

	test( "support sequential, probably delayed search for value", function() {
		let sum = 0;

		return PromiseUtil
			.find( input, function( value, index, items ) {
				Should( index ).be.within( 0, 6 );
				items.should.be.Array();
				items.should.have.length( 7 );

				sum += index;

				if ( index % 2 == 0 ) {
					// return instantly
					return value === "%";
				}

				// return after some delay
				return new Promise( resolve => setTimeout( resolve, 20 ) )
					.then( () => value === "%" );
			} )
			.then( function( result ) {
				// find() is providing found value
				result.should.be.String().and.be.equal( "%" );
				Should( sum ).be.equal( 15 );
			} );
	} );

	test( "support sequential, probably delayed search for value in reverse order", function() {
		let sum = 0;

		return PromiseUtil
			.find( input, function( value, index, items ) {
				Should( index ).be.within( 0, 6 );
				items.should.be.Array();
				items.should.have.length( 7 );

				sum += index;

				if ( index % 2 == 0 ) {
					// return instantly
					return value === "%";
				}

				// return after some delay
				return new Promise( resolve => setTimeout( resolve, 20 ) )
					.then( () => value === "%" );
			}, true )
			.then( function( result ) {
				// find() is providing found value
				result.should.be.String().and.be.equal( "%" );
				Should( sum ).be.equal( 11 );
			} );
	} );

	test( "provide null on failed sequential, probably delayed search for value", function() {
		let sum = 0;

		return PromiseUtil
			.find( input, function( value, index, items ) {
				Should( index ).be.within( 0, 6 );
				items.should.be.Array();
				items.should.have.length( 7 );

				sum += index;

				if ( index % 2 == 0 ) {
					// return instantly
					return value === "something missing";
				}

				// return after some delay
				return new Promise( resolve => setTimeout( resolve, 20 ) )
					.then( () => value === "something missing" );
			} )
			.then( function( result ) {
				// find() is providing found value
				Should( result ).be.null();
				Should( sum ).be.equal( 21 );
			} );
	} );

	test( "provide null on failed sequential, probably delayed search for value in reverse order", function() {
		let sum = 0;

		return PromiseUtil
			.find( input, function( value, index, items ) {
				Should( index ).be.within( 0, 6 );
				items.should.be.Array();
				items.should.have.length( 7 );

				sum += index;

				if ( index % 2 == 0 ) {
					// return instantly
					return value === "something missing";
				}

				// return after some delay
				return new Promise( resolve => setTimeout( resolve, 20 ) )
					.then( () => value === "something missing" );
			}, true )
			.then( function( result ) {
				// find() is providing found value
				Should( result ).be.null();
				Should( sum ).be.equal( 21 );
			} );
	} );

	test( "support sequential, probably delayed search for index of a value", function() {
		let sum = 0;

		return PromiseUtil
			.indexOf( input, function( value, index, items ) {
				Should( index ).be.within( 0, 6 );
				items.should.be.Array();
				items.should.have.length( 7 );

				sum += index;

				if ( index % 2 == 0 ) {
					// return instantly
					return value === "%";
				}

				// return after some delay
				return new Promise( resolve => setTimeout( resolve, 20 ) )
					.then( () => value === "%" );
			} )
			.then( function( result ) {
				// find() is providing found value
				result.should.be.Number().and.be.equal( 5 );
				Should( sum ).be.equal( 15 );
			} );
	} );

	test( "support sequential, probably delayed search for index of a value in reverse order", function() {
		let sum = 0;

		return PromiseUtil
			.indexOf( input, function( value, index, items ) {
				Should( index ).be.within( 0, 6 );
				items.should.be.Array();
				items.should.have.length( 7 );

				sum += index;

				if ( index % 2 == 0 ) {
					// return instantly
					return value === "%";
				}

				// return after some delay
				return new Promise( resolve => setTimeout( resolve, 20 ) )
					.then( () => value === "%" );
			}, true )
			.then( function( result ) {
				// find() is providing found value
				result.should.be.Number().and.be.equal( 5 );
				Should( sum ).be.equal( 11 );
			} );
	} );

	test( "provide -1 on failed sequential, probably delayed search for index of a value", function() {
		let sum = 0;

		return PromiseUtil
			.indexOf( input, function( value, index, items ) {
				Should( index ).be.within( 0, 6 );
				items.should.be.Array();
				items.should.have.length( 7 );

				sum += index;

				if ( index % 2 == 0 ) {
					// return instantly
					return value === "something missing";
				}

				// return after some delay
				return new Promise( resolve => setTimeout( resolve, 20 ) )
					.then( () => value === "something missing" );
			} )
			.then( function( result ) {
				// find() is providing found value
				Should( result ).be.Number().and.be.equal( -1 );
				Should( sum ).be.equal( 21 );
			} );
	} );

	test( "provide null on failed sequential, probably delayed search for index of a value in reverse order", function() {
		let sum = 0;

		return PromiseUtil
			.indexOf( input, function( value, index, items ) {
				Should( index ).be.within( 0, 6 );
				items.should.be.Array();
				items.should.have.length( 7 );

				sum += index;

				if ( index % 2 == 0 ) {
					// return instantly
					return value === "something missing";
				}

				// return after some delay
				return new Promise( resolve => setTimeout( resolve, 20 ) )
					.then( () => value === "something missing" );
			}, true )
			.then( function( result ) {
				// find() is providing found value
				Should( result ).be.Number().and.be.equal( -1 );
				Should( sum ).be.equal( 21 );
			} );
	} );

	test( "create promise to conveniently delay processing", function() {
		let start = Date.now();

		return PromiseUtil.delay( 100 )
			.then( function() {
				let stop = Date.now();

				// find() is providing found value
				Should( stop - start ).be.approximately( 100, 30 );
			} );
	} );
} );
