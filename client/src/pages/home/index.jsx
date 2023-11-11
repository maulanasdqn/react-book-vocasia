import { Layout } from "@/layouts";
import { Button, Table } from "@/components";
import { useLocalStorage } from "@/libs";

export const HomePage = () => {
  const { value } = useLocalStorage("books", []);

  const columns = [
    {
      header: "No",
    },
    {
      header: "Judul",
    },
    {
      header: "Pengarang",
    },
    {
      header: "Aksi",
    },
  ];

  return (
    <Layout>
      <div className="flex items-center w-full">
        <p className="text-white mb-4 text-2xl font-bold mr-auto">List Buku</p>
        <Button href="/create" className="mb-5" variant="primary">
          Tambah Buku
        </Button>
      </div>
      <Table columns={columns} data={value} />
    </Layout>
  );
};
