use test
show collections;

db.createUser({

                user : "testuser2",
                pwd : passwordPrompt(),
                roles : [{role : "readWrite", db : "test"}]
});

