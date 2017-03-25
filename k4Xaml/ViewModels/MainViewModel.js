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
            this.FirstNameToSave = ko.observable("Anderson");
            this.LastNameToSave = ko.observable("Rancan");
            this.DisplayValueToSave = ko.observable("");
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
            this.Person = new Person();
            this.Person.FirstName("Indiana");
            this.Person.LastName("Jones");
            this.Person.Age(35);
            var address = new Address();
            address.Address("123 Main");
            address.City("SomeCity");
            address.State("NC");
            address.Zip("12345");
            this.Person.Address.push(address);
            var address = new Address();
            address.Address("124 River bend");
            address.City("AnotherCity");
            address.State("NC");
            address.Zip("23233");
            address.IsDeleted(true);
            this.Person.Address.push(address);
            var address = new Address();
            address.Address("127 Mountain");
            address.City("SmallCity");
            address.State("NC");
            address.Zip("556");
            this.Person.Address.push(address);
        }
        MainViewModel.prototype.Save = function (data) {
            data.DisplayValueToSave(data.FirstNameToSave() + " " + data.LastNameToSave());
        };
        MainViewModel.prototype.SavePerson = function () {
            console.log("Save person here");
        };
        return MainViewModel;
    }());
    k4xaml.MainViewModel = MainViewModel;
    var Person = (function () {
        function Person() {
            this.FirstName = ko.observable("");
            this.LastName = ko.observable("");
            this.Age = ko.observable(0);
            this.Address = ko.observableArray([]);
        }
        Person.prototype.DeleteAddress = function (address) {
            var self = this;
            var newArray = ko.utils.arrayFilter(self.Address(), function (item) { return item != address; });
            self.Address(newArray);
        };
        Person.prototype.EditAddress = function (address) {
            address.City(address.City() + " edited");
        };
        return Person;
    }());
    k4xaml.Person = Person;
    var Address = (function () {
        function Address() {
            this.Address = ko.observable("");
            this.City = ko.observable("");
            this.State = ko.observable("");
            this.Zip = ko.observable("");
            this.IsDeleted = ko.observable(false);
        }
        return Address;
    }());
    k4xaml.Address = Address;
})(k4xaml || (k4xaml = {}));
//# sourceMappingURL=MainViewModel.js.map