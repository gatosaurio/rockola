Accounts.onCreateUser(function(options, user) {
  user.remaining_votes = 20;
  user.remaining_songs = 5;
  if (options.profile)
    user.profile = options.profile;
  return user;
});
