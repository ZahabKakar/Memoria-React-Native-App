const model = require("../Model/model");
const postModel = require("../Model/post");
const { RegisterValidation } = require("../Validation");
// regisyter
exports.create = (req, res) => {
  const { error } = RegisterValidation(req.body);
  if (error) {
    res.status(400).send(error.details[0].message);
    return;
  }

  const Data = new model({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  });

  Data.save()
    .then((data) => {
      res.send(data);
    })
    .catch((error) => {
      res.send(error);
    });
};

// post

exports.create = (req, res) => {
  const postData = new postModel({
    title: req.body.title,
    story: req.body.story,
    img: req.body.img,
    date: req.body.date,
  });

  postData
    .save()
    .then((data) => {
      res.send(data);
      console.log(data);
    })
    .catch((error) => {
      res.send(error);
    });
};

exports.findAll = (req, res) => {
  postModel
    .find()
    .then((data) => {
      res.send(data);
    })
    .catch((error) => {
      res.send(error);
    });
};

exports.findOne = (req, res) => {
  postModel
    // .findOne({
    //   data: req.body.data,
    // })
    // .then((data) => {
    //   res.send(data);
    // });

    .findById(req.params.id)
    .then((data) => {
      if (!data) {
        return res.status(404).send({
          message: "Message not found with id " + req.params.id,
        });
      }
      res.send(data);
    })
    .catch((error) => {
      if (error.kind === "ObjectId") {
        return res.status(404).send({
          message: "Message not found with id " + req.params.id,
        });
      }
      return res.status(500).send({
        message: "Error retrieving message with id " + req.params.id,
      });
    });
};

// update diary
exports.update = (req, res) => {
  postModel
    .findByIdAndUpdate(
      req.params.id,
      {
        date: req.body.date,
        title: req.body.title,
        story: req.body.story,
      },
      { new: true }
    )
    .then((data) => {
      if (!data) {
        return res.status(404).send({
          message: "Message not found with id " + req.params.id,
        });
      }
      res.send(data);
    })
    .catch((error) => {
      if (error.kind === "ObjectId") {
        return res.status(404).send({
          message: "Message not found with id " + req.params.id,
        });
      }
      res.send(error);
    });
};

// exports.delete = (req, res) => {
//   model
//     .findByIdAndRemove(req.params.id)
//     .then((data) => {
//       if (!data) {
//         return res.status(404).send({
//           message: "Message not found with id " + req.params.id,
//         });
//       }
//       res.send({ message: "Message deletes successfuly" });
//     })
//     .catch((error) => {
//       res.send(error);
//     });
// };
