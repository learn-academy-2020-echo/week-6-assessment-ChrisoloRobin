# ASSESSMENT 6: Interview Practice Questions
Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. In a model called Animal that has_many Sightings, what is the name of the foreign key? Would the foreign key be part of the Animal model or the Sightings model?

  Your answer:  The foreign key would be called animal_id by default and this would be located in the Sighting(s) model.

  Researched answer:  By default this is guessed to be the name of this class in lower-case and “_id” suffixed. So a Person class that makes a has_many association will use “person_id” as the default :foreign_key.


2. Which RESTful routes must always be passed params? Why?

  Your answer:  Show, Edit, Update, and Destroy require params as they are seeking specific information identified through an id 

  Researched answer:  Show - /blogs/:id;  
                      Edit - /blogs/:id/edit;  
                      Update - /blogs/:id;  
                      Destroy - /blogs/:id;

3. Name three rails generator commands. What is created by each?

  Your answer: Three generator commands are Model, Controller, and Resource
        Generate Model - Generate a "data base" to be used for our backend 
        Generate Controller - Creates a new view in the config folder
        Generate Resource - Generate model and controller at once along with an necissary routes 

  Researched answer: Three generator commands are Model, Controller, and Resource. The generate command in the command line can be used to quickly create boilerplate folders and files for a project.
        Generate Model - Model creates a migration, model, and tests for the files that were generated.
        Generate Controller - Controller is unique in that you don’t put table column names and types after the controller name, but you put the methods you want included in the new controller. The downside to controllers is that it creates unnecessary views because it creates a view for each method you enter.
        Generate Resource - Resource command does everything Model command does, but also creates a controller, empty views folder, and resource routes. Generating a resource does everything generating a model does, but it also creates a resource in the routes.rb file and an empty folder in the views.


4. Consider the Rails routes below. What is the name of the controller method that would be called by each route? What action would each of the controller methods perform?

method="GET"    /users            users#index - display all users at current index

method="GET"    /users/1          users#show - display a specific user

method="GET"    /users/new        users#new - return an HTML form to create a new user

method="GET"    /users/edit/1     users#edits - return a form to edit a user

method="POST"   /users/           users#create - create a new user

method="PUT"    /users/1          users#update - update a specific user

method="DELETE" /users/1          users#destroy - delete a specific user



5. As a developer, you want to make an application that will help you manage your to do list. For the MVP, you want to create just the user's view. Create 10 user stories that will help you get your application started. 

  1. As the user I can name the To-Do List.
  2. As the user I can edit the To-Do List name.
  3. As the user I can add a Task to the To-Do List.
  4. As the user I can add a Title & Details to a Task.
  5. As the user I can edit the Task title or details.
  6. As the user I can mark a Task complete.
  7. As the user I can edit a complete Task incomplete.
  8. As the user I can view all completed Tasks.
  9. As the user I can rearrenge the order of the Tasks.
 10. As the user I can delete a Task.