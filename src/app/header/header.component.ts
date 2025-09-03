import { Component } from "@angular/core";

@Component({
    selector: 'app-header',
    standalone: true,
    templateUrl: './header.component.html',
    // styles: '[  h1 { color: blue } ]', ----> binding styles directly in component file
    // styleUrl: './header.component.css', ----> single file for styles
    // styleUrls: './header.component.css', --> Array of multiple files for styles
    styleUrls: ['./header.component.scss']
})

export class HeaderComponent {}
