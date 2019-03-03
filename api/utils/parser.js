const errorCodes = [400, 401, 403, 404, 500];

class Parser {
  /**
   * A wrapper function that accepts 2 arguments
   * @param {*} status
   * @param {*} data
   * The statusCode is checked first and if it is an error code,
   * an object with status and error is returned.
   * Else, an object with the status and data is returned.
   */
  static parseResponse(status, data) {
    if (errorCodes.includes(status)) {
      return {
        status,
        error: data,
      };
    }
    return {
      status,
      data,
    };
  }


  /**
   *
   * @param {*} errors
   */
  static errorHandler(errors) {
    let errorMessage = '';

    // check if the error is not an array
    if (typeof (errors) !== 'object' && !Array.isArray(errors)) return errors;

    // error is an array, so we
    errors.forEach((item) => {
      errorMessage += ` ${(item.msg || '')} |`;
    });

    return errorMessage;
  }
}

export default Parser;
