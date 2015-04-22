newsRoster.factory('NewsFactory', function NewsFactory() {
    var factory = {};
    factory.pages = [];

    //push input info into courses
    factory.addPages = function() {
        var page = { name: factory.userName, webPage:factory.webPage, pageId:factory.pages.length + 1, comments:[] };
        //factory.courses.push({ name: factory.courseName, id: factory.courses.length + 1, students: [] });
        factory.pages.push(page);
        factory.userName = null;
        factory.webPage = null;
    };



    return factory;

});
