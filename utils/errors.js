let ExpressError = class extends Error{
    constructor(message, status){
        super();
        this.message = message
        this.status = status
    }
}

let BadRequestError = class extends ExpressError{
    constructor(message){
        super(message, 400);
        this.message = message == null ? "Bad request" : message
        this.status = 400
    }
}

let NotFoundError = class extends ExpressError{
    constructor(message){
        super(message ,404);
        this.message = message == null ? "Not found" : message
        this.status = 404
    }
}

module.exports.ExpressError = ExpressError;
module.exports.BadRequestError = BadRequestError;
module.exports.NotFoundError = NotFoundError;