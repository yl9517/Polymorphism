const stateService = require("../service/createStatementData");
const invoices = require("../data/invoices.json");
const plays = require("../data/plays.json");

exports.setStatement = () => {
  let result = stateService.createStatementData(invoices, plays);
  console.log(result);

  return res.status(200).json({
    status: 200,
    success: true,
    message: "OK",
  });
};
