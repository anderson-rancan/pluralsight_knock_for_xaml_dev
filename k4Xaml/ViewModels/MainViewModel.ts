/// <reference path="../scripts/typings/jquery/jquery.d.ts" />
/// <reference path="../scripts/typings/knockout/knockout.d.ts" />

module k4xaml {
    export class MainViewModel {
        public DisplayMessage: KnockoutObservable<string> = ko.observable("Hello developers");
    }
}