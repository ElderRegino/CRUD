const rutas = require("express").Router();
const req = require("express/lib/request");
const res = require("express/lib/response");
const conexion = require ("./config/conexion")



//asignamos rutas 
//----------------------------------------------------

// get equipos

rutas.get("/",(req, res)=>{
    let sql = "select * from tb_equipo"
    conexion.query(sql, (err, rows, fields)=>{
        if (err) throw err;
        else{
            res.json(rows)
        }
    })
})

// get  un equipo
rutas.get("/:id",(req, res)=>{
    const {id} = req.params
    let sql = "select * from tb_equipo where id_equipo = ?"
    conexion.query(sql, [id],(err, rows, fields)=>{
        if (err) throw err;
        else{
            res.json(rows)
        }
    })
})  

// agregar un equipo
rutas.post("/",(req, res)=>{
    const {nombre, logo}= req.body
    let sql = `insert into tb_equipo (nombre, logo) values ('${nombre}','${logo}')`
        conexion.query(sql, (err, rows, fields)=>{
            if (err) throw err
             else{
                res.json({status: "equipo agregado"})
         }
    
     })

})   

// eliminar
rutas.delete("/:id", (req, res)=>{
    const{id}=req.params
    let sql = `delete from tb_equipo where id_equipo = '${id}' `
        conexion.query(sql, (err, rows, fields)=>{
            if (err) throw err
            else{
                res.json({status: "equipo eliminado"})
            }
        
    })
})

// modiicar
rutas.put("/:id",(req, res)=> {
    const{id}=req.params
    const{nombre, logo} = req.body

    let sql =`update tb_equipo set
                nombre = '${nombre}',
                logo = '${logo}'
                where id_equipo = '${id}'`
    conexion.query(sql, (err, rows, fields)=>{
        if (err) throw err
        else{
        res.json({status: "equipo modificado"})
            }
                
    })      
})

//----------------------------------------------------


module.exports= rutas; 

