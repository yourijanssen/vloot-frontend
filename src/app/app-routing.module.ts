import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

/**
 * @author Youri Janssen //entire file
 * Defines the routes for the application.
 */
const routes: Routes = [{ path: '', component: AppComponent }];

/** The AppRoutingModule configures the application's routes. */
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
