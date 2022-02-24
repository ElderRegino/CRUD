import { Component, OnInit } from '@angular/core';
import { Equipo, EquipoService } from '../../SERVICES/equipo.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.component.html',
  styleUrls: ['./modificar.component.css']
})
export class ModificarComponent implements OnInit {

  equipo: Equipo = {
    id_equipo: 0,
    nombre: "",
    logo: ""
  };


  constructor(private EquipoService: EquipoService, private router: Router, private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const params = this.activeRoute.snapshot.params;
    console.log('id_entrada: ' + params.id)

    const id_entrada = <number>this.activeRoute.snapshot.params.id;
    console.log('id_entrada: ' + id_entrada);

    if (id_entrada) {
      this.EquipoService.getUnEquipo(id_entrada).subscribe(
        (res: any) => {
          this.equipo = res[0];
        },
        err => console.log(err)
      );
    }
  }


  modificar() {

     this.EquipoService.editEquipo(<number>this.equipo.id_equipo, this.equipo).subscribe(
       res=>{
         console.log(res);

       },
      err=>console.log(err)
    );
       this.router.navigate(['/inicio']);
   }
}
