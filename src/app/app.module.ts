import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

/**
 * @author Youri Janssen //entire file
 * The root AppModule for configuring the Angular application.
 */
@NgModule({
    /**
     * The declarations array lists the components that belong to this module.
     * These components are available for use within the AppModule.
     */
    declarations: [AppComponent],
    /** The imports array specifies the modules that this module depends on.*/
    imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
    /** Providers array is where you could include service providers if needed. */
    providers: [],
    /**
     * Bootstrap property specifies the root component of the application.
     * The root component is the starting point of the application's component tree.
     */
    bootstrap: [AppComponent],
})
export class AppModule {}
