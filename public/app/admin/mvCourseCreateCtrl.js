angular.module('app').controller('mvCourseCreateCtrl', function ($scope, msNotifier, $route, mvCourseModificator) {
  $scope.createNewCourse = function () {

    var featured;
    if ($scope.featured == undefined) {
      featured = false;
    } else {
      featured=true;
    }

    var newCourseData = {
      title: $scope.title,
      featured: featured,
      published: $scope.published,
      tags: $scope.tags
    };

    console.log(newCourseData);

    mvCourseModificator.createCourse(newCourseData).then(function () {
      msNotifier.notify('Course created!');
    }, function (reason) {
      msNotifier.error(reason);
    });


    $route.reload();

    //Object {title: "aaa", featured: false, published: "2014-02-22", tags: "aa dd"}
    //date preformatnout z yyyy-MM-dd na MM-dd-yyyy zkusit s timhle puvodnim prvne
    //tags splitnout po pomlckach a trimnout a napushovat do pole
    //nezapominat pridavat skripty!!!11
    //inject mVcurse a volat neco jako createCourse

//
  };

  $scope.cleanInputs = function () {
//        $scope.noteName = '';
//        $scope.noteContent = '';
  };
});

// {"title": "aaaCplusplus for advanced", "featured": "true", "published": "11/20/2013", "tags": ["C#"]}