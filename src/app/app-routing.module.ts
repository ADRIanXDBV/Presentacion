import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComponenteAComponent } from 'src/component/component_a/componente-a/componente-a.component';
import { ComponenteBComponent } from 'src/component/component_b/componente-b/componente-b.component';


const routes: Routes = [
{
  path: '', component: ComponenteAComponent //llamar al componente 
},
{
  path: 'seg', component: ComponenteBComponent
}
];//crear rutas

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
