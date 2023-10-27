import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent {

public  PopularMovies:string='Popular Movies';
movies:string[]=['Por Thozhi','Mark Antony','Jai Bheem','Viduthalai']
public  moviesCollection=[
  {movieName:' Por Thozhi',Directors: 'Vignesh Raja, T. Senthil Paramasivam',Stars: 'R. Sarathkumar, Ashok Selvan, Nikhila Vimal, Sarath Babu'},
  {movieName:'Mark Antony',Directors: 'Adhik Ravichandran',Stars: ' Vishal, S.J. Suryah, Ritu Varma, Sunil'},
  {movieName:'Jai Bheem',Directors: 'T.J. Gnanavel',Stars: ' Suriya, Lijo Mol Jose, Manikandan K., Rajisha Vijayan'},
  {movieName:' Viduthalai',Directors: ' Vetrimaaran',Stars: 'Soori, Vijay Sethupathi, Bhavani Sre, S. Chandan'},
  {movieName:'Kaithi',Directors: 'Lokesh Kanagaraj',Stars: ' Karthi, Narain, Arjun Das, George Maryan'},
  {movieName:' Raatchasan',Directors: 'RamKumar',Stars: '  Vishnu Vishal, Amala Paul, Radha Ravi, Sangili Murugan'}
]
public ngswitch:number=0

public ngifValue=true

books=['Analmel panithuli']

booksCollection=[{
  'bookid':101,
  'bookName':'Na.Muthukumar Kavithaikal',
  'authar':'Na.muthukumar',
  'bookStates':'Available'
},
{
  'bookid':102,
  'bookName':'Bavachelladurai sintahnaikal',
  'authar':'Bavachelladurai',
  'bookStates':'Available'
},
{
  'bookid':103,
  'bookName':'Banyan Moon  ',
  'authar':'by Thao Thai',
  'bookStates':'Available'
},
{
  'bookid':104,
  'bookName':'The Sunset Crowd ',
  'authar':'by Karin Tanabe',
  'bookStates':'Available'
},
{
  'bookid':105,
  'bookName':'Tom Lake  ',
  'authar':'by Ann Patchett',
  'bookStates':'notAvailable'
},
{
  'bookid':106,
  'bookName':'Tom Look',
  'authar':'by Ann Patchett',
  'bookStates':'notAvailable'
},
{
  'bookid':107,
  'bookName':'Tom took',
  'authar':'by Ann Patchett',
  'bookStates':'Available'
},
{
  'bookid':108,
  'bookName':'Tom took',
  'authar':'by Ann Patchett',
  'bookStates':'printing'
},]
val=''
}

