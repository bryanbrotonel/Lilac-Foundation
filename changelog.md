# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## 0.0.3

### 2018-11-13

#### Added
- About page layout and styling
- About item layout and styling
- Retreived about items from [Contentful](https://www.contentful.com/)

#### Removed
- Unecessary sorting functions

### 2018-11-12

#### Added
- Added figures scss module
  - Added zoom image hover and grayscale hover
- Added no select styling
- Added blog page grid and list layout
  - Added blog list component
  - Added toggling button
- Changed page header height
- Blog pagination functionality
- Blog list and grid hover

#### Removed
- Renamed blog item component
- Blog grid hover overlay

### 2018-11-08

#### Added
- `TEAM_LOADING` Team thunk type
- Team member profile page routing
- Redid team member profile page layout and styling
- Retreived team member page socials, and header image from [Contentful](https://www.contentful.com/)
  - Added typography styling
- Blockquote font size styling
- `Text-dark` font colour
- Team member image hover and grayscale

#### Removed
- `LOAD_TEAM_MEMBERS_SUCCESS` Team thunk type
- Team page introduction blurb
- Role in team member items on team member page
- Added team member socials with link styling
- `Subtitle` font colour

### 2018-11-07

#### Added
 - Able to retreive header images from [Contentful](https://www.contentful.com/)
   - Implemented through new base [Redux](https://redux.js.org)
- Navbar toggler placement and colouring
- Retreived Lilac Foundation social media from [Contentful](https://www.contentful.com/)
  - Added new socials [Redux](https://redux.js.org) reducer
- Linked footer links to respective pages
- Separated [Contentful](https://www.contentful.com/) into `blogClient` and `contentClient`
- Coloured links mixin improvements

### 2018-11-06

#### Added
- Page header layout, styling, and responsivness
- Global overlay styling
- Coloured links styling
- Video header specific styilng

### 2018-11-02

#### Added
- Poly-fluid sizing typography courtesy of [Jakobud](https://github.com/Jakobud)
- Colour modules
- New navbar layout
- Added donate button
- Button colour mixin
- Improved typography modules
- Footer content, layout, and styling

#### Removed
- Component specific typography partials
- Navbar styling
  - Background colour
  - Fixed on top styling
- [Fontawesome](https://fontawesome.com/) icons

## 0.0.2

### 2018-10-31

#### Added
- Work post scene
- Work post routing
- Work page layout
  - Retreived work page content from [Contentful](https://www.contentful.com/)
   - Work page work post items
- Markdown content image styling

#### Removed
- Blog content

### 2018-10-30

#### Added
- Team member route
- Team member profile page
- Global team member component
  - Team member component layout
- Global page header component
- New blog functions path 
- Added work scene
  - Added work route
- Retreived work posts from [Contentful](https://www.contentful.com/)

#### Removed
- About page team section item
- Responsive layout styling
- Blog page header component
- Blogclient variable
- Unused store imports

### 2018-10-26, 2018-10-29

#### Added
- Added blog page header
- Implemented blog card layout
- Blog post content layout

#### Removed
- Blog item link props

### 2018-10-25

#### Added
- [Fontawesome](https://fontawesome.com/) icons
- Updated footer layout, styling, and typography
- Added Scroll To Top route component
- Blog post layout and styling
- Renamed blog section styling
- SCSS modules
  - Added link stying mixin
  - Blog masthead overlay colour

### 2018-10-24

#### Added
- Sorted blog post by descending date
- Updated home blog section layout, styling, and responsiveness
- Page section height prop
- About page component
  - About write up content layout and styling
  - Meet the team layout and styling
- About page routing
- Improved page section padding for better use of whitespace
- Simplified work items styling
- Simplified page section height prop
- Simplified page header children prop
- Simplified about section layout

#### Removed
- Blog section item
- Team section folder mispelling
- Loader class

### 2018-10-22

#### Added
- Added blog item layout and card styling
- Added Work item layout and styling
- Added Team member item layout and styling
- Proper section item naming

#### Removed

- Replaced Meet the Team section with blog section

### 2018-10-21

#### Added
- Implemented home page layout with styling
  - Added Mission section
  - Added Team section
  - Added Work section

## 0.0.1

### 2018-10-10, 2018-10-17, 2018-10-18, 2018-10-20

#### Added
- Retreived & displayed blog posts from [Contentful](https://www.contentful.com/)
- Retreived & displayed single blog post from [Contentful](https://www.contentful.com/) with blog post id
- Basic styling with [Bootstrap](https://getbootstrap.com)
- Implemented to blog [Redux](https://redux.js.org)
- Added colours [SASS](https://sass-lang.com/) module
- Restructured app and routing structure
- Added env file for imports
- Added [React Burger Menu](http://negomi.github.io/react-burger-menu/) for mobile navigation
- Implemented responsive navbar
- Added footer with styling

### 2018-10-09

#### Added
- Iniital commit
- [Webpack](https://webpack.js.org/) configuration
- [Babel](https://babeljs.io/) configuraiton
- [Eslint](https://eslint.org/) configuraiton
- [SASS](https://sass-lang.com/) folder structure
- [React](https://reactjs.org/) base component
