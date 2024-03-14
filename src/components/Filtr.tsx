import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import { Button } from "./ui/button";

function Filtr() {
    return (
      <div className="sort">
        <div className="sortowanie">
          <b>Sortowanie</b>
        </div>

        <div className="sortowanieSelect">
        <Select>
        <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Cena" />
        </SelectTrigger>
        <SelectContent>
        <SelectItem value="lowest">cena: od najniższej</SelectItem>
        <SelectItem value="highest">cena: od najwyższej</SelectItem>
        </SelectContent>
        </Select>   
        </div>

        <div className="filtr">
          <b>Filtry</b>
        </div>

        <div className="filtrSelect" style={{ textAlign: `center` }}>
        <input type="Od" placeholder="od" style={{width: `50px`, float:"left",borderRadius: '5px', backgroundColor: '#f0f0f0', padding: '5px' }}></input>  
        <input type="Do" placeholder="do" style={{width: `50px`, borderRadius: '5px', backgroundColor: '#f0f0f0', padding: '5px'}}></input> <br></br>
        </div>
        <div className="Filtrbutton" >
        <Button style={{ textAlign: `center` }}>Filtruj</Button>
        </div>
      </div>

      
    );
  }
  
  export default Filtr;
  

 