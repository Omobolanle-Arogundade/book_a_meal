const errorCodes = [400, 401, 403, 500];

class Parser {
  static customParser(status, data) {
    if (errorCodes.indexOf(status) >= 0) {
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

  static errorParser(errors) {
    let errorMsg = '';

    if (!Array.isArray(errors)) return errorMsg;

    errors.forEach((item) => {
      errorMsg += ` ${(item.msg || '')} |`;
    });
    return errorMsg;
  }
}

export default Parser;
