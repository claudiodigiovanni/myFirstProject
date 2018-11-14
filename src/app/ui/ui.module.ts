import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { LayoutComponent } from './layout/layout.component';
import { AppRoutingModule } from '../app-routing.module';
import { ReactiveFormsModule, FormsModule} from '@angular/forms';

@NgModule({
  declarations: [FooterComponent, HeaderComponent, LayoutComponent],
  imports: [
    CommonModule, 
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports:[LayoutComponent]
})
export class UiModule { }
