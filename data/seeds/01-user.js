exports.seed = async function(knex) {
  // Deletes ALL existing entries

  await knex("users").insert([
    {
      username: "user1",
      password: "password1"
    },
    {
      username: "user2",
      password: "password2"
    },
    {
      username: "user3",
      password: "password3"
    }
  ]);
};
