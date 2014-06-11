angular.module('app').factory('mvCourseModificator', function (mvCourse, mvCourseAppl, $q, mvUser, mvIdentity, $http) {
  return {
    createCourse: function (newCourseData) {
      var newCourse = new mvCourse(newCourseData);
      console.log("newCourse coz je angularresourse: " + JSON.stringify(newCourse));
      var dfd = $q.defer();
      newCourse.$save().then(function () {
        dfd.resolve();
      }, function (response) {
        dfd.reject(response.data.reason);
      });
      return dfd.promise;
    },

    signToCourse: function (courseApplData) {
      var dfd = $q.defer();


      // create courseappl $save
      // update user push to array courseappl $update
      // update course push to array courseappl $update

      var newCourseAppl = new mvCourseAppl({userId: courseApplData.user._id, courseId: courseApplData.course._id, signed: courseApplData.signed});
      var courseToEdit = courseApplData.course;

      console.log("courseApplData: " + JSON.stringify(courseApplData));

      newCourseAppl.$save().then(function (response) {
        courseToEdit.courseAppls.push(response._id);
//        var completeCourse = mvCourse(courseToEdit);

        /*
         logoutUser: function() {
         var dfd = $q.defer();
         $http.post('/logout', {logout:true}).then(function() {
         mvIdentity.currentUser = undefined;
         $route.reload();
         dfd.resolve();
         });
         return dfd.promise;
         },
         */

        $http.put('update-course', courseToEdit).success(function() {
          dfd.resolve();
        });

        //console.log("completeCourse coz je angularresourse: " + JSON.stringify(completeCourse));

//        completeCourse.$update(courseToEdit).then(function (response) {
          //dfd.resolve();
        }, function(response) {
          console.log("chyba v course update " + response.data.reason);
          dfd.reject(response.data.reason);
        });
      /*}, function (response) {
        console.log("chyba v courseAppl save " + response.data.reason);
        dfd.reject(response.data.reason);
      });*/
      return dfd.promise;

    }/*,

     deleteNote: function (id) {
     var newNote = new mvNote(id);
     console.log(newNote);
     var dfd = $q.defer();
     newNote.$delete(id).then(function () {
     dfd.resolve();
     }, function (response) {
     dfd.reject(response.data.reason);
     });
     return dfd.promise;
     },
     updateNote: function (note) {
     var newNote = new mvNote(note);
     console.log(newNote);
     var dfd = $q.defer();
     newNote.$update(note).then(function () {
     dfd.resolve();
     }, function (response) {
     dfd.reject(response.data.reason);
     });
     return dfd.promise;
     }*/
  };
});