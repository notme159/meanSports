angular.module('app').controller('mvCourseCreateCtrl', function ($scope, mvNotifier) {
  $scope.createNewCourse = function () {
    var newCourseData = {
      title: $scope.title,
      featured: $scope.featured,
      published: $scope.published,
      tags: $scope.tags
    };

    console.log(newCourseData);
    //Object {title: "aaa", featured: false, published: "2014-02-22", tags: "aa dd"}
    //date preformatnout z yyyy-MM-dd na MM-dd-yyyy zkusit s timhle puvodnim prvne
    //tags splitnout po pomlckach a trimnout a napushovat do pole
    //nezapominat pridavat skripty!!!11
    //inject mVcurse a volat neco jako createCourse

//        mvNoteModificator.createNote(newNoteData).then(function () {
//            mvNotifier.notify('Note created!');
//        }, function (reason) {
//            mvNotifier.error(reason);
//        });
  };

  $scope.cleanInputs = function () {
//        $scope.noteName = '';
//        $scope.noteContent = '';
  };
});

// {"title": "aaaCplusplus for advanced", "featured": "true", "published": "11/20/2013", "tags": ["C#"]}