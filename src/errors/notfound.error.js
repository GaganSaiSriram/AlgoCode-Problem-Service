const BaseError = require('./base.error');

const {StatusCodes} = require('http-status-codes');

class NotFound extends BaseError {
     constructor(resourceName,resoruceValue){
        super("NotFound",StatusCodes.NOT_FOUND,`The requested resource: ${resourceName} with value ${resoruceValue} not found`,{
            resourceName,
            resoruceValue
        });
     }
}

module.exports = NotFound;