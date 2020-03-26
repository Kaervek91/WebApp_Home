import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { ManageUsersComponent } from './manage-users/manage-users.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';


const adminRoutes: Routes = [
  { path: 'admin', component: AdminComponent
    /*children : [
      {
        path: '',
        children: [
          { path: 'users', component: ManageUsersComponent },
          { path: '', component : AdminDashboardComponent }
        ]
      }
    ]*/
  }
];

@NgModule({
  imports: [RouterModule.forChild(adminRoutes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
