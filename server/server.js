Accounts.onCreateUser(function(options, user) {
  user.remaining_votes = 15;
  if (options.profile)
    user.profile = options.profile;
  return user;
});