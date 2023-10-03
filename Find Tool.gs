function search()
{
  
  //Request Course ID
    var course_ID = 'xxxxx';

  //Request Search Term
    var searchText = 'xxxxx';

  //Get CourseInfo
    var courseTitle = canvasAPI('GET /api/v1/courses/:courseid',{':course_id' : course_ID});


    
