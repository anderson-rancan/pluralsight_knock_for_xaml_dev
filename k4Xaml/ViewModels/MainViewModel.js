/// <reference path="../scripts/typings/jquery/jquery.d.ts" />
/// <reference path="../scripts/typings/knockout/knockout.d.ts" />
var k4xaml;
(function (k4xaml) {
    var MainViewModel = (function () {
        function MainViewModel() {
            this.DisplayMessage = ko.observable("Hello developers");
        }
        return MainViewModel;
    }());
    k4xaml.MainViewModel = MainViewModel;
})(k4xaml || (k4xaml = {}));
//# sourceMappingURL=MainViewModel.js.map