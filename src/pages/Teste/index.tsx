import { SearchableTable } from "../../components/Table";

interface Column {
  id: string;
  label: string;
}

interface Data {
  [key: string]: string | number;
}

const columns: Column[] = [
    { id: 'ID', label: 'ID' },
    { id: 'Nome', label: 'Nome' },
    { id: 'Email', label: 'Email' },
  ];
  
  const data: Data[] = [
    { ID: 1, Nome: 'João', Email: 'joao@email.com' },
    { ID: 2, Nome: 'teste', Email: 'joao@email.com' },
    { ID: 1, Nome: 'João', Email: 'joao@email.com' },
    { ID: 2, Nome: 'teste', Email: 'joao@email.com' },
    { ID: 1, Nome: 'João', Email: 'joao@email.com' },
    { ID: 2, Nome: 'teste', Email: 'joao@email.com' },
    { ID: 1, Nome: 'João', Email: 'joao@email.com' },
    { ID: 2, Nome: 'teste', Email: 'joao@email.com' },
    { ID: 1, Nome: 'João', Email: 'joao@email.com' },
    { ID: 2, Nome: 'teste', Email: 'joao@email.com' },
  ];
  
  function Teste() {
    return (
      <div>
        <h1>Tabela com Busca</h1>
        <SearchableTable data={data} columns={columns} />
      </div>
    );
  }
  
  export default Teste;