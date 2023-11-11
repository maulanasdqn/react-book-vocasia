import { Layout } from "@/layouts";
import { Button } from "@/components";

import { useState } from "react";
import { useLocalStorage } from "@/libs";
import { useNavigate } from "react-router-dom";

export const CreateBookPage = () => {
  const [createData, setCreateData] = useState({
    title: "",
    author: "",
  });

  const { updateValue, value } = useLocalStorage("books");

  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    updateValue([...value, { ...createData, id: new Date().getTime() }]);
    setCreateData({
      title: "",
      author: "",
    });
    navigate("/");
  };

  return (
    <Layout>
      <div className="flex items-center w-full">
        <p className="text-white mb-4 text-2xl font-bold mr-auto">
          Tambah Buku
        </p>
      </div>

      <form onSubmit={onSubmit}>
        <div className="mb-6">
          <label className="block mb-2 text-sm font-medium text-white">
            Judul Buku
          </label>
          <input
            value={createData.title}
            onChange={(e) =>
              setCreateData({ ...createData, title: e.target.value })
            }
            type="text"
            className=" border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div className="mb-6">
          <label className="block mb-2 text-sm font-medium text-white">
            Pengarang
          </label>
          <input
            value={createData.author}
            onChange={(e) =>
              setCreateData({ ...createData, author: e.target.value })
            }
            type="text"
            className=" border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>
        <div className="flex items-start gap-x-4">
          <Button variant="primary" type="submit">
            Tambah
          </Button>
          <Button href="/" variant="secondary" type="button">
            Batal
          </Button>
        </div>
      </form>
    </Layout>
  );
};
