module.exports = (app) => {
  const data = require("../Controller/Controller");

  app.post("/register", data.create);
  app.post("/post", data.create);
  app.get("/findAll", data.findAll);
  app.put("/diaryUpdate/:id", data.update);
  app.get("/postDate/:date", data.findOne);
  app.get("/Diary/:id", data.findOne);
};
