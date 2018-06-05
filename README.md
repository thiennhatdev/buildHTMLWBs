

 ____________
< SangNguyen >
 ------------
        \   ^__^
         \  (oo)\_______
            (__)\       )\/\
                ||----w |
                ||     ||

## Overview

Web Starter Kit is an opinionated boilerplate for web development. Tools for building a great experience across many devices. A solid starting point for both professionals and newcomers to the industry.




## Browser Support

At present, we officially aim to support the last two versions of the following browsers:

* Chrome
* Edge
* Firefox
* Safari
* Internet Explorer

This is not to say that Web Starter Kit cannot be used in browsers older than those reflected, but merely that our focus will be on ensuring our layouts work great in the above.




You can start from `index.html` - the default starting point, with template text.

Be sure to look over the [installation](#install) to verify your environment is prepared to run Web Starter Kit.
Once you have verified that your system can run WSK, check out the [commands](#commands) available to get started.








## Prerequisites

### [Node.js](https://nodejs.org)

Bring up a terminal and type `node --version`.
Node should respond with a version at or above 4.0.x.
If you need to install Node, go to [nodejs.org](https://nodejs.org) and click on the big green Install button.

### [Gulp](http://gulpjs.com)

Bring up a terminal and type `gulp --version`.
If Gulp is installed it should return a version number at or above 3.9.x.
If you need to install/upgrade Gulp, open up a terminal and type in the following:

```sh
$ npm install --global gulp
```

*This will install Gulp globally. Depending on your user account, you may need to [configure your system](https://github.com/sindresorhus/guides/blob/master/npm-global-without-sudo.md) to install packages globally without administrative privileges.*


### Local dependencies

Next, install the local dependencies Web Starter Kit requires:

```sh
$ npm install
```

That's it! You should now have everything needed to use the Web Starter Kit.


You may also want to get used to some of the [commands](#commands) available.



## Commands

There are many commands available to help you build and test sites. Here are a few highlights to get started with.

### Watch For Changes & Automatically Refresh Across Devices

## Build & Optimize

```sh
$ gulp
```

Build and optimize the current project, ready for deployment.
This includes linting as well as image, script, stylesheet and HTML optimization and minification.
Also, a [browsersync](https://browsersync.io/)
script will be automatically generated, which will take care of precaching your sites' resources.


```sh
$ gulp dev
```

Same as 'gulp' command but without starting the local server.


## Serve the Fully Built & Optimized Site

```sh
$ gulp production
```

`gulp production` task creates the `production/` folder in the root of the project with **assets files only**. It will **help you** to **create clear** instances of code for the **production** or **further implementation**.




```

`Tasks` - folder for gulpfile tasks.
In `package.json` you can find all the dependencies.
In `src` folder you can find all sources for the project (images, sass , javascript files).

## `src` folder structure

```
```

Use `images` folder to add your graphic files, `modules` to add your javascript modules (don't forget to include it in app.js), `scss` folder to add your styles for the project. You can create, delete files and folders in `scss`, but don't forget to include them in `style.scss` file .

Use `vendor_entries` to include plugins into your project.

## JS

 In our WSK you can use ES2015(ES6). ES2015 isn't introducing anything other than improvements to the JavaScript language and a few new features.

 It is not an alternative syntax or language like CoffeeScript or TypeScript. It's good ol' fashioned JavaScript. The reason so many people are excited is that this version introduces a lot of much-needed improvements to the language.

* All custom **javascript** files locate in `js/` folder;
* Entry point for javascript is `src/js/app.js` you can **import** all you *.js* files from here using [ES6 import](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import) feature;
* All javascript is **babelified** so yes! You can use all kind of [ES6 features](https://babeljs.io/docs/learn-es2015/) here.
* All **extensions** must be installed by the [NPM](https://docs.npmjs.com/cli/install);
* After installing the extension you must **include its files**:
  * **js files** must be included in `src/vendor_entries/vendor.js` by adding new elements to the **array**;



## Sass

In our WSK you can use [SASS](http://sass-lang.com/). Sass is the most mature, stable, and powerful professional grade CSS extension language in the world.

Sass is a CSS preprocessor — a layer between the stylesheets you author and the .css files you serve to the browser. Sass (short for Syntactically Awesome Stylesheets) plugs the holes in CSS as a language, allowing you to write DRY code that’ll be faster, more efficient, and easier to maintain. In our WSK we follow Sass [guidelines](https://sass-guidelin.es/#architecture).

So while normal CSS doesn’t yet allow things like variables, mixins (reusable blocks of styles), and other goodies, Sass provides a syntax that does all of that and more—enabling “super functionality” in addition to your normal CSS.

* All custom **scss** files locate in `src/scss/` folder;
* Entry point for all scss is `src/scss/style.scss` you can **import** all your *.scss* files from here;
* You **don't need** to write **prefixes** for different browsers like `-webkit` it will be done by the gulp.

The `src` directory above contains MDL's Sass files and the JavaScript sources for all MDL components.

* All **extensions** must be installed by the [NPM](https://docs.npmjs.com/cli/install);
* After installing the extension you must **include its files**:
  * **css or sass files** must be included in `src/vendor_entries/vendor.scss` using `@import`.


## Tasks

|Task                               | Description                                                                                                                                                                                                                                               |
|----------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| browser-sync-server | Browsersync can watch your files as you work. Changes you make will either be injected into the page (CSS & images) or will cause all browsers to do a full-page refresh.                      |
| build-custom-js                         | Compiles all custom js from `src/js`                                                                                                     |
| build-js-vendors               | minifies and сompiles all vendor js from `src/vendor_entries`)                                                                                                |
| build-sass-production               | Compiles and minifies all custom scss from `src/scss` to `production`   folder                                                                                               |
| build-sass                   | Compiles all custom scss from `src/scss` to `assets/css`   folder  |
| build-styles-vendors                 | Compiles and minifies all plugins  scss from `src/vendor_entries` to `production`   folder                                                                                                                                                                            |
| clean-production                | `production` folder removing                                                                                                                           |
| copy-folders           | Need to copy all folders from sources to assets                       |
| templates           | Compiles all pug files into html files                       |
| html-hint           | Need to hint html files                    |
| js-hint           | Need to hint js files                      |
| image-clean           | Removing images                    |
| image-min           | We use this to minify images                    |
| watch           | Task for watching all the changes                   |






<!--
   _____                   _   _
  / ____|                 | \ | |
 | (___   __ _ _ __   __ _|  \| | __ _ _   _ _   _  ___ _ __
  \___ \ / _` | '_ \ / _` | . ` |/ _` | | | | | | |/ _ \ '_ \
  ____) | (_| | | | | (_| | |\  | (_| | |_| | |_| |  __/ | | |
 |_____/ \__,_|_| |_|\__, |_| \_|\__, |\__,_|\__, |\___|_| |_|
                      __/ |       __/ |       __/ |
                     |___/       |___/       |___/
--> Thanks to justCode Team
## License

The MIT License (MIT)

Copyright (c) 2017 JustCoded the IP provided on other devices on your network

