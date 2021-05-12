const router = require('express').Router();
const mongojs = require('mongojs');

router.get('/', async (req, res) => {
  try {
    // // Get all projects and JOIN with user data
    // const projectsData = await Project.findAll({
    //   include: [
    //     {
    //       model: User,
    //       attributes: ['name', 'freelancer'],
    //     },
    //   ],
    // });
    // // Serialize data so the template can read it
    // const projects = projectsData.map((project) => project.get({ plain: true }));

    // // Pass serialized data and session flag into template
    res.render('homepage', { 
    //   projects, 
      name: req.session.name,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});