const db = require('./config00');
const knex = require('knex')

module.exports = {
  insertProject,
  getProjects,
  getProject
}

function insertProject(project) {
  return db('projects')
    .insert(project)
}

function getProjects() {
  return db('projects')
}

function getProject(id) {
  db('projects')
      .where('id', '=', id)
      .then(data => {
          if (project.length === 0) {
              res.status(401).json(data);
              return;
          }

          db('actions')
            .where('id', '=', id)
            .then(actions => {
                project[0].actions = actions;
                res.status(200).json(project);
            })
      })

}