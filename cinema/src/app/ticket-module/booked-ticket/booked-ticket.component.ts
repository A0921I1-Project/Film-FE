import {Component, OnInit} from '@angular/core';
import {TicketService} from '../service/ticket.service';
import {BookedTicket} from '../../model/booked-ticket';

@Component({
  selector: 'app-booked-ticket',
  templateUrl: './booked-ticket.component.html',
  styleUrls: ['./booked-ticket.component.css']
})
export class BookedTicketComponent implements OnInit {
// tickets: List[]=[],
//   indexPagination = 1;
//   totalPagination: number;
  indexPagination = 0;
  totalPages: number;
  bookedTickets: BookedTicket[];
  name: string;
  id: number;
  price: any;

  constructor(
    private ticketService: TicketService
  ) {
  }

  ngOnInit(): void {
    this.getBookedTicket();
  }

  getBookedTicket() {
    this.ticketService.getBookedTicket(this.indexPagination).subscribe(data => {
      console.log(data);
      this.bookedTickets = data.content;
      this.totalPages = data.totalPages;
      // this.indexPagination = data.number;
    }, error => {
      console.log(error);
    });
  }

  findBookedTicketDeleteById(name: string, price: any, id: number) {
    this.name = name;
    this.price = price;
    this.id = id;
  }

  firstPage() {
    this.indexPagination = 0;
    this.ngOnInit();
  }

  nextPage() {
    if (this.indexPagination < this.totalPages) {
      this.indexPagination = this.indexPagination + 1;
      this.ngOnInit();

    }

  }

  previousPage() {
    if (this.indexPagination > 0) {
      this.indexPagination = this.indexPagination - 1;
      this.ngOnInit();
    }
  }

  lastPage() {
    this.indexPagination = this.totalPages - 1;
    this.ngOnInit();
  }
}
