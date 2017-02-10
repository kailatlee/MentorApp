
/*
 * GET home page.
 */

exports.view = function(req, res){
  res.render('index', {
    'projects': [
      { 'name': 'Hometown - St. Paul, MN',
        'image': 'imgres.jpg',
        'id': 'project1'
      },
      { 'name': 'School - UCSD',
        'image': 'images.png',
        'id': 'project2'
      },
      { 'name': 'Favorite Dog - Golden Doodle',
        'image': 'imgres-1.jpg',
        'id': 'project3'
      },
      { 'name': 'Favorite Sport - Soccer',
        'image': 'imgres-2.jpg',
        'id': 'project4'
      },
      { 'name': 'Favorite Food - Mac n Cheese',
        'image': 'imgres-3.jpg',
        'id': 'project5'
      },
      { 'name': 'Favorite Person - Ellen',
        'image': 'imgres-4.jpg',
        'id': 'project6'
      },
      { 'name': 'Favorite Store - Target',
        'image': 'imgres.png',
        'id': 'project7'
      },
      { 'name': 'Favorite Color - Purple',
        'image': 'imgres-5.jpg',
        'id': 'project8'
      }
    ]  
  });
};