import { Routes } from '@angular/router';
import { ExampleComponent } from './components/example/example.component';
import { HomeComponent } from "../app/components/home/home.component";
import { ContactComponent } from "../app/components/contact/contact.component";
import { AboutComponent } from "../app/components/about/about.component";
import { ProductComponent } from '../app/components/product/product.component';
import { ProductDetailComponent } from '../app/components/product-detail/product-detail.component';
import { canActivateGuard, resolveGuard } from './guards/guards';


export const routes: Routes = [
	// Redirect root to the example page
	{ path: '', pathMatch: 'full', redirectTo: 'example' },
	// Direct route to the Example standalone component
	{ path: 'example', component: ExampleComponent },
	// Fallback route
	{path:"home",component: HomeComponent },
	{path:"about",component: AboutComponent },
	{path:"contact",component: ContactComponent ,canActivate:[canActivateGuard] },
	{path:"product",component: ProductComponent ,children:[
		{path:"detail/:id",component: ProductDetailComponent },
	],resolve:{photos:resolveGuard}
	},
	
	
	{ path: '**', redirectTo: 'example' },
	
];
