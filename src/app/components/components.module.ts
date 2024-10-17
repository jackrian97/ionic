import { CommonModule } from '@angular/common'; // para poder usar las directivas de Angular como *ngIf, *ngFor, etc
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular'; // para poder usar los componentes de Ionic como IonCard, IonButton, etc

import { PersonajeComponent } from './personaje/personaje.component';
import { PersonajesComponent } from './personajes/personajes.component';

@NgModule({
    // Aquí se declaran los componentes que se van a usar en el módulo
  declarations: [
    PersonajeComponent,
    PersonajesComponent,
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  // Aquí se exportan los componentes que se van a usar en otros módulos
  exports: [
    PersonajeComponent,
    PersonajesComponent
  ]
})
export class ComponentsModule { }
