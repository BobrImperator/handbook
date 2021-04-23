import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class UsersFormComponent extends Component {
  @action
  setField(field, event) {
    this.args.changeField(field, event.target.value);
  }

  @action
  submit(event) {
    event.preventDefault();
    this.args.onSubmit(this.args.user);
  }
}
