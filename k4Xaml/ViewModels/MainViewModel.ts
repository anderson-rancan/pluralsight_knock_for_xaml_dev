/// <reference path="../scripts/typings/jquery/jquery.d.ts" />
/// <reference path="../scripts/typings/knockout/knockout.d.ts" />


module k4xaml {
    export class MainViewModel {
        public DisplayMessage: KnockoutObservable<string> = ko.observable("Hello developers");
        public DisplayValue: KnockoutObservable<boolean> = ko.observable(true);

        public FirstName: KnockoutObservable<string> = ko.observable("");
        public LastName: KnockoutObservable<string> = ko.observable("");
        public FullName: KnockoutComputed<string>

        public DisplayMessages: KnockoutObservableArray<any> = ko.observableArray([]);

        public FirstNameToSave: KnockoutObservable<string> = ko.observable("Anderson");
        public LastNameToSave: KnockoutObservable<string> = ko.observable("Rancan");
        public DisplayValueToSave: KnockoutObservable<string> = ko.observable("");

        public Sports: KnockoutObservableArray<any> = ko.observableArray([]);
        public SelectedSport: KnockoutObservable<any> = ko.observable();

        public Person: Person;

        constructor() {
            this.FullName = ko.computed(() => {
                return this.FirstName() + " " + this.LastName();
            })

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

        public Save(data) {
            data.DisplayValueToSave(data.FirstNameToSave() + " " + data.LastNameToSave());
        }

        public SavePerson() {
            console.log("Save person here");
        }
    }

    export class Person {
        public FirstName: KnockoutObservable<string> = ko.observable("");
        public LastName: KnockoutObservable<string> = ko.observable("");
        public Age: KnockoutObservable<number> = ko.observable(0);
        public Address: KnockoutObservableArray<any> = ko.observableArray([]);

        public DeleteAddress(address: Address) {
            var self = this;

            var newArray = ko.utils.arrayFilter(self.Address(), (item) => { return item != address; });
            self.Address(newArray);
        }

        public EditAddress(address: Address) {
            address.City(address.City() + " edited");
        }
    }

    export class Address {
        public Address: KnockoutObservable<string> = ko.observable("");
        public City: KnockoutObservable<string> = ko.observable("");
        public State: KnockoutObservable<string> = ko.observable("");
        public Zip: KnockoutObservable<string> = ko.observable("");
        public IsDeleted: KnockoutObservable<boolean> = ko.observable(false);
    }

}