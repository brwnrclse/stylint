var normalized = 1;

// check for z-index values and recommend normalized ones
module.exports = function zIndexr( line ) {
    'use strict';
    if ( typeof line === 'undefined' ) {
        return;
    }

    // stip out whitespace from the arr
    // arr = arr.filter(function( str ) {
    //     return str.length > 0;
    // });

    if ( line.indexOf('z-index') !== -1 ) {
        return true;
        // console.log( 'this line has a z-index' );
        // console.log( line );
        // console.log( arr );
    }
    else {
        return false;
    }
    // else {
    //     return false;
    // }
}