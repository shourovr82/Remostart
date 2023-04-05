import React, { useState } from 'react';
import Dropzone from 'react-dropzone';
import { useForm } from 'react-hook-form';

function Test() {
  const { register, handleSubmit, errors } = useForm();
  const [files, setFiles] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);

  const onDrop = (acceptedFiles) => {
    setFiles(acceptedFiles);
  };

  const onSelectChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append('startupName', data.startupName);
    files.forEach((file) => {
      formData.append(selectedOption, file);
    });
    // try {
    //     const response = await axios.put('/api/documents', formData, {
    //         headers: {
    //             'Content-Type': 'multipart/form-data',
    //         },
    //     });

    // } catch (err) {

    // }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label className="block text-gray-700 font-medium mb-2">
        Startup Name:
        <input
          className="form-input rounded-md shadow-sm mt-1 block w-full"
          type="text"
          name="startupName"
          {...register('startupName', {
            required: true,
          })}
        />
      </label>
      <label className="block text-gray-700 font-medium mb-2">
        Select Option:
        <select
          className="form-select rounded-md shadow-sm mt-1 block w-full"
          name="selectOption"
          onChange={onSelectChange}
          {...register('options', {
            required: true,
          })}
        >
          <option value="">something</option>
          <option value="passport">Passport</option>
          <option value="license">License</option>
        </select>
      </label>
      <Dropzone className="bg-gray-200 rounded-md p-4" onDrop={onDrop} multiple>
        {({ getRootProps, getInputProps }) => (
          <section {...getRootProps()}>
            <input {...getInputProps()} />
            <p className="text-center text-gray-500">
              Drag drop some files here, or click to select files
            </p>
          </section>
        )}
      </Dropzone>
      <aside className="mt-4">
        <ul className="text-sm text-gray-700">
          {files.map((file) => (
            <li key={file.path}>
              {file.path} - {file.size} bytes
            </li>
          ))}
        </ul>
      </aside>
      <button
        className="bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600"
        type="submit"
      >
        Submit
      </button>
    </form>
  );
}

export default Test;
