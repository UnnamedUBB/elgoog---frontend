import "./cstyles.css";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Dispatch, SetStateAction,  } from "react";

type NavbarProps = {
  onSearchInputChanged: Dispatch<SetStateAction<string>>;
  search: () => void;
}

function Navbar({ onSearchInputChanged, search }: NavbarProps) {  
  return (
    <>
      <nav>
        <div className="flex">
        <img src="logo.png" alt="logo" width="90" height="90" ></img> 
        <img src="elgog.png" alt="elgog" width="320" height="80"></img>
        </div>
      

      <div className="flex w-full max-w-sm items-center space-x-2 ">
      <Input type="text" placeholder="Szukaj Produktu" onChange={x => onSearchInputChanged(x.target.value)}/>
      <Button onClick={search} type="submit">Szukaj</Button>
      </div>
        
      </nav>
    </>
  );
}

export default Navbar;
