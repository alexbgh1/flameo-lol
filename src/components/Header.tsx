import Button from "./Button";
import Select from "./Select";

interface HeaderProps {
  bg: string;
  handleNewFlameo: () => void;
  handleChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}
const Header = ({ bg, handleNewFlameo, handleChange }: HeaderProps) => {
  return (
    <div className="flex flex-col justify-between items-center">
      <Select className="w-full" label="Cambiar fondo" onChange={handleChange} value={bg}>
        <option value="bg:none">Ninguno</option>
        <option value="bg:bg-zinc">Gris</option>
        <option value="img:grieta">Grieta del Invocador</option>
        <option value="img:abismo">Abismo de los Lamentos</option>
        <option value="img:bosque">Bosque Retorcido</option>
      </Select>
      <Button className="w-full" onClick={handleNewFlameo}>
        Roll
      </Button>
    </div>
  );
};

export default Header;
