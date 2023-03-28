const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // Find all categories
  // Include its associated Products
  Category.findAll({include: Product})
  .then((categoryData) => {
    res.json(categoryData)
  })
});

router.get('/:id', (req, res) => {
  // Find one category by its `id` value
  // Include its associated Products
  Category.findByPk(req.params.id, {include: Product})
  .then((categoryData) => {
    res.json(categoryData)
    })
  });

router.post('/', (req, res) => {
  // Create a new category
  Category.create(req.body)
  .then((newCategory) => {
    res.json(newCategory)
  }).catch((err) => {
    res.json(err)
  })
});

router.put('/:id', (req, res) => {
  // Update a category by its `id` value
  Category.update({
    category_name: req.body.category_name
  },
  {
    where: {
      id: req.params.id
    }
  })
  .then((updatedCategory) => {
    res.json(updatedCategory)
  })
  .catch((err) => {
    res.json(err)
  })
});

router.delete('/:id', (req, res) => {
  // Delete a category by its `id` value
  Category.destroy({
    where: {
      id: req.params.id
    }
  })
  .then((deletedCategory) => {
    res.json(deletedCategory)
  })
  .catch((err) => {
    res.json(err)
  })
});

module.exports = router;
