# Rest-Rant

## Description

### This activity is a fully RESTful restaurant reviewer app that we will call REST-Rant. At any time, you can view a finished example of REST-Rant. This app will have a real database powering the information behind it, and we will be able to add, update, and delete restaurants (full CRUD) as well as add and delete comments and reviews.

## Table of Contents

- ### Routes

- ### DB

- ### Rants


## Routes
### ----------------------------------------------------------------------------------------|
### | Method    |	        Path         |   Purpose                                        |
### |-----------|------------------------|--------------------------------------------------|
### | GET       |      /	             |  Home page                                       |
### |-----------|------------------------|--------------------------------------------------|
### | GET	    |  /places	             | Places index page                                |
### |-----------|------------------------|--------------------------------------------------|
### | POST	    |  /places	             | Create new place                                 |
### |-----------|------------------------|--------------------------------------------------|
### | GET	    |  /places/new           | Form page for creating a new place               |
### |-----------|------------------------|--------------------------------------------------|
### | GET	    |  /places/:id           | Details about a particular place                 |
### |-----------|------------------------|--------------------------------------------------|
### | PUT	    |  /places/:id	         | Update a particular place                        |
### |-----------|------------------------|--------------------------------------------------|
### | GET	    |  /places/:id/edit	     | Form page for editing an existing place          |
### |-----------|------------------------|--------------------------------------------------|
### | DELETE	|  /places/:id	         | Delete a particular place                        |
### |-----------|------------------------|--------------------------------------------------|
### | POST	    |  /places/:id/rant      | Create a rant (comment) about a particular place |
### |-----------|------------------------|--------------------------------------------------|
### | DELETE	|/places/:id/rant/:rantId|Delete a rant (comment) about a particular place  |
### |-----------|------------------------|--------------------------------------------------|
### |  GET	    |            *           |404 page (matches any route not defined above)    |
### |---------------------------------------------------------------------------------------|

## DB

### Places

### |-----------------------------|
### | Field	    | Type            |
### |-----------|-----------------|
### | _id	    | Object ID       |
### |-----------|-----------------|
### | name	    | String          |
### |-----------|-----------------|
### | city	    | String          |
### |-----------|-----------------|
### | state	    | String          |
### |-----------|-----------------|
### | cuisines  | String          |
### |-----------|-----------------|
### | pic	    | String          |
### |-----------------------------|


### Rants

### |-----------------------------|
### | Field	    | Type            |
### |-----------|-----------------|
### | place_id  | Object ID       |
### |-----------|-----------------|
### | rant	    | String          |
### |-----------|-----------------|
### | ratin     | String          |
### |-----------|-----------------|
### | commen    | String          |
### |-----------|-----------------|
### | reviewer  | String          |
### |-----------------------------|


## Planning

## User Stories
### User stories are most often phrased as: 

### "As a ____(user type)_____ I need ____(feature)____ so I can ____(action)____"

## TBD

## Wireframes
### WireFrames: Home Page (Welcome to {name}) -> Places: Index Page -> Places: Post to places

### Color Scheme: Primary: Black / Secondary: Teal / Filler: White 

## TBD

## Notes

