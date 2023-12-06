import { Component } from '@angular/core';
import {ChildSearchComponent} from "./child-search/child-search.component";

@Component({
  standalone: true,
  selector: 'search-bar',
  imports:[ChildSearchComponent],
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent {

}
