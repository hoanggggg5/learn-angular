import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
// Đây là nơi định nghĩa component và logic
export class AppComponent {
  // Định nghĩa các biến,
  // Các biến này có thể nhận được giá trị ở file html
  title = 'angular we16301 FPT Poly';

  // Khai báo thêm 1 số biến để html sử dụng
  name = 'tuannda3';
  class = 'we16301';

  students = [
    {
      name: 'tuannda1',
      id: 'PH1111',
      status: 0
    },
    {
      name: 'tuannda2',
      id: 'PH2222',
      status: 1
    },
    {
      name: 'tuannda3',
      id: 'PH3333',
      status: 1
    }
  ];

  champs = [
    {
      name: 'Lucian',
      dame: 400,
      defend: 200,
      speed: 100,
      price: 6300,
      avatar: 'https://oneesports.blob.core.windows.net/cdn-data/sites/4/2021/08/pulsefire-lucian-lien-minh-huyen-thoai1.jpg'
    }
  ]


  formValue = {
    name: "",
    avatar: "",
  }

  onInputName = (event: any) => {
    this.formValue.name = event.target.value
    console.log(this.formValue)
  }
  onInputAvatar = (event: any) => {
    this.formValue.avatar = event.target.value
    console.log(this.formValue)
  }
  onSubmit() {
  }
}
