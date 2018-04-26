import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { MiPruebaComponent } from './componentes/mi-prueba/mi-prueba.component';
import { OtroComponenteComponent } from './componentes/otro-componente/otro-componente.component';
import { BindingComponent } from './componentes/binding/binding.component';
import { FormsModule } from '@angular/forms';
import { HighlightDirective } from './directivas/highlight.directive';
import { PipesComponent } from './componentes/pipes/pipes.component';

import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';
import { ExponentePipe } from './pipes/exponente.pipe';
import { CalculadoraComponent } from './componentes/calculadora/calculadora.component';
import { GaleriaComponent } from './componentes/galeria/galeria.component';
import { ListadoHeroesComponent } from './componentes/listado-heroes/listado-heroes.component';
import { MaestroHeroeComponent } from './componentes/maestro-heroe/maestro-heroe.component';
import { DetalleModHeroeComponent } from './componentes/detalle-mod-heroe/detalle-mod-heroe.component';
import { MockService } from './servicios/mock.service';
import { MenuComponent } from './componentes/menu/menu.component';
import { TemplatevariablesComponent } from './componentes/templatevariables/templatevariables.component';
import { TemplateFormComponent } from './componentes/template-form/template-form.component';
import { ObservablesComponent } from './componentes/observables/observables.component';
import { HttpClientModule } from '@angular/common/http';
import { HeroeService } from './servicios/heroe.service';

// the second parameter 'es' is optional
registerLocaleData(localeEs, 'es');
@NgModule({
  declarations: [
    AppComponent,
    MiPruebaComponent,
    OtroComponenteComponent,
    BindingComponent,
    HighlightDirective,
    PipesComponent,
    ExponentePipe,
    CalculadoraComponent,
    GaleriaComponent,
    ListadoHeroesComponent,
    MaestroHeroeComponent,
    DetalleModHeroeComponent,
    MenuComponent,
    TemplatevariablesComponent,
    TemplateFormComponent,
    ObservablesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    MockService,
    HeroeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
