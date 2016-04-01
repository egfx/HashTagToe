module.exports = function(){
	    
	    function isEmptyObject(obj) {
			  for(var prop in obj) {
			    if (Object.prototype.hasOwnProperty.call(obj, prop)) {
			      return false;
			    }
			  }
			  return true;
			}

	    var service = {
	          isEmptyObject: isEmptyObject 
	      	}
	    
	    return service;
};