import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class UsersComponent extends Component {
  @service store;

  @tracked users = [];
  @tracked formUser = this.store.createRecord('user');

  @action
  async loadUsers() {
    this.users = await this.store.peekAll('user');
  }

  @action
  changeUserField(form, field, value) {
    form[field] = value;
  }

  @action
  editUser(user) {
    this.formUser = user;
  }

  @action
  saveUser(user) {
    try {
      user.save();
    } catch (error) {
      console.error(error);
    }
  }

  @action
  createUser(form) {
    const user = this.store.createRecord('user', form);
    this.formUser = user;
    return user;
  }
}
