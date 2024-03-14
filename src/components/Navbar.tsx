import "./cstyles.css";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

function Navbar() {
  return (
    <>
      <nav>
        <img src="logo.png" alt="logo" width="90" height="90" float-left></img> 
        <img src="elgog.png" alt="elgog" width="320" height="80"></img>
      

      <div className="flex w-full max-w-sm items-center space-x-2 ">
      <Input type="Produkt" placeholder="Szukaj Produktu" />
      <Button type="submit">Szukaj</Button>
      </div>
        
      </nav>
    </>
  );
}

export default Navbar;
