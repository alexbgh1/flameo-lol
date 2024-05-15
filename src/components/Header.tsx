import Select from "./Select";

interface HeaderProps {
  bg: string;
  handleChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}
const Header = ({ bg, handleChange }: HeaderProps) => {
  return (
    <div className="flex flex-col items-center justify-between">
      <Select className="w-full" label="Cambiar fondo" onChange={handleChange} value={bg}>
        <option value="bg:none">Ninguno</option>
        <option value="bg:bg-zinc">Gris</option>
        <option value="img:i2v2">2v2</option>
        <option value="img:grieta">Grieta del Invocador</option>
        <option value="img:abismo">Abismo de los Lamentos</option>
        <option value="img:bosque">Bosque Retorcido</option>
      </Select>
    </div>
  );
};

export default Header;
