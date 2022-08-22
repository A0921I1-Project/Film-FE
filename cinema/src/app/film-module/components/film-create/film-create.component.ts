import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {FilmService} from "../../service/film.service";
import {Category} from "../../../model/category";
import {SeatDetail} from "../../../model/seat-detail";



@Component({
  selector: 'app-film-create',
  templateUrl: './film-create.component.html',
  styleUrls: ['./film-create.component.css']
})
export class FilmCreateComponent implements OnInit {


  constructor(private filmService: FilmService,
              private fb: FormBuilder) {
  }

  ngOnInit() {
    this.getAllListCategory();
    // this.rfContact = this.fb.group({
    //   contactName: '',
    //   email: '',
    //   social: this.fb.group({
    //     facebook: '',
    //     twitter: '',
    //     website: ''
    //   }),
    //   tels: this.fb.array([
    //     this.fb.control('')
    //   ])
    // });
   this.createForm = this.fb.group({
      name: '',
      startDate: '',
      endDate: '',
      actor: '',
      director: '',
      duration:'',
      trailer: '',
      studioName: '',
      content: '',
      categories: this.fb.array([]),
     seatDetail:this.fb.array([[
       this.fb.control({
         dateShow:'',
         roomId:'',
         timeId:'',
         filmId:'',
         seatId:''
       })
       ]]
     )
    });

  }
  createForm: FormGroup;
  categoryList: Category[];
  filmName: String;


  // film = this.createForm.value;
  getAllListCategory() {
    this.filmService.getAllCategory().subscribe((categories) => {
      // @ts-ignore
      this.categoryList = categories;
    });
  }


  add() {
    let idCategoryFilm : number;
    let array = document.getElementsByName("checkType");
    let arr = [];
    for (let i = 0; i < array.length; i++) {
      if ((<HTMLInputElement>array[i]).checked) {
        // let obj = {id: (<HTMLInputElement>array[i]).value};
        let obj = (<HTMLInputElement>array[i]).value;
        arr.push(obj);
      }
    }
    this.createForm.value.categories = arr;
    this.filmName = this.createForm.value.name;
    this.filmService.getNumberOfReCordOfCategoryFilm().subscribe(r=>{
      // @ts-ignore
      idCategoryFilm = (r+1);
    })
    this.filmService.add(this.createForm.value).subscribe(film => {
      // this.filmService.getFilmIdByName(this.filmName).subscribe(r=>{
      //   // @ts-ignore
      //   console.log('r' +r);
      // })
      console.log(film.id);
      for (let i = 0; i < arr.length ; i++){
        console.log('idCategory: '+idCategoryFilm)

        this.filmService.addCategoryFilm(idCategoryFilm,arr[i],film.id).subscribe(r=>{
          console.log(r);
        })
        idCategoryFilm +=1;
      }
      // this.createForm.reset();
      alert('Tạo thành công')
    }, error => {
      console.log(error)
    });
  }


  onSubmit() {
    this.add();

  }

  onCheckChange(e: any) {
    const categories: FormArray = this.createForm.get('categories') as FormArray;
    if (e.target.checked) {
      categories.push(new FormControl(e.target.value));
    } else {
      let i = 0;
      categories.controls.forEach((item: FormControl) => {
        if (item.value === e.target.value) {
          categories.removeAt(i);
          return;
        }
        i++;
      });
    }
  }

  // rfContact: FormGroup;
  //
  // onSubmitArray() {
  //   console.log(this.rfContact.value)
  // }
  // get tels(): FormArray {
  //   return this.rfContact.get('tels') as FormArray;
  // }
  // addTel() {
  //   this.tels.push(this.fb.control(''));
  // }
  //
  // removeTel(index: number) {
  //   this.tels.removeAt(index);
  // }
}
