function skillsMember() {
  return {
    restrict: 'E',
    templateUrl: 'app/members/skills.html',
    scope: {
      member: '='
    }
  };
}