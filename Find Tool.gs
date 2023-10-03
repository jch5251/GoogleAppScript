function search()
{
//Set-up  
  //Request Course ID
    var course_ID = 'xxxxx';

  //Request Search Term
    var searchText = 'xxxxx';

  //Get CourseInfo
    var courseTitle = canvasAPI('GET /api/v1/courses/:courseid',{':course_id' : course_ID});

//Announcements
  //*** Will build out later ***

// Assignments / Quizzes

  // List Assignments / Quizzes
    var assignments = canvasAPI('GET /api/v1/courses/:course_id/assignments',{':course_id' : course_ID});
    Logger.log("***Total Assignments / Quizzes in course: "+assignments.length);
    Logger.log("-----------------");

  // Search Assignments
    for( i=0; i<assignments.length; i++)
    {
      var specific_assignment = canvasAPI('GET /api/v1/courses/:course_id/assignments/:individual_assignment', {':course_id' : course_ID, ':individual_assignment' : assignments[i].id}, ['name', 'html_url', 'description']);
      var assignmentbody = specific_assignment.name + "---" + specific_assignment.html_url + "---" + specific_assignment.description;
      var t2 = assignmentbody.search(searchText);
      if(t2>-1)
      {
        Logger.log(assignments[i].name);
        Logger.log(assignments[i].html_url);
        Logger.log("-------------------");
    }

// Quiz Questions
  // List Quiz Questions
  // Search Quiz Questions
  //*** Will build out later ***

// Discussions

  // List Discussions
    var discussions = canvasAPI('GET /api/v1/courses/:course_id/discussion_topics/', {':course_id' : course_ID});
    Logger.log("***Total Discussions in course: " + discussions.length);
    Logger.log("--------------");

  // Search Discussions
    for(i=0, i<discussions.length; i++)
    {
      var specific_discussion = canvasAPI('GET /api/v1/courses/:course_id/discussion_topics/:individual_discussions', {':course_id' : course_ID, ':individual_discussions' : discussions[i].id}, ['title', 'html_url', 'message']);
      var discussionbody = specific_discussion.title + "---" + specific_discussion.html_url + "---" + specific_discussion.message;

      var t2 = discussionbody.search(searchText);
      if(t2>-1)
      {
        Logger.log(discussions[i].title);
        Logger.log(discussions[i].url);
        Logger.log("----------------");
      }
    }

// Pages

  // List Pages
    var pages = canvasAPI('GET /api/v1/courses/:course_id/pages/', {':course_id' : course_ID});
    Logger.log("***Total Pages in course: " + pages.length);
    Logger.log("---------------");

  // Search course pages
    for(i = 0; i < pages.length; i++)
    {
      var specific_page = canvasAPI('GET /api/v1/courses/:course_id/pages/:individual_page', {':course_id' : course_ID, ':individual_page' : pages[i].url});
      var pagebody = specific_page.title + "---" + specific_page.html_url + "---" + specific_page.body;

      var t2 = pagebody.search(searchText);
      if(t2 > -1)
      {
        Logger.log(pages[i].title);
        Logger.log(pages[i].html_url);
        Logger.log("---------------");
      }
    }

Logger.log("Complete");
