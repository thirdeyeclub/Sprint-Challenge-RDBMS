const express = require('express');
const act_ex = require('../database/actionsext.js')
const router = express.Router();
router.use(express.json());

router.get('/api/actions', (req, res) => {
act_ex.getActions()
    .then(data => {
    res.status(200).json(data)
    })
    .catch(err => {
    res.status(500).json(err)
    })
})

router.get('/api/actions/:id', (req, res) => {
const { id } = req.params;
act_ex.getAction(id)
    .then(data => {
    res.status(200).json(data)
    })
    .catch(err => {
    res.status(500).json(err)
    })
});

router.post('/api/actions', (req, res) => {
const { description, project_id } = req.body
if (!description || !project_id) {
    res.status(404).json({
    message: "need name and description"
    })
} else {
    act_ex.insertAction(req.body)
    .then(data => {
        res.status(200).json(data)
    })
    .catch(err => {
        res.status(500).json(err)
    })
}
})

module.exports = router;