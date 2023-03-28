const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  // Find all tags
  // Include its associated Product data
  Tag.findAll({include: Product})
  .then((tagData) => {
    res.json(tagData)
  })
});

router.get('/:id', (req, res) => {
  // Find a single tag by its `id`
  // Include its associated Product data
  Tag.findByPk(req.params.id, {include: Product})
  .then((tagData) => {
    res.json(tagData)
    })
});

router.post('/', (req, res) => {
  // Create a new tag
  Tag.create(req.body)
  .then((newTag) => {
    res.json(newTag)
  }).catch((err) => {
    res.json(err)
  })
});

router.put('/:id', (req, res) => {
  // Update a tag's name by its `id` value
  Tag.update({
    tag_name: req.body.tag_name
  },
  {
    where: {
      id: req.params.id
    }
  })
  .then((updatedTag) => {
    res.json(updatedTag)
  })
  .catch((err) => {
    res.json(err)
  })
});

router.delete('/:id', (req, res) => {
  // Delete on tag by its `id` value
  Tag.destroy({
    where: {
      id: req.params.id
    }
  })
  .then((deletedTag) => {
    res.json(deletedTag)
  })
  .catch((err) => {
    res.json(err)
  })
});

module.exports = router;
