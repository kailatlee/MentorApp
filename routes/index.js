
/*
 * GET home page.
 */

exports.view = function(req, res){
  res.render('index', {
    'projects': [
      { 'name': 'John Doe',
        'image': 'head.jpg',
        'id': 'project1'
      },
      { 'name': 'Jane Doe',
        'image': 'head.jpg',
        'id': 'project2'
      },
      { 'name': 'Kaila Lee',
        'image': 'head.jpg',
        'id': 'project3'
      },
      { 'name': 'Jenn Chan',
        'image': 'head.jpg',
        'id': 'project4'
      },
      { 'name': 'Julia Connly',
        'image': 'head.jpg',
        'id': 'project5'
      },
      { 'name': 'Kobe Bryant',
        'image': 'head.jpg',
        'id': 'project6'
      },
      { 'name': 'Ellen Degeneres',
        'image': 'head.jpg',
        'id': 'project7'
      },
      { 'name': 'Steph Curry',
        'image': 'head.jpg',
        'id': 'project8'
      }
    ]  
  });
};