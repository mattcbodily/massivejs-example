-- This SQL command deletes a user based on the id. We are passing in the id by its name passed into it from 
-- the controller function
delete from users where user_id = ${id};