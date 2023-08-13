<?php
    include("DB_Connection.php");

    class DB extends DB_Connection{
        public function show_data(){
            $SQL = "SELECT * FROM livros";

            $BFetch = $this -> conectDB() -> prepare($SQL);
            $BFetch -> execute();

            $Data = [];
            $Indice = 0;

            while($Fetch = $BFetch -> fetch(PDO::FETCH_ASSOC)){
                $Data[$Indice] = [
                    "id" => $Fetch['id'],
                    "titulo" => $Fetch['titulo'],
                    "autor" => $Fetch['autor'],
                    "ano" => $Fetch['ano'],
                    "num_paginas" => $Fetch['num_paginas'],
                    "preco" => $Fetch['preco'],
                    "descricao" => $Fetch['descricao']
                ];
                $Indice++;
            }

            header("Access-Control-Allow-Origin:*");
            header("Content-type: application/json");

            echo json_encode($Data);
        }
    }

    $exec = new DB();
    $exec -> show_data();

  


?>