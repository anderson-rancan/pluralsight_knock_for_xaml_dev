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

        public Sports: KnockoutObservableArray<any> = ko.observableArray([]);
        public SelectedSport: KnockoutObservable<any> = ko.observable();

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
        }
    }
}