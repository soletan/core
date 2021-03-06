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

const Path = require( "path" );
const OS = require( "os" );

const LibTools = require( "./library" );
const ObjectTools = require( "./object" );

/**
 * Helps with loading modules for testing purposes providing some mockup API as
 * part of common module pattern.
 *
 * @param {string=} projectFolder pathname to contain project, omit for temp folder of OS
 * @param {HitchyOptions=} options runtime options customizing Hitchy instance
 * @param {HitchyAPI=} apiOverlay custom API parts to mock instead of actual ones
 * @param {object<string,object>} modules selects modules to instantly load
 * @returns {Promise<(HitchyMockedModuleLoader|LoadedModules)>} promises prepared mockup of Hitchy API
 */
module.exports = function _apiMockUpGenerator( { projectFolder = OS.tmpdir(), options = {}, apiOverlay = {}, modules = {} } = {} ) {

	/**
	 * Selects folder containing Hitchy instance mocked-up API is used with.
	 *
	 * @type {string}
	 */
	const LocalHitchyFolder = Path.resolve( __dirname, ".." );

	/**
	 * Refers to mocked-up API.
	 *
	 * @type {HitchyAPI}
	 */
	const Api = LibTools.createAPI( options );

	/**
	 * Supports loading module of hitchy project providing fake options and API.
	 *
	 * @param {string} name relative pathname of hitchy module to load
	 * @param {array} moduleArguments arguments to pass in case module is support CMP pattern
	 * @returns {object} API of module
	 */
	function _apiMockUpLoader( name, moduleArguments = [] ) {
		const _options = {
			// always choose current hitchy framework instance to do the job
			hitchyFolder: LocalHitchyFolder,

			// choose optionally provided project folder or stick with temp
			// folder by default
			projectFolder,
		};

		const _api = require( Path.relative( __dirname, Path.resolve( _options.hitchyFolder, name ) ) );
		if ( typeof _api === "function" ) {
			return _api.apply( Api, [_options].concat( moduleArguments ) );
		}

		return _api;
	}

	Object.defineProperty( _apiMockUpLoader, "mockedApi", { value: Api } );

	Api.loader = _apiMockUpLoader;


	// load library of current hitchy instance
	return LibTools.load( Api, Path.resolve( LocalHitchyFolder, "lib" ) )
		.then( function() {
			// apply custom overlay provided by caller
			ObjectTools.deepMerge( Api, apiOverlay );

			// test if caller provided description of modules to load implicitly
			const targetNames = Object.keys( modules );
			const nameCount = targetNames.length;
			if ( nameCount > 0 ) {
				// got some list of modules to load -> load now
				const collector = {
					// provide reference on mocked-up API
					API: Api,
					// provide loader
					loader: _apiMockUpLoader,
				};

				// load every listed module and collect in that object using provided name
				for ( let i = 0; i < nameCount; i++ ) {
					const targetName = targetNames[i];
					const moduleName = modules[targetName];

					collector[targetName] = _apiMockUpLoader( moduleName );
				}

				return collector;
			}

			return _apiMockUpLoader;
		} );
};



/**
 * @typedef {object<string,object>} LoadedModules
 */

/**
 * @typedef {function(name:string):object} HitchyMockedModuleLoader
 */
