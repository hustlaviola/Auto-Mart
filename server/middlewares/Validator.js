import ErrorHandler from '../utils/ErrorHandler';
import Helper from '../utils/Helper';
import cars from '../models/carModel';
import orders from '../models/orderModel';

/**
 * @class Validator
 * @description Validates credentials
 * @exports Validator
 */
class Validator {
  /**
  * @method validateId
  * @description Check if id is valid
  * @static
  * @param {object} req - The request object
  * @param {object} res - The response object
  * @param {object} next
  * @returns {object} next
  * @memberof CarValidator
  */
  static validateId(req, res, next) {
    const regEx = Helper.regEx();
    const id = Number(req.params.id);
    let err;

    if (Number.isNaN(id)) err = 'Invalid Id, Please input a number';
    else if (!regEx.id.test(id)) err = 'Invalid id format';

    if (err) return ErrorHandler.validationError(res, 400, err);
    const type = req.url.split('/')[1];

    if (type === 'order') {
      const order = orders
        .find(purchase => purchase.id === parseInt(req.params.id, 10));
      if (!order) return ErrorHandler.validationError(res, 404, 'Order record not found');
      return next();
    }

    if (type === 'car') {
      const car = cars
        .find(carItem => carItem.id === parseInt(req.params.id, 10));
      if (!car) return ErrorHandler.validationError(res, 404, 'Car record not found');
      return next();
    }
    return next();
  }

  /**
  * @method validatePrice
  * @description Check if car price is valid
  * @static
  * @param {object} req - The request object
  * @param {object} res - The response object
  * @param {object} next
  * @returns {object} next
  * @memberof OrderValidator
  */
  static validatePrice(req, res, next) {
    const regEx = Helper.regEx();
    const { amount } = req.body;
    let err;

    if (!amount) err = 'amount field cannot be empty';
    else if (!regEx.price.test(amount)) err = 'invalid amount format';

    if (err) return ErrorHandler.validationError(res, 400, err);

    const type = req.url.split('/')[1];

    if (type === 'order') {
      const order = orders
        .find(purchase => purchase.id === parseInt(req.params.id, 10));
      if (!order) return ErrorHandler.validationError(res, 404, 'Order record not found');
      if (order.status !== 'pending') {
        return ErrorHandler.validationError(res, 400, 'Only pending offers can be updated');
      }
      return next();
    }

    if (type === 'car') {
      const car = cars
        .find(carItem => carItem.id === parseInt(req.params.id, 10));
      if (!car) return ErrorHandler.validationError(res, 404, 'Car record not found');
      return next();
    }
  }

  /**
  * @method validateStatus
  * @description Check if id is valid
  * @static
  * @param {object} req - The request object
  * @param {object} res - The response object
  * @param {object} next
  * @returns {object} next
  * @memberof CarValidator
  */
  static validateQuery(req, res, next) {
    const { status } = req.query;
    const minPrice = Number(req.query.min_price);
    const maxPrice = Number(req.query.max_price);
    if (!status) {
      if (req.query.min_price || req.query.max_price) {
        return ErrorHandler.validationError(res, 400, 'query \'status\' must be provided');
      } return next();
    }
    if (status !== 'available') {
      return ErrorHandler.validationError(res, 400, 'status must be \'available\'');
    }
    let err;
    if (minPrice || maxPrice) {
      if (!req.query.min_price) err = 'query \'min_price\' must be provided';
      else if (Number.isNaN(minPrice)) err = 'min_price must be a number';
      else if (!req.query.max_price) err = 'query \'max_price\' must be provided';
      else if (Number.isNaN(maxPrice)) err = 'max_price must be a number';
      else if (maxPrice <= minPrice) err = 'max_price must be greater than min_price';
      if (err) {
        return ErrorHandler.validationError(res, 400, err);
      }
    }
    return next();
  }
}

export default Validator;