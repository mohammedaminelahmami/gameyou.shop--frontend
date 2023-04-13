import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  currentUser: any = JSON.parse(localStorage.getItem('currentUser') || '{}');
  formGroupInfo: FormGroup = new FormGroup({
    firstName: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
    lastName: new FormControl('', [Validators.required]),
    phone: new FormControl('', [Validators.required]),
    hashedPassword: new FormControl('', [Validators.required]),
  });

  formGroupPassword: FormGroup = new FormGroup({
    oldPassword: new FormControl('', [Validators.required]),
    newPassword: new FormControl('', [Validators.required]),
    confirmNewPassword: new FormControl('', [Validators.required]),
  });

  constructor(private clientService: ClientService) {}

  ngOnInit(): void {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');
    this.getClient();
  }

  updateInfo(formGroupValues: any) {
    let clientId = this.currentUser.id;
    this.clientService.updateClientInfo(formGroupValues, clientId).subscribe(
      (res) => {
        console.log('res : ', res);
        this.getClient();
      },
      (err) => {
        console.log('err : ', err);
        this.getClient();
      }
    );
  }

  updatePassword(formGroupValues: any) {
    let clientId = this.currentUser.id;
    this.clientService
      .updateClientPassword(formGroupValues, clientId)
      .subscribe(
        (res) => {
          console.log('res : ', res);
          this.formGroupPassword.reset();
        },
        (err) => {
          console.log('err : ', err);
        }
      );
  }

  getClient() {
    this.clientService.getClient(this.currentUser.id).subscribe(
      (res: any) => {
        // console.log(res);
        this.formGroupInfo.patchValue({
          firstName: res.firstName,
          lastName: res.lastName,
          phone: res.phone,
        });
      },
      (err: any) => {
        console.log(err);
      }
    );
  }
}
