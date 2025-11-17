import { Routes } from "@angular/router";   
import { HomeComponent } from "../components/home/home.component";
import { ContactComponent } from "../components/contact/contact.component";
import { AboutComponent } from "../components/about/about.component";

export const routes: Routes = [
    {    path:"home",component: HomeComponent },
    {path:"about",component: AboutComponent },
    {path:"contact",component: ContactComponent }

];

// bunu app.routes.ts dosyasında yaptık 