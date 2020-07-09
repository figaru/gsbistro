// All links-related publications

import { Meteor } from 'meteor/meteor';

Meteor.publish('notifications.all', function () {
  return Notifications.find();
});
