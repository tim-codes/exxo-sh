import { NextPage } from 'next';
import { Welcome } from "../components/Welcome/Welcome";
import { ColorSchemeToggle } from "../components/ColorSchemeToggle/ColorSchemeToggle";

const HomePage: NextPage = () => (
  <>
    <Welcome />
    <ColorSchemeToggle />
  </>
);
