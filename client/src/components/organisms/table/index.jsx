import { Button } from "@/components";
import { useLocalStorage } from "@/libs";
import { useNavigate } from "react-router-dom";

export const Table = (props) => {
  const { updateValue, value } = useLocalStorage("books");
  const navigate = useNavigate();

  const handleDelete = (id) => {
    const ans = confirm("Are you sure?");
    if (ans) {
      const newValue = value?.filter((item) => item.id !== id);
      updateValue(newValue);
      navigate(0);
    }
  };

  return (
    <div className="relative overflow-x-auto">
      <table className="w-full text-sm text-left text-white">
        <thead className="text-xs uppercase bg-gray-700 text-white font-bold">
          <tr>
            {props.columns?.map((column, index) => (
              <th key={index} scope="col" className="px-6 py-3">
                {column.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {props.data
            ?.sort((a, b) => b.id - a.id)
            .map((row, index) => (
              <tr key={index} className="border-gray-700  bg-gray-800">
                <td className="px-6 py-4">{index + 1}</td>
                <td className="px-6 py-4">{row.title}</td>
                <td className="px-6 py-4">{row.author}</td>
                <td className="px-6 py-4">
                  <div className="flex gap-x-4">
                    <Button href={`/update/${row.id}`} variant="secondary">
                      Ubah
                    </Button>
                    <Button
                      onClick={() => handleDelete(row.id)}
                      variant="primary"
                    >
                      Hapus
                    </Button>
                  </div>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};
