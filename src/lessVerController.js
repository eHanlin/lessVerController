
(function(localStorage,window){

  if ( localStorage ) {

    var VERSION = "_lessVerionController_",

    /**
    * clear localstorage for less
    */
    clearLessCache = function(){

      var len = localStorage.length,keys = [];

      for ( var i = 0; i < len ;i++ ){

        var key = localStorage.key( i );
        if ( /\.less(:timestamp)?$/.test( key ) ) {
          keys.push( key );
        }
      }

      for ( var index in keys ) {
        localStorage.removeItem( keys[index] );
      }

    },

    /**
    *
    */
    hasVersion = function(){
      return localStorage.getItem( VERSION ) ? true : false;
    },

    
    /**
    *
    */
    getVersion = function(){
      return localStorage.getItem( VERSION );
    },
    /**
    *
    */
    setVersion = function( ver ){
      localStorage.setItem( VERSION, ver );
    },

    /**
    * @params {String} ver
    */
    ver = function( ver ){
      if ( hasVersion() ) {
        var lastVer = getVersion();      
        if ( ver != lastVer ) clearLessCache();
      }

      setVersion( ver );
    };

    window.lessVerController = {ver:ver}

  } else {

    window.lessVerController = {ver:function(){}}
  }

})(window.localStorage,window);

