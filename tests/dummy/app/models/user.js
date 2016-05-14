import Ember from 'ember';
import DS from 'ember-data';

const { attr } = DS;
const { computed } = Ember;

export default DS.Model.extend({
  firstName: attr('string'),
  lastName: attr('string'),
  company: attr('string'),
  address: attr('string'),
  country: attr('string'),
  state: attr('string'),
  email: attr('string'),
  username: attr('string'),
  avatar: attr('string'),
  bio: attr('string'),

  friends: DS.hasMany('user'),
  messages: DS.hasMany('message'),

  fullName: computed('firstName', 'lastName', function() {
    return `${this.get('firstName')} ${this.get('lastName')}`;
  })
});
