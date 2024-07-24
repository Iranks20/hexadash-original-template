import { Component } from '@angular/core';

@Component({
  selector: 'app-demo-ten',
  templateUrl: './demo-ten.component.html'
})

export class DemoTenComponent {
  isLoading = true;
  showContent = false;

  ngOnInit() {
    // Simulate loading time
    this.loadData();
  }

  loadData() {
    // Simulate an asynchronous data loading operation
    setTimeout(() => {
      this.isLoading = false;
      this.showContent = true;
    }, 500);
  }
}
