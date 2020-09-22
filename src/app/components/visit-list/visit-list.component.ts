import {Component, Input, OnInit} from '@angular/core';
import {Visit} from '../../models/visit';
import {VisitService} from '../../services/visit.service';

@Component({
  selector: 'app-visit-list',
  templateUrl: './visit-list.component.html',
  styleUrls: ['./visit-list.component.css']
})
export class VisitListComponent implements OnInit {
  @Input()
  visit: Visit;

  @Input()
  visits: Visit[];

  constructor(private visitService: VisitService) { }

  ngOnInit() {
    this.displayListOfVisits();
  }

  displayListOfVisits() {
    this.visitService.findAllVisits().subscribe((visits => this.visits = visits));
      // error => console.error('There are an error', error));
  }

}
