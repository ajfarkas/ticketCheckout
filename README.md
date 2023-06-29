# Ticket Checkout

Code challenge for front end SWE role

This is a SPA that shows the customer available concerts, and allows them to purchase up to 12 tickets for each show. They then see their (mock) checkout cart as an `aside` over the Concerts page.

## Running locally
Use your local server of choice to run the application. I like [http-server](https://github.com/http-party/http-server):

```sh
npx http-server
```
You can then view the application at `localhost:8080` or whichever port your server tells you it's running on.

I committed the compiled code, so it should just work, though you can build with the following commands:

```sh
npm i && npm start
```

## Features

This is definitely a bare-bones implementation, but it has some features that are worth noting:

  - Customers can add and remove tickets from their cart (the latter by setting the number of tickets to zero).
  - Adding to their cart automatically opens the cart, and they can close it again by clicking the `X` at top.
  - Cost totals are accurate.
  - The credit card form will autofill if the customer has an extension or application that does that automatically.
  - The `Pay Now` button is disabled until the Card form is filled out properly.

## TODO

There are many features and some basic things I did not get to, as I had to balance spending a reasonable amount of time on this project with making something worth presenting. Some examples of what I would do given more time:

  - Accessibility and cross-browser and -device testing. This should be close to ok, but there are things I know are likely to be broken for some users. (ie, keyboard navigation is not good. I'm a heavy keyboard navigator.)
  - Proper styling. For the most part, design is out of scope for this project. I did the minimum to make this usable.
  - Error handling and form validation notifications for the customer. (ie, max number of tickets, numbers only on Card Number input, etc.)
  - Add realistic fees to price.

On the dev experience side, I haven't done a personal project in React since `v0.x`, despite using it professionally my whole career, so I'm missing a lot of boilerplate and nice-to-have setup:

  - Bundling SCSS compilation into Webpack so I don't have to build CSS manually. This would also allow me to `import` SCSS files in the individual React component files, which I think is cleaner and reduces unused code. 
  - Add descriptions of params for components (documentation!)
  - Use a proper `router` instead of loading all of the functionality onto the `Concerts` page. (I like `react-router-dom`, though it's not easy to set up.)
  - Unit tests.
  - Integration tests.

There are plenty more things I would do in a production-facing application, and I'm happy to talk about them.