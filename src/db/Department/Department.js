import { db } from '@/config/firebaseConfig';

import CommonDatabaseFunctions from '../CommonDatabaseFunctions';

export default class Organisation extends CommonDatabaseFunctions {
  constructor(id) {
    super(id, db.collection('departments'));

    this.ref = db.collection('departments').doc(id);
  }

  async update(data) {
    if (!data) throw new TypeError('Missing data');

    delete data.organization; // Do not update organization reference

    this.setUpdatedMetadata(data);

    try {
      await this.ref.update(data);
    } catch (error) {
      this.handleError(error);
      return false;
    }

    return this;
  }

  handleError(error) {
    // TODO: Show an error to the user
    console.error(error);

    return false;
  }
}
