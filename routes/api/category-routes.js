const router = require("express").Router();
const { Category, Product } = require("../../models");

// The `/api/categories` endpoint

router.get("/", (req, res) => {
  // find all categories
  Category.findAll({
    attributes: ["category_name"],
    include: {
      model: Product,
      attributes: ["id", "product_name", "price", "stock", "category_id"],
    },
  })
    // be sure to include its associated Products
    .then((categoryData) => res.json(categoryData));
});

router.get("/:id", (req, res) => {
  // find one category by its `id` value
  Category.findOne({
    attributes: ["category_name"],
    include: {
      model: Product,
      attributes: ["id", "product_name", "price", "stock", "category_id"],
    },
  })
    // be sure to include its associated Products
    .then((categoryData) => res.json(categoryData));
});

router.post("/", (req, res) => {
  // create a new category
  Category.create({
    category_name: req.body.category_name,
  }).then((categoryData) => res.json(categoryData));
});

router.put("/:id", (req, res) => {
  // update a category by its `id` value
  Category.update(
    {
      category_name: req.body.category_name,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  ).then((categoryData) => res.json(categoryData));
});

router.delete("/:id", (req, res) => {
  // delete a category by its `id` value
  Category.destroy({
    where: {
      id: req.params.id,
    },
  }).then((categoryData) => {
    if (!categoryData) {
      res.status(404).json({ message: "No Category by that id" });
      return;
    }
    res.status(500).json(err);
  });
});

module.exports = router;
