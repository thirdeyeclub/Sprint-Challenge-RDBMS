const express = require('express');
const pro_ex = require('../database/projectsext')
const db = require('../database/config00');
const knex = require('knex')


const router = express.Router();
router.use(express.json());

router.get('/', (req, res) => {
pro_ex.getProjects()
    .then(data => {
    res.status(200).json(data)
    })
    .catch(err => {
    res.status(500).json(err)
    })
})

router.get('/:id', (req, res) => {
const { id } = req.params;

db('projects')
.where('project_id', '=', id)
.then(project => {
        if (project.length === 0) {
            res.status(401).json({ 
            message:'id does not exist.' 
            });
            return;
        }

        db('actions')
        .where('project_id', '=', id)
        .then(actions => {
            project[0].actions = actions;
            res.status(200).json(project);
        })
        .catch(err => {
            res.status(500).json(err);
        })
    })
    .catch(err => {
        res.status(500).json(err)
})
});

router.post('/', (req, res) => {
const { project_name, description } = req.body
if (!project_name || !description) {
    res.status(404).json({
    message: "need name and description"
    })
} else {
    pro_ex.insertProject(req.body)
    .then(data => {
        res.status(200).json(data)
    })
    .catch(error => {
        res.status(500).json(error)
    })
}
})

module.exports = router;