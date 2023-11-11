import { Layout } from "@/layouts";
import { Button } from "@/components";
import { useLocalStorage } from "@/libs";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

export const UpdateBookPage = () => {
  const { updateValue, value } = useLocalStorage("books");

  const navigate = useNavigate();

  const { id } = useParams();

  const [createData, setCreateData] = useState({
    title: "",
    author: "",
  });

  const onSubmit = (e) => {
    e.preventDefault();
    const newItem = value?.map((item) => {
      if (item.id === Number(id)) {
        return { ...item, ...{ ...createData, id } };
      }
      return item;
    });

    console.log(newItem);
    updateValue(newItem);
    setCreateData({
      title: "",
      author: "",
    });
    navigate("/");
  };

  useEffect(() => {
    setCreateData({
      title: value.find((item) => item.id === Number(id))?.title,
      author: value.find((item) => item.id === Number(id))?.author,
    });
  }, [value, id]);

  return (
    <Layout>
      <div className="flex items-center w-full">
        <p className="text-white mb-4 text-2xl font-bold mr-auto">
          Ubah Data Buku
        </p>
      </div>

      <form onSubmit={onSubmit}>
        <div className="mb-6">
          <label className="block mb-2 text-sm font-medium text-white">
            Judul Buku
          </label>
          <input
            onChange={(e) =>
              setCreateData({ ...createData, title: e.target.value })
            }
            value={createData.title}
            type="text"
            className=" border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-6">
          <label className="block mb-2 text-sm font-medium text-white">
            Pengarang
          </label>
          <input
            onChange={(e) =>
              setCreateData({ ...createData, author: e.target.value })
            }
            value={createData.author}
            type="text"
            className=" border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>
        <div className="flex items-start gap-x-4">
          <Button type="submit" variant="primary">
            Ubah
          </Button>
          <Button href="/" variant="secondary" type="button">
            Batal
          </Button>
        </div>
      </form>
    </Layout>
  );
};
