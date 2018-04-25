import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {FakeUserProvider} from "../../providers/providers";

/**
 * Generated class for the UserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-user',
  templateUrl: 'user.html',
})
export class UserPage {

  items: any = [];

  constructor(public navCtrl: NavController,
              public fakeUserProvider: FakeUserProvider) {
  }

  ionViewDidLoad() {
    this.fakeUserProvider.findTenLastUser().subscribe(
      (results: any) => {
        console.table(results);
        this.items = results;
      },
      (error: Error) => {
        console.log(error);
      }
    );
    console.log('ionViewDidLoad UserPage');
  }

  itemSelected(item: any) {
    this.navCtrl.push("UserDetailsPage", {
      currentUser: item
    });
  }

}
