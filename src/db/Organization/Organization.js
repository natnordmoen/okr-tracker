import { db } from '@/config/firebaseConfig';
import slugify from '@/util/slugify';
import CommonDatabaseFunctions from '../CommonDatabaseFunctions';

export default class Organisation extends CommonDatabaseFunctions {
  constructor(id) {
    super(id, db.collection('organizations'));

    this.ref = db.collection('organizations').doc(id);
  }

  static create(data) {
    if (!data.name) throw new Error('Name must be provided');
    data.slug = slugify(data.name);
    super.create(data);
  }

  async update(data) {
    if (!data) throw new TypeError('Missing data');

    data.slug = slugify(data.name);

    super.update(data);
  }

  async delete() {
    throw new Error('Organizations can only be deleted from the Firestore console');
  }

  handleError(error) {
    // TODO: Show an error to the user
    console.error(error);

    return false;
  }
}
