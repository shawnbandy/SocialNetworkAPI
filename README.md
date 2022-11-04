# NoSQL Social Network

## Acceptance Criteria:

    1. Server should use Mongoose models ✅
    2. Server should use MongoDB database ✅
    3. API Routes should have the following:
        A. Users, /api/users
            i. Get all users ✅
            ii. Get single user by id ✅
            iii. Post new user ✅
            iv. Put to update user by id ✅
            v. Delete to delete user by id ✅
            vi. Cascade deletion of thoughts when user is deleted'
        B. Users, /api/users/:userId/friends/:friendId
            i. Post to add new friend ✅
            ii. delete to remove a friend ✅
        C. Thoughts, /api/thoughts
            i. Get all thoughts ✅
            ii. Get thought by its ID ✅
            iii. Post to create new thought ✅
            iv. Put to update thought by ID ✅
            v. Delete to remove thought by id ✅
        D. Thoughts, /api/thoughts/:thoughtId/reactions
            i. Post to create reaction stored in the reaction field ✅
            ii. Delete to remove reaction ✅
    4. Models should have the following:
        A. User:
            i. username
                a. String ✅
                b. unique ✅
                c. required ✅
                d. trimmed ✅
            ii. email
                a. String ✅
                b. unique ✅
                c. required ✅
                d. must be valid ✅
            iii. thoughts
                a. array of ID values referencing thought model ✅
            iv. friends
                a. array of ID values referencing User model ✅
        Schema settings:
            i. Virtual called friendCount that gets the length of the user's friends ✅
        B. Thoughts
            i. thoughtText
                a. string ✅
                b. required ✅
                c. btwn 1-280 characters ✅
            ii. createdAt
                a. date ✅
                b. set default value to current time ✅
                c. user get method to format the timestamp ✅
            iii. username
                a. string ✅
                b. required ✅
            iv. reactions
                a. array of nested documents with reactionSchema ✅
        Schema settings:
            i. Virtual called reactionCount that gets the length of the thought's reactions ✅
        C. Reactions, SCHEMA only
            i. reactionID
                a. use Mongoose's objectID data type ✅
                b. default value is set to a new objectID ✅
            ii. reactionBody,
                a. string ✅
                b. required ✅
                c. 280 char max ✅
            iii. username
                a. string ✅
                b. required ✅
            iv. createdAt
                a. Date ✅
                b. set default value to current time ✅
                c. user get method to format the timestamp ✅
        Schema settings:
            i. Not a model, but as a reaction field's subdocument in thought model ✅

## Application Specifics:

    1. Use MongoDB, Mongoose ODM
    2. Use Express.js
    3. Use a seeding database
    4. Use Insomnia
    4. Make a walkthrough video

## Application Description
