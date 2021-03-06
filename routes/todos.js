const express = require('express');
const router = express.Router();
const Todo = require('../models/Todo');

router.get('/', (req, res, next) => {

    Todo
        .find()
        .then(resp => {
            res.json(resp)
        })
        .catch(error => {
            res.json({
                message: error
            })
        })
});

router.post('/', (req, res) => {
    console.log("req", req.body);

    const newTodo = new Todo({
        description: req.body.description,
        completed: req.body.completed
    });

    newTodo
        .save()
        .then(data => {
            res.json(data);
        })
        .catch(err => res.json({err: err.message}))
})

//find by id
router.get('/:postId', async (req, res) => {
    try {
        const todo = await Todo.findById(req.params.postId);
        if (!todo)
            res.status(404).send("No item found")
        res.status(200).send()
    } catch (error) {
        res.json({message: error.message})
    }
});

//delete
router.delete('/:postId', async (req, res) => {
    try {
        const todo = await Todo.findByIdAndDelete(req.params.postId);
        res.json(todo);
    } catch (error) {
        res.json({message: error.message})
    }
});


//update
router.patch('/:postId', async (req, res) => {
    try {
        const updatedTodo = await Todo.updateOne(
            {
                _id: req.params.postId
            }, {
                $set: {
                    description: req.body.description,
                    completed: req.body.completed,
                    dueDate: req.body.dueDate,
                }
            });

        res.json(updatedTodo);
    } catch (error) {
        res.json({message: error.message})
    }
});


module.exports = router;
