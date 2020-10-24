// Path Information for Routes
var path = require("path");

// Export Function
module.exports = function(app) {
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });
};