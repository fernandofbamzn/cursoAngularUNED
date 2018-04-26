import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GaleriaComponent } from './componentes/galeria/galeria.component';
import { MaestroHeroeComponent } from './componentes/maestro-heroe/maestro-heroe.component';
import { MiPruebaComponent } from './componentes/mi-prueba/mi-prueba.component';
import { BindingComponent } from './componentes/binding/binding.component';
import { PipesComponent } from './componentes/pipes/pipes.component';
import { CalculadoraComponent } from './componentes/calculadora/calculadora.component';
import { TemplatevariablesComponent } from './componentes/templatevariables/templatevariables.component';
import { TemplateFormComponent } from './componentes/template-form/template-form.component';
import { ObservablesComponent } from './componentes/observables/observables.component';

export const routes: Routes = [
  {path: 'galeria', component: GaleriaComponent},
  {path: 'heroes', component: MaestroHeroeComponent, data: {title: 'SHIELD'}},
  {path: 'prueba1', component: MiPruebaComponent},
  {path: 'binding', component: BindingComponent},
  {path: 'pipes', component: PipesComponent},
  {path: 'calculadora', component: CalculadoraComponent},
  {path: 'template-variables', component: TemplatevariablesComponent},
  {path: 'templateForm', component: TemplateFormComponent},
  {path: 'observablesFrios', component: ObservablesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
