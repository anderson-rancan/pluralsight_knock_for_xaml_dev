/// <reference path="../scripts/typings/jquery/jquery.d.ts" />
/// <reference path="../scripts/typings/knockout/knockout.d.ts" />
var k4xaml;
(function (k4xaml) {
    var MainViewModel = (function () {
        function MainViewModel() {
            var _this = this;
            this.DisplayMessage = ko.observable("Hello developers");
            this.DisplayValue = ko.observable(true);
            this.FirstName = ko.observable("");
            this.LastName = ko.observable("");
            this.DisplayMessages = ko.observableArray([]);
            this.Sports = ko.observableArray([]);
            this.SelectedSport = ko.observable();
            this.FullName = ko.computed(function () {
                return _this.FirstName() + " " + _this.LastName();
            });
            this.DisplayMessages.push({ Message: 'Message 1' });
            this.DisplayMessages.push({ Message: 'Message 2' });
            this.DisplayMessages.push({ Message: 'Message 3' });
            this.DisplayMessages.push({ Message: 'Message 4' });
            this.Sports.push({ id: 1, Name: 'Baseball' });
            this.Sports.push({ id: 2, Name: 'Football' });
            this.Sports.push({ id: 3, Name: 'Basketball' });
            this.Sports.push({ id: 4, Name: 'Soccer' });
        }
        return MainViewModel;
    }());
    k4xaml.MainViewModel = MainViewModel;
})(k4xaml || (k4xaml = {}));
//# sourceMappingURL=MainViewModel.js.map