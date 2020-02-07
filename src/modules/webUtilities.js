const queryFieldsToString = function(queryFields) {
  let queryString = '';
  let firstField = true;

  if (!queryFields || !Object.keys(queryFields)) return;

  Object.keys(queryFields).forEach((key) => {
    if (queryFields[key]) {
      (firstField) ? firstField = false : queryString += '&';
      queryString += `${key}=${queryFields[key]}`;
    }
  });
  
  
  return queryString;
}

exports.queryFieldsToString = queryFieldsToString;