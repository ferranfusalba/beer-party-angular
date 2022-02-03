# BeerPartyAngular

## Welcome
Welcome to Deale's Beer Party App! This SPA will guide you through the different beers that will be available at the party. Choose your favorite one and join us!

Okay, but first, let's explain how to execute the app and some details.

This app has been adapted from the same one made with Vue. You can find it [here](https://github.com/ferranfusalba/beer-party-vue).

## Install

First, do a `git clone` of this repo. Then, open the cloned folder on your terminal and run `npm install`. Wait a few seconds until it finishes. Next, run `ng serve` and open your browser on `localhost:4200`. Alternatively, you can visit `beer-party-angular.vercel.app`, but that's not the point.

## Navigation

The app has been designed as mobile-first. Although responsive, the desktop view is quite an adaptation of the mobile version, with the elements stretched and centered.

It has been built with Angular, configuring properly the `app-routing-module.ts` file to make this app as SPA. I also installed Bootstrap through npm (no CDN links). The app consists of two views:
- The first one, the home, lists all the different 25 beers, each one in a card with some info — name, tagline, thumbnail, and abv & ibu tags.
- The second view is the beer's details. All the data from the JSON reference has been placed in this view. Elements have been ordered, placed in different Bootstrap components (accordions, cards, tags, lists, sausage menu), and styled with background colors and fonts (downloaded from Google Fonts and installed locally). This view has the router path `/beer/:id`, where `id` is the id of every object of the JSON (aka, every beer's id). With differences from the Vue version, this Angular-made one does not have any popovers.

## Fetching data from API

I imported `HttpClientModule` on `app.module.ts`, and then used `HttpClient` on both `beer-list` and `beer-view` components to fetch and manage the data. I did also declare, on `beer-view-component.ts`, some different `id`s on the `constructor` to specifically manage the id on the different views, as I needed all of them to coincide (not starting the id with 0 and showing the first beer, for example). This same issue was addressed similarly on the Vue project.

## Components and Styles

The `beer-list-component.html` is similar to Vue's `Beers.vue`. Instead of `v-for` and `v-if`, it applies `*ngFor` and `*ngIf` to organize and distribute the data before showing it.

The `beer-view-component.html` is every beer's details page, also similar to Vue's `Beer.vue`. `*ngFor`s and `*ngIf`s have also been applied, although no componentization with props has been made like in Vue. Everything (including header) is in the component.

The visual structure of the app was made with Bootstrap and CSS. Only flexbox, margins, rows-columns and component structure (cards, accordion) have been declared in the classes of the html files. The CSS stylesheet serves the local fonts, colors, borders, text-aligns, images behavior, etc.

Cheers! 🍻

## Colophon

Beers API: [PunkAPI](https://api.punkapi.com/v2/beers)

---

### Original README
# BeerPartyAngular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.2.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
