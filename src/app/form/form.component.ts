import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // Trung gian dữ liệu của file ts với form
  inputValues = {
    id: 0,
    name: '',
    age: 0
  };

  users = [
    {
      id: 1,
      name: 'tuannda3',
      age: 30
    },
    {
      id: 10,
      name: 'tuannda3',
      age: 30
    }
  ];

  onSubmit(userForm: NgForm) {
    console.log(userForm.value);
    // console.log(formData);
    // 0. Tìm id lớn nhất đang có để +1
    const newUserIds = this.users
      .map(user => user.id) // lấy ra mảng mới chỉ có id
      .sort((a: number, b: number) => b - a); // sort các id đang có
    const maxId = newUserIds[0];
    // 1. Push dữ liệu mới nhận từ form vào mảng
    if (userForm.value.id === 0) {
      this.users.push({
        ...userForm.value, // lấy ra object value của form
        id: maxId + 1
      });
    } else {
      //update
      const index = this.users.findIndex(user => user.id === userForm.value.id);
      this.users[index] = userForm.value;
    }
    // 2. Cập nhật giá trị của form về default
    userForm.resetForm({
      name: '',
      age: 0
    });
  }

  onEdit(id: any, name: any,age: any) {
    console.log("first")
    this.inputValues.id = id;
    this.inputValues.name = name;
    this.inputValues.age = age;
  }

  onDelete(id: any) {
    //delete
    const index = this.users.findIndex(user => user.id === id);
    this.users.splice(index, 1);
  }
}
