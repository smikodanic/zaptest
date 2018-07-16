// MODULES
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common'; // common directives, pipes
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule, MatButtonModule } from '@angular/material';


// COMPONENTS
import { HomeComponent } from './pages/home/home.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
// material
import { MyDialogComponent } from './pages/_common/mat/dialog/mydialog/mydialog.component';

// SERVICES
// import { IsLoggedService, HasRoleService, AutologinService } from 'ng5plus-auth';

// PIPES
// import { YesNoPipe } from './ng/pipes/yesNo.pipe';


// ROUTES
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'page1', loadChildren: './pages/page1/page1.module#Page1Module' },
  { path: 'page2', loadChildren: './pages/page2/page2.module#Page2Module' },

  { path: '404', component: NotfoundComponent },
  { path: '**', redirectTo: '/404' }
];



@NgModule({
  imports: [
    RouterModule.forRoot(routes, { enableTracing: false }),
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,

    MatDialogModule,
    MatButtonModule,
  ],
  exports: [ RouterModule ],
  providers: [
  ],
  declarations: [
    HomeComponent,
    MyDialogComponent,
    NotfoundComponent
  ],
  entryComponents: [
    MyDialogComponent
  ]
})

export class AppRoutesModule {}
