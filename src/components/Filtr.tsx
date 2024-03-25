import { Button } from "./ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";


interface FiltrProps {
  onSortOrderChanged: (order: 'lowest' | 'highest' | '') => void;
}

function Filtr({ onSortOrderChanged }: FiltrProps) {
  const handleSortChange = (value: string) => {
    onSortOrderChanged(value as 'lowest' | 'highest' | '');
  };

 
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>
            Sortowanie
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Select onValueChange={handleSortChange}>
            <SelectTrigger>
              <SelectValue>Cena</SelectValue>
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="lowest">cena: od najniższej</SelectItem>
              <SelectItem value="highest">cena: od najwyższej</SelectItem>
            </SelectContent>
          </Select>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>
            Filtr
          </CardTitle>
        </CardHeader>
        <CardContent className="flex">
          <div className="flex space-x-2">
            <Input type="number" placeholder="od"></Input>
            <Input type="number" placeholder="do"></Input>
          </div>
        </CardContent>
        <CardFooter>
          <Button className="mx-auto">Filtruj</Button>
        </CardFooter>
      </Card>
    </div>
  );
}

export default Filtr;