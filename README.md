# Musedaq

## Goals

#### Users can create an account on Musedaq, which allows them the interactive opportunity to "shop" for independent artists and bands, with the capability of viewing their stats, buying them, selling them and removing them from their inventory

#### Each artist/band portfolio shows previous works done, sales stats, fanbase, potential profit/loss return, and current buy price.

#### As a label, you have a budget. You must stay within that budget to start your experience on Musedaq.


# User Story

#### When I visit the website, I am asked if I want to sign up or log in.

#### When I sign up, I am asked my email address and password.

#### When I am in my account, I can see links to Home, My Label, and Logout.

#### On the main products page, I can view the "top artists" by popularity. I can view artists by genre.

#### After I press "add to label", I can view the "My Label" page and see that I have that artist/band now as a part of my roster.

#### If I press "Stats"on the "My Label" page, I can view my past buy/sells.



## HTTP Routes

* POST'/', user can sign up
* POST '/users', user can log in
* GET '/verify', user verification
* GET '/', get all artists
* GET '/:id', get one artist
* PUT '/:id', edit one artist
* DELETE '/:id', delete on artist

## Wireframe
<details>
<summary>Click to see Wireframe</summary>

</details>


## MVP

* New user can sign up and create a new account. Registered users can log in.
* After log in, user must be able to view artists, my label, home, and logout links/pages.
* If a user adds an artist to the roster, that artist must show on the My Label page.
* If a user visits the link of one of their artists, they must be able to view that artist's stats, edit that artist info, or sell them back to the marketplace.
* User's "budget" must update per purchase/sell of an artist.



## Stretch Goals


