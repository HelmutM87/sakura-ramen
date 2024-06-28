import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { OurMenuComponent } from '../our-menu/our-menu.component';
import { HowToOrderComponent } from '../how-to-order/how-to-order.component';
import { LandingPageComponent } from '../landing-page/landingPage.component';

@Component({
  selector: 'app-maincontent',
  standalone: true,
  imports: [CommonModule, MaincontentComponent, OurMenuComponent, HowToOrderComponent, LandingPageComponent],
  templateUrl: './maincontent.component.html',
  styleUrls: ['./maincontent.component.scss']
})
export class MaincontentComponent {

}
